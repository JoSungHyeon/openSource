import { useState, useEffect } from "react";

function Banner() {

	let [state, setState] = useState({
		error: null,
		isLoaded: false,
		data: []
	})

	useEffect(() => {
		fetch('/data/data.json')
		.then(res => res.json())
		.then(
			res => {
				setState({
					error: null,
					isLoaded: true,
					data: res.banner
				});
			},
			err => {
				setState({
					error: null,
					isLoaded: false,
					data: []
				});
			}
		)
	}, []);

	let {error, isLoaded, data} = state;

	if(error) {
		return (
			<div>에러입니다.</div>
		);
	}

	if(!isLoaded) {
		return (
			<div className="loading">
				<img src="/images/loading.gif" alt="loading" />
			</div>
		);
	} else {
		return (
			<div className='banner'>
				<ul>
					{
						data.map((d, i) =>
							<li key={i+1}>
								<a href=''>
									<img src={`${process.env.PUBLIC_URL}/images/${d.src}`} alt={"app"+(i+1)} />
								</a>
							</li>
						)
					}
				</ul>
			</div>
		)
	}

}

export default Banner;