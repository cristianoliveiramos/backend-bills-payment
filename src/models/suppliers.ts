import connection from "../database/connection";

class Suppliers {
  list(res: any) {
    const sql = "SELECT * FROM suppliers ORDER BY id";
    
    connection.query(sql, (error: any, result: any) => {
      if (error) {
        res.status(400).json(error);
        return;
      } else {
        res.status(200).json(result);
        console.log(result)
        return;
      }
    });
  }

  add(res: any, supplier: any) {
    const sql = "INSERT INTO suppliers SET ?";

    connection.query(sql, supplier, (error: any, result: any) => {
      if(error) {
        res.status(400).json(error)
        return
      } else {
        res.status(200).json(result)
        return
      }
    })
  }
}

export default new Suppliers();
