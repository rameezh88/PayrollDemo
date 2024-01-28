import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { RouteComponentProps, useLocation } from "react-router";
import { PayrollData } from "../../types";
import { ContentContainer, DownloadButton } from "./styles";

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
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Payroll details</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {payrollData && (
              <>
                <IonText>
                  <p>{`From: ${format(
                    payrollData.fromDate,
                    "dd MMM yyyy"
                  )}`}</p>
                </IonText>
                <IonText>
                  <p>{`To: ${format(payrollData.fromDate, "dd MMM yyyy")}`}</p>
                </IonText>
                <IonText>
                  <p>{`Amount: $${payrollData.amount}`}</p>
                </IonText>
              </>
            )}
            <DownloadButton>Download payslip</DownloadButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PayrollDetails;
