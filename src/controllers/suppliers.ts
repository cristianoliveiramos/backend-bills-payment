import Suppliers from "../models/suppliers";

export default app => {
  console.log("Controller called")
  app.get("/suppliers", (req, res) => Suppliers.list(res));

  app.post("/suppliers", (req, res) => {
    const supplier = req.body;    
    console.log(req.body);
    
    Suppliers.add(res, supplier);

    

  });

  app.get("/supplier/:id", (req, res) => {
    const id = parseInt(req.params.id)    
    Suppliers.listById(id, res)
  })

  app.put("/supplier/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const supplier = req.body

    Suppliers.update(id, res, supplier)
  })
};
