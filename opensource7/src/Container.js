import { useEffect } from "react";

function Container(props) {
	let data = props.propsValue

	let videoList = data.map(d => d.video);

	useEffect(() => {
		let container=document.querySelector(".container");
		let video=document.getElementById("my_video");
	
		video.muted=true;
	
		let buttonList=[];
		let flag;
	
		for(let item of container.children){
			if(item.tagName === "BUTTON"){
				buttonList.push(item);
			}
		}
	
		for(let i=0; i<buttonList.length; i++){
			buttonList[i].addEventListener("click", function(){
				if(flag === i) return;
				flag=i;
	
				video.setAttribute("src", "video/"+videoList[i]);
				video.currentTime=0;
				video.play();
			});
		}
	
		video.addEventListener("ended", function(){
			flag=null;
		});

	});

 	 return (
		<div className="container">
			{
				data.map((d, i) =>
					<button key={i} id={`video${i+1}`}>{`video${i+1}`}</button>
				)
			}
			<video id="my_video" src={`video/${videoList[0]}`}></video>
		</div>
 	 )
}

export default Container;