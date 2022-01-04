import ItemList from "./components/ItemList";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <ItemList />
      </div>
    </GlobalProvider>
  );
}

export default App;
