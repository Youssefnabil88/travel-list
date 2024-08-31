import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/packingList";
import Status from "./components/Status";


const items = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "water", quantity: 4, packed: false }
];


function App() {
  return (
    <div className="app">
      <Logo/>
      <Form/>
      <PackingList items={items}/>
      <Status/>
    </div>
  );
}

export default App;
