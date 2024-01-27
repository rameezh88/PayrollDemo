import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import "./styles.css";
import { payrollDataSamples } from "../../utils/data/payroll";
import PayrollListItem from "../../components/PayrollListItem";
import { PayrollData } from "../../types";
import { RouteComponentProps } from "react-router";

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const handlePayrollListItemClick = (payrollData: PayrollData) => {
    history.push({
      pathname: "/payroll-details",
      state: {
        payrollData,
      },
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Payroll Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {payrollDataSamples.map((payrollData) => (
            <PayrollListItem
              key={payrollData.id}
              payrollData={payrollData}
              onItemClick={handlePayrollListItemClick}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
