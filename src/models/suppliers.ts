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
        return;
      }
    });
  }

  listById(id: number, res) {
    const sql = `SELECT * FROM suppliers WHERE id=${id}`
    console.log(typeof id)
    connection.query(sql, (error: any, result: any) => {
      const supplier = result[0]
      if(error) {
        res.status(400).json(error)
        return
      } else {
        res.status(200).json(supplier)
        console.log(supplier);
        return
      }
    })
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

  update(id: number, res, values) {
    const sql = `UPDATE suppliers SET ? WHERE id=${id}`

    connection.query(sql, [values, id], (error, result) => {
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
