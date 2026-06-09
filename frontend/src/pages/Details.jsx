import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import Navbar from "../components/Navbar";

import "../styles/Details.css";
import Footer from "../components/Footer";
function Details() {

  const { id } = useParams();

  const [component, setComponent] = useState(null);



  useEffect(() => {

    axios
      .get(`http://localhost:5000/components/${id}`)

      .then((res) => {

        setComponent(res.data);

      })

      .catch((err) => {

        console.log(err);

      });

  }, [id]);




  if (!component) {

    return <h1>Loading...</h1>;

  }




  return (
    <div>

      <Navbar />

      <div className="details">

        <img
          src={component.image}
          alt=""
        />

        <div className="details-content">

          <h1>
            {component.name}
          </h1>

          <p>
            {component.description}
          </p>

          <h2>
            Function
          </h2>

          <p>
            {component.function}
          </p>


        </div>

      </div>
      <Footer />

    </div>
  );
}

export default Details;