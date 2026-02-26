import connection from "../database/connection"

class Payments {
  list(res: any) {
    const sql= `
      SELECT 
	payments.id AS paymentId,
    suppliers.id AS suppliersId,
    suppliers.name AS suppliersName,
    documentCode,
    total,
    installment,    
    installments.dateInstallment1 AS dateInstallment1,
    installments.valueInstallment1 AS installment1,
    installments.dateInstallment2 AS dateInstallment2,
    installments.valueInstallment2 AS installment2,
    installments.dateInstallment3 AS dateInstallment3,
    installments.valueInstallment3 AS installment3,
    installments.dateInstallment4 AS dateInstallment4,
    installments.valueInstallment4 AS installment4,
    installments.dateInstallment5 AS dateInstallment5,
    installments.valueInstallment5 AS installment5,
    installments.dateInstallment6 AS dateInstallment6,
    installments.valueInstallment6 AS installment6,
    installments.dateInstallment7 AS dateInstallment7,
    installments.valueInstallment7 AS installment7,
    installments.dateInstallment8 AS dateInstallment8,
    installments.valueInstallment8 AS installment8,
    installments.dateInstallment9 AS dateInstallment9,
    installments.valueInstallment9 AS installment9,
    installments.dateInstallment10 AS dateInstallment10,
    installments.valueInstallment10 AS installment10,
    installments.dateInstallment11 AS dateInstallment11,
    installments.valueInstallment11 AS installment11,
    installments.dateInstallment12 AS dateInstallment12,
    installments.valueInstallment12 AS installment12
FROM payments
JOIN suppliers ON suppliers.id = payments.supplierID
JOIN installments ON installments.idInstallment = payments.installmentID;
    `;

    connection.query(sql, (error: any, result: any) => {
      if(error) {
        res.status(400).json(error);
        return
      } else {
        res.status(200).json(result)
        return
      }
    })
  }
}

export default new Payments()