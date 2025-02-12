import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cards from "./components/cards";

function App() {
  let [data, setData] = useState("");

  const fetchData = async () => {
    const response = await Axios.get("http://localhost:5000/getDta");
    setData(response.data);
  };

  return (
    <>
      <Navbar />

      <Cards />
      <Footer />
    </>
  );
}

export default App;
