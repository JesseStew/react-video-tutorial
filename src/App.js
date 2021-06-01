// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent';
// import UserGreet from './components/UserGreeting'
import NameList from './components/NameList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameList />
        {/* <UserGreet /> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World.
        </p>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" />
        <FunctionClick />
        <Counter />
        <ClassClick />  */}
        {/* <EventBind />
        <ParentComponent /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
