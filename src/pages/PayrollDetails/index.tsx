import { Directory, Filesystem } from "@capacitor/filesystem";
import {
  IonBackButton,
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
  isPlatform,
} from "@ionic/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { RouteComponentProps, useLocation } from "react-router";
import { PayrollData } from "../../types";
import { DownloadButton, ErrorContainer, ErrorMessage } from "./styles";

interface PayrollDetailsLocationState {
  payrollData: PayrollData;
}

const PayrollDetails: React.FC<RouteComponentProps> = () => {
  const { state } = useLocation<PayrollDetailsLocationState>();
  const [payrollData, setPayrollData] = useState<PayrollData>();
  const [downloadError, setDownloadError] = useState<string | null>(null);

  useEffect(() => {
    if (state) {
      const { payrollData } = state;
      setPayrollData(payrollData);
    }
  }, [state, setPayrollData]);

  const handleDownloadPress = () => {
    setDownloadError(null);

    Filesystem.requestPermissions()
      .then(async () => {
        if (payrollData?.file) {
          const res = await Filesystem.downloadFile({
            path: `/${payrollData.id}_payslip.pdf`,
            directory: Directory.Documents,
            url: payrollData?.file,
            dataType: "file",
          });

          alert(
            "File downloaded successfully.\n You can find it in your Files app"
          );
        }
      })
      .catch((error) => {
        setDownloadError(error?.errorMessage);
      });
  };

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
                  <p>{`To: ${format(payrollData.toDate, "dd MMM yyyy")}`}</p>
                </IonText>
                <IonText>
                  <p>{`Amount: $${payrollData.amount}`}</p>
                </IonText>
              </>
            )}
            {(isPlatform("ios") || isPlatform("android")) && (
              <DownloadButton onClick={handleDownloadPress}>
                Download payslip
              </DownloadButton>
            )}
          </IonCardContent>
        </IonCard>
        <ErrorContainer>
          <ErrorMessage>{downloadError}</ErrorMessage>
        </ErrorContainer>
      </IonContent>
    </IonPage>
  );
};

export default PayrollDetails;
