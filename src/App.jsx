import { Body_list } from "./assets/Body-_ist";
import { Listbdy } from "./assets/Listbdy";
import { Nav } from "./assets/Nav";

function App() {
  return (
    <div>
      <Nav />
      <div className="flex">
        <Listbdy />
        <Body_list />
      </div>
    </div>
  );
}

export default App;
