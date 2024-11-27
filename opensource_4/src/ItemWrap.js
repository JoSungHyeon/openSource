import { useEffect, useState } from 'react';
import data from './data';

function ItemWrap() {
	let [count, setCount] = useState(0);
	
	useEffect(() => {
		let controlList=document.querySelectorAll(".btn_wrap .btn");
  
		controlList[count].classList.add("on");
  
		controlList.forEach(function(item1, i){
		   item1.addEventListener("click", function(e){
			  e.preventDefault();
  
			  if(i === count) return;
  
			  setCount(i);
  
			  controlList.forEach(function(item2, j){
				 if(j === i){
					controlList[j].classList.add("on");
				 }
				 else{
					controlList[j].classList.remove("on");
				 }
			  })
		   });
		});
	});

	return (
		<>
		<div className="item_wrap">
			<ul>
				{
					data.map((d, i) => {
						if(i < (count+1)*4 && i >= count*4) {
							return (
								<ProductList key={i} propsValue={d} />
							)
						}
					})
				}
			</ul>
		</div>
		<div className="btn_wrap">
			<div className="btn">1</div>
			<div className="btn">2</div>
		</div>
	</>
	);	
}

function ProductList(props) {
	let {idx, image, title, sale, dollar, won} = props.propsValue
	return (
		<li>
			<a href=""><img src={`/images/${image}`} alt={`produce${idx}`} /></a>
			<div className="item_desc">
				<strong>{title}</strong>
				<div className="sale">
					<span>{sale}</span>
					<p>{dollar}</p>
				</div>
				<i>{won}</i>
			</div>
		</li>
	)
}

export default ItemWrap;