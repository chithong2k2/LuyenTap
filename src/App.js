import logo from './logo.svg';
import './App.css';
import PostItem from './components/PostItem';
import Usestate from './components/Usestate';
import ToDoList from './components/Todolist';
import User from './components/user/User';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
    </div>
  );
}
export default App;
