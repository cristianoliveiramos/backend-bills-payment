class Tables {
  private connection: any;

  init(connection: any) {
    this.connection = connection;
    this.createSuppliers();
  }

  createSuppliers() {
    const sql =
      "CREATE TABLE IF NOT EXISTS suppliers (id MEDIUMINT NOT NULL AUTO_INCREMENT, name VARCHAR(200), code INT, shortname VARCHAR(100), telephone VARCHAR(100), PRIMARY KEY (id))";
      this.connection.query(sql, (error: Error) => {
        if(error) {
          console.log(error);          
        } else {
          console.log('Table suppliers Created')          
        }
      })
  }
}

export default new Tables()