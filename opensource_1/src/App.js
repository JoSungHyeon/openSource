import './css/style.css';
import data from './data';
import Form from './Form';
import Table from './Table';
import Pagination from './Pagination';

function App() {
  return (
	<div className="mytbl">
		<Form />
		<Table propsValue={data} />
		<Pagination />
	</div>
  );
}

export default App;
