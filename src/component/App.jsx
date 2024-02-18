import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import SideBar from "./SideBar/SideBar";

import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <div>
        <Header />
        <main>
          <HomePage />
        </main>
      </div>
      <SideBar />
    </div>
  );
}

export default App;
