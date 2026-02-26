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
}

export default new Payments();
