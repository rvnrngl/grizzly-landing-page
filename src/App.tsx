import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Layout />
        <Footer />
      </div>
    </>
  );
}

export default App;
