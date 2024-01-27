export type PayrollData = {
  id: string; // uuid
  fromDate: Date; // start date of the period of pay
  toDate: Date; // end date of the period of pay
  file: string; // url of the PDF file (empty for now)
  amount: number; // payment amount
};
