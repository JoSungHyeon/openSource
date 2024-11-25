import { useState, useEffect } from "react";

function NewsWrap() {

	let [state, setState] = useState({
		error: null,
		isLoaded: false,
		data: []
	})

	useEffect(() => {
		setTimeout(() => {
			fetch('/data/data.json')
			.then(res => res.json())
			.then(
				res => {
					setState({
						error: null,
						isLoaded: true,
						data: res.news
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
		}, 1000);
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
			<div className='news_wrap'>
				<div className='news'>
					<div className='news_title'>
						<h3>새소식</h3>
						<a href=''>+ 더보기</a>
					</div>
					<ul>
						{
							data.map((d, i) =>
								<li key={i+1}>
									<a href=''>{d.text}</a>
									<span>{d.date}</span>
								</li>
							)
						}
					</ul>
				</div>
				<Category />
			</div>
		);
	}

}

function Category() {
	let [state, setState] = useState({
		error: null,
		isLoaded: false,
		data: []
	})

	useEffect(() => {
		setTimeout(() => {
			fetch('/data/data.json')
			.then(res => res.json())
			.then(
				res => {
					setState({
						error: null,
						isLoaded: true,
						data: res.category
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
		}, 2000);
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
			<div className='category'>
				<ul>
					{
						data.map((d, i) =>
							<li key={i+1}>
								<a href=''>{d.text}</a>
							</li>
						)
					}
				</ul>
			</div>
		)
	}

}

export default NewsWrap;