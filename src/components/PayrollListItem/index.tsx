import { IonItem, IonLabel } from "@ionic/react";
import { PayrollData } from "../../types";
import { format } from "date-fns";

export interface PayrollListItemProps {
  payrollData: PayrollData;
  onItemClick?: (payrollData: PayrollData) => void;
}

const PayrollListItem: React.FC<PayrollListItemProps> = ({
  payrollData,
  onItemClick,
}) => {
  const handleClick = () => {
    if (onItemClick) {
      onItemClick(payrollData);
    }
  };

  return (
    <IonItem onClick={handleClick}>
      <IonLabel>{`Payroll for period from ${format(
        payrollData.fromDate,
        "dd MMM yy"
      )} to ${format(payrollData.toDate, "dd MMM yy")}`}</IonLabel>
    </IonItem>
  );
};

export default PayrollListItem;
