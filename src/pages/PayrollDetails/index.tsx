import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./styles.css";
import { PayrollData } from "../../types";
import { format } from "date-fns";
import { RouteComponentProps, useLocation } from "react-router";

interface PayrollDetailsLocationState {
  payrollData: PayrollData;
}

const PayrollDetails: React.FC<RouteComponentProps> = () => {
  const { state } = useLocation<PayrollDetailsLocationState>();
  const { payrollData } = state;

  // console.log("Should render payroll details", payrollData);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Payroll Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonLabel>Payroll details for period</IonLabel>
        <IonLabel>{`From: ${format(
          payrollData.fromDate,
          "dd MMM yyyy"
        )}`}</IonLabel>
        <IonLabel>{`To: ${format(
          payrollData.fromDate,
          "dd MMM yyyy"
        )}`}</IonLabel>
        <IonLabel>{`Amount: $${payrollData.amount}`}</IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default PayrollDetails;
