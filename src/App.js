import { Divider } from "@mui/material";
import ItemList from "./components/ItemList";
function App() {
  return (
    <div className="container">
      <h1>Popular Products</h1>
      <Divider />
      <ItemList />
    </div>
  );
}

export default App;
