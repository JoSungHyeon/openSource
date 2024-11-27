import { useState, useEffect } from 'react';
import gsap from 'gsap';
import axios from 'axios'

function Container() {
	let [gnb, setGnb] = useState(null);

	useEffect(() => {
		axios('/data/data.json')
		.then(result => {
			setGnb(result.data)
		})
		.catch(error => console.log(error));
	}, []);

	useEffect(() => {
		if(gnb === null) return;

		let nav=document.getElementById("nav");
		let depth1Li=nav.firstElementChild.children;
	
		for(let i=0; i<depth1Li.length; i++){
			depth1Li[i].addEventListener("mouseenter", function(e){
				let link=e.target.firstElementChild;
				link.classList.add("over");
	
				let sub=e.target.lastElementChild;
				// sub.style.display="block";
	
				gsap.fromTo(sub, { display: "block", height: 0 }, { height: "auto", duration: 0.3 });
			});
	
			depth1Li[i].addEventListener("mouseleave", function(e){
				let link=e.target.firstElementChild;
				link.classList.remove("over");
	
				let sub=e.target.lastElementChild;
				// sub.style.display="none";
	
				gsap.to(sub, { height: 0, duration: 0.3, onComplete: function(){
					if(sub.hasAttribute("style")){
						sub.removeAttribute("style");
					}
				}});
			});
	
			depth1Li[i].firstElementChild.addEventListener("focusin", function(e){
				e.target.classList.add("over");
	
				let sub=e.target.nextElementSibling;
				sub.style.display="block";
			});
	
			let depth2Li=depth1Li[i].lastElementChild.children;
	
			for(let j=0; j<depth2Li.length; j++){
				if(j === (depth2Li.length-1)){
					depth2Li[j].firstElementChild.addEventListener("focusout", function(e){
						let link=e.target.parentElement.parentElement.previousElementSibling;
						link.classList.remove("over");
	
						let sub=e.target.parentElement.parentElement;
						// sub.style.display="none";
						sub.removeAttribute("style");
					});
				}
			}
		}
	});




	console.log(gnb)

	if(gnb === null) {
		return (
			<p>오류입니다.</p>
		)
	} else {
		return (
			<div className="container">
				<nav id="nav">
					<ul>
						{
							gnb.map((d, i) => 
								<li key={i}>
									<a href="">{d.depth1}</a>
									<ul className='sub'>
										{
											d.depth2.map((d2, j) => 
												<li key={j}><a href="">{d2}</a></li>
											)
										}
									</ul>
								</li>
							)
						}
					</ul>
				</nav>
			</div>
		)
	}
}

export default Container;