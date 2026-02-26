import Payments from "../models/payments"

export default (app) => {
  app.get("/pagamentos", (req, res) => Payments.list(res))
}