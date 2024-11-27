import './css/style.css'
import data from './data';
import Container from './Container';

function App() {

  return (
	<>
		<h1 className="title">basic :: React Example</h1>
		<Container propsValue={data}/>	
	</>
  );
}

export default App;
