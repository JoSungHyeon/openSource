function Form() {
	return (
		<form>
			<div className="search">
				<input type="text" placeholder="제목 + 내용" id="search_area" />
				<input type="image" src="images/btn_search.gif" alt="검색" />
			</div>
		</form>
	)
}

export default Form;