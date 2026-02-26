import connection from "../database/connection";

class Payments {
  list(res: any) {
    const sql = `SELECT * FROM payments;`;

    connection.query(sql, (error: any, result: any) => {
      if (error) {
        res.status(400).json(error);
        return;
      } else {
        res.status(200).json(result);
        return;
      }
    });
  }

  add(res, payment) {
    const sql = `INSERT INTO payments SET ?;`

    connection.query(sql, payment, (error, result) => {
      if(error) {
        res.status(400).json(error)
      } else {
        res.status(200).json(result)
      }
    })
  }
}

export default new Payments();
