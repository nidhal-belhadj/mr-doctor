import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./layout/Body";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
