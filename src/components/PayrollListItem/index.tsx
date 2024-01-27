import { IonItem, IonLabel } from "@ionic/react";
import { PayrollData } from "../../types";
import { format } from "date-fns";

const PayrollListItem = ({ payrollData }: { payrollData: PayrollData }) => {
  return (
    <IonItem>
      <IonLabel>{`Payroll for period from ${format(
        payrollData.fromDate,
        "dd MMM yy"
      )} to ${format(payrollData.toDate, "dd MMM yy")}`}</IonLabel>
    </IonItem>
  );
};

export default PayrollListItem;
