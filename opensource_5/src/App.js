import './css/style.css';
import Container from './Container';
import data from './data';
function App() {
  return (
	<>
		<h1 className="title">basic :: Frontend Coding Test</h1>
		<Container propsValue={data} />
	</>
  );
}

export default App;
