function Pagination() {
	return (
		<div className="pagination">
			<div className="btn_prev"><a href="" title="prev"><img src="images/list_prev.gif" alt="prev" /></a></div>
			<ul>
				<li><a href="">1</a></li>
				<li><a href="">2</a></li>
				<li><a href="">3</a></li>
				<li><a href="">4</a></li>
				<li><a href="">5</a></li>
				<li><a href="">6</a></li>
				<li><a href="">7</a></li>
				<li><a href="">8</a></li>
				<li><a href="">9</a></li>
				<li><a href="">10</a></li>
			</ul>
			<div className="btn_next"><a href="" title="next"><img src="images/list_next.gif" alt="next" /></a></div>
		</div>
	);
}

export default Pagination;