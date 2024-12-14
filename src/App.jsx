import "./App.css";
import ListUsers from "./components/ListUsers";
import { users } from "./components/info";

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-screen ">
      <ListUsers x={users} title={"hola,Bienvenidos"} />
    </div>
  );
}

export default App;
