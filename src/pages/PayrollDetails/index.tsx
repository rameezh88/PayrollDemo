import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { RouteComponentProps, useLocation } from "react-router";
import { PayrollData } from "../../types";
import "./styles.css";

interface PayrollDetailsLocationState {
  payrollData: PayrollData;
}

const PayrollDetails: React.FC<RouteComponentProps> = () => {
  const { state } = useLocation<PayrollDetailsLocationState>();
  const [payrollData, setPayrollData] = useState<PayrollData>();

  useEffect(() => {
    if (state) {
      const { payrollData } = state;
      setPayrollData(payrollData);
    }
  }, [state, setPayrollData]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Payroll Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonLabel>Payroll details for period</IonLabel>
        {payrollData && (
          <>
            <IonLabel>{`From: ${format(
              payrollData.fromDate,
              "dd MMM yyyy"
            )}`}</IonLabel>
            <IonLabel>{`To: ${format(
              payrollData.fromDate,
              "dd MMM yyyy"
            )}`}</IonLabel>
            <IonLabel>{`Amount: $${payrollData.amount}`}</IonLabel>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default PayrollDetails;
