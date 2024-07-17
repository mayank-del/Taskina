import logo from './logo.svg';
import './App.css';
import Page from './components/Page';

function App() {
  const options=["page 1","page 2","page 3","page 4"]
  return (
    <div className="App">
      <Page options={options}/>
      <Page options={options}/>
      <Page options={options}/>
      <Page options={options}/>
      <Page options={options}/>
      <Page options={options}/>
      <Page options={options}/>
      <Page options={options}/>
    </div>
  );
}

export default App;
