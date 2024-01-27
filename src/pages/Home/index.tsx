import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./styles.css";
import { payrollDataSamples } from "../../utils/data/payroll";
import PayrollListItem from "../../components/PayrollListItem";

const Home: React.FC = () => {
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
            <PayrollListItem key={payrollData.id} payrollData={payrollData} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
