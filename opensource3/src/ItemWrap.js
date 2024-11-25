import { useEffect, useState } from 'react';
import { itemData, chgItemData } from './itemData';

function ItemWrap() {
	let productData = [itemData, chgItemData];
	let [data, setData] = useState(itemData);

	function chgData() {
		let btn = document.querySelectorAll(".btn");
		btn.forEach((item, i) => {
			item.addEventListener("click", function() {
				setData(productData[i]);
				btn.forEach((list, j) => {
					if(j === i) {
						btn[j].classList.add("on");
					} else {
						btn[j].classList.remove("on");
					}
				});
			})
		});
	}

	useEffect(() => {
		chgData();
	});

	return (
		<>
		<div className="item_wrap">
			<ul>
				{
					data.map((d, i) =>
						<li key={i+1}>
							<a href=""><img src={"/images/" + d.image} alt={"produce"+(i+1)} /></a>
							<div className="item_desc">
								<strong>{d.title}</strong>
								<div className="sale">
									<span>{d.sale}</span>
									<p>{d.dollar}</p>
								</div>
								<i>{d.won}</i>
							</div>
						</li>
					)
				}
			</ul>
		</div>
		<div className="btn_wrap">
			<div className="btn on"></div>
			<div className="btn"></div>
		</div>
	</>
	);	
}

export default ItemWrap;