import Suppliers from "../models/suppliers";

export default app => {
  console.log("Controller called")
  app.get("/suppliers", (req, res) => Suppliers.list(res));

  app.post("/suppliers", (req, res) => {
    const supplier = req.body;
    Suppliers.add(res, supplier);
    console.log(req.body);
  });
};
