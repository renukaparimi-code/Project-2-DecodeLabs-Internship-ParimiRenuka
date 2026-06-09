const fs = require("fs");



// GET ALL COMPONENTS

const getComponents = (req, res) => {

  const data = fs.readFileSync("./data/components.json");

  const components = JSON.parse(data);

  res.json(components);

};




// GET SINGLE COMPONENT

const getSingleComponent = (req, res) => {

  const data = fs.readFileSync("./data/components.json");

  const components = JSON.parse(data);

  const id = parseInt(req.params.id);

  const component = components.find(
    (item) => item.id === id
  );

  res.json(component);

};




// ADD NEW COMPONENT

const addComponent = (req, res) => {

  const data = fs.readFileSync("./data/components.json");

  const components = JSON.parse(data);

  const newComponent = {

    id: Date.now(),

    ...req.body

  };

  components.push(newComponent);

  fs.writeFileSync(
    "./data/components.json",
    JSON.stringify(components, null, 2)
  );

  res.json({
    message: "Component Added",
    component: newComponent
  });

};




// DELETE COMPONENT

const deleteComponent = (req, res) => {

  const data = fs.readFileSync("./data/components.json");

  let components = JSON.parse(data);

  const id = parseInt(req.params.id);

  components = components.filter(
    (item) => item.id !== id
  );

  fs.writeFileSync(
    "./data/components.json",
    JSON.stringify(components, null, 2)
  );

  res.json({
    message: "Component Deleted"
  });

};




// EXPORTS

module.exports = {

  getComponents,

  getSingleComponent,

  addComponent,

  deleteComponent

};