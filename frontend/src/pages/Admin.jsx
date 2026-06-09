import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

import "../styles/Admin.css";

function Admin() {

  const [name, setName] = useState("");

  const [image, setImage] = useState("");

  const [description, setDescription] = useState("");

  const [functionText, setFunctionText] = useState("");

  const [components, setComponents] = useState([]);




  // FETCH COMPONENTS

  const fetchComponents = () => {

    axios
      .get("http://localhost:5000/components")

      .then((res) => {

        setComponents(res.data);

      })

      .catch((err) => {

        console.log(err);

      });

  };




  useEffect(() => {

    fetchComponents();

  }, []);





  // ADD COMPONENT

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newComponent = {

      name,

      image,

      description,

      function: functionText

    };



    try {

      await axios.post(
        "http://localhost:5000/components",
        newComponent
      );



      alert("Component Added Successfully");



      setName("");
      setImage("");
      setDescription("");
      setFunctionText("");



      fetchComponents();

    }

    catch (error) {

      console.log(error);

    }

  };






  // DELETE COMPONENT

  const deleteComponent = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/components/${id}`
      );



      alert("Component Deleted");



      fetchComponents();

    }

    catch (error) {

      console.log(error);

    }

  };






  return (
    <div>

      <Navbar />

      <div className="admin">

        <h1>
          Admin Dashboard
        </h1>





        <form
          className="admin-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Component Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />



          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />



          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>



          <textarea
            placeholder="Function"
            value={functionText}
            onChange={(e) => setFunctionText(e.target.value)}
          ></textarea>



          <button type="submit">

            Add Component

          </button>

        </form>






        <div className="admin-components">

          {
            components.map((item) => (

              <div
                className="admin-card"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt=""
                />

                <h2>
                  {item.name}
                </h2>

                <button
                  onClick={() => deleteComponent(item.id)}
                >

                  Delete

                </button>

              </div>

            ))
          }

        </div>

      </div>

    </div>
  );
}

export default Admin;