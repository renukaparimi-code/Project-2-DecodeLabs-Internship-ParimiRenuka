import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Card from "../components/Card";

import "../styles/Explorer.css";
import Footer from "../components/Footer";
function Explorer() {

  const [components, setComponents] = useState([]);



  useEffect(() => {

    axios
      .get("http://localhost:5000/components")

      .then((res) => {

        setComponents(res.data);

      })

      .catch((err) => {

        console.log(err);

      });

  }, []);




  return (
    <div>

      <Navbar />

      <div className="explorer-title">

        <h1>
          Explore Components
        </h1>

      </div>

      <div className="cards-container">

        {
          components.map((item) => (

            <Card
              key={item.id}
              item={item}
            />

          ))
        }

      </div>

      <Footer />

    </div>
  );
}

export default Explorer;