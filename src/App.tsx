import "./App.css";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";
function App() {
  return (
    <div className="main">
      <NavBar />
      <div className="wrapper">
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
      </div>
    </div>
  );
}

export default App;
