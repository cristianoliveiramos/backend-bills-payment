class Tables {
  private connection: any;

  init(connection: any) {
    this.connection = connection;
    this.createSuppliers();
  }

  createSuppliers() {
    const sql = `CREATE TABLE IF NOT EXISTS suppliers(
	      id MEDIUMINT NOT NULL AUTO_INCREMENT,
        code INT,
        name VARCHAR(200),    
        shortname VARCHAR(100),
        cnpj VARCHAR(20),
        state_inscription VARCHAR(20),        
        telephone VARCHAR(100), 
        whatsapp VARCHAR(100),
        email VARCHAR(100),
        address VARCHAR(100),       
        city VARCHAR(50),
        neighborhood VARCHAR(70),    
        state VARCHAR(5),
        zip_code VARCHAR(10),    
        representative_sales VARCHAR(50),
        representative_whatsapp VARCHAR(20),
        PRIMARY KEY (id)
    );`;
    this.connection.query(sql, (error: Error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Table suppliers Created");
      }
    });
  }

  createPayments() {
    const sql = `
      CREATE TABLE IF NOT EXISTS payments(
	    id MEDIUMINT NOT NULL AUTO_INCREMENT,
      supplierID MEDIUMINT NOT NULL,
      documentCode INT,
      date DATE NOT NULL,
      total FLOAT NOT NULL,
      installments INT NOT NULL,    
      dateInstallment1 DATE,
      valueInstallment1 FLOAT,
      dateInstallment2 DATE,
      valueInstallment2 FLOAT,
      dateInstallment3 DATE,
      valueInstallment3 FLOAT,
      dateInstallment4 DATE,
      valueInstallment4 FLOAT,
      dateInstallment5 DATE,
      valueInstallment5 FLOAT,
      dateInstallment6 DATE,
      valueInstallment6 FLOAT,
      dateInstallment7 DATE,
      valueInstallment7 FLOAT,
      dateInstallment8 DATE,
      valueInstallment8 FLOAT,
      dateInstallment9 DATE,
      valueInstallment9 FLOAT,
      dateInstallment10 DATE,
      valueInstallment10 FLOAT,
      dateInstallment11 DATE,
      valueInstallment11 FLOAT,
      dateInstallment12 DATE,
      valueInstallment12 FLOAT,
      INDEX (supplierID),
      FOREIGN KEY(supplierID) REFERENCES suppliers(id),
      PRIMARY KEY(id)
    );`;
  }
}

export default new Tables();
