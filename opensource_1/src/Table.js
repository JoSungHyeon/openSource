function Table(props) {
	let data = props.propsValue;
	return (
		<table>
			<thead>
				<tr>
					<th scope="col" className="num">번호</th>
					<th scope="col" className="divide">구분</th>
					<th scope="col" className="th-title">제목</th>
					<th scope="col" className="date">등록일</th>
				</tr>
			</thead>
			<tbody>
				{
					data.map((d, i) =>
						<Tbody key={i+1} num={d.num} text={d.text} date={d.date} />
					)
				}
			</tbody>
		</table>
	);
}

function Tbody(props) {
	let {num, text, date} = props;

	return (
		<tr>
			<td className="num">{num}</td>
			<td className="divide"><img src="images/news_notice_icon.gif" alt="icon" /></td>
			<td className="title"><a href="">{text}</a></td>
			<td className="date">{date}</td>
		</tr>
	);
}

export default Table;