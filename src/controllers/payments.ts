import Payments from "../models/payments";

export default (app) => {
  app.get("/payments", (req, res) => Payments.list(res));

   app.post("/payments", (req, res) => {
    const payment = req.body
    Payments.add(res, payment)
  })
};
