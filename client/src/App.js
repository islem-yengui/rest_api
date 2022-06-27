import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="App">
      <UserList />
      <AddUser />
    </div>
  );
}

export default App;
