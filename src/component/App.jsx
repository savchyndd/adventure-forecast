import Header from "./Header/Header";

import "./App.css";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
