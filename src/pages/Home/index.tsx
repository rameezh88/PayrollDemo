import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { RouteComponentProps } from "react-router";
import PayrollListItem from "../../components/PayrollListItem";
import { payrollDataSamples } from "../../data/dummy/payroll";
import { PayrollData } from "../../types";
import "./styles.css";

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [payrollData] = useState(payrollDataSamples);

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
          {payrollData.map((payrollDataItem) => (
            <PayrollListItem
              key={payrollDataItem.id}
              payrollData={payrollDataItem}
              onItemClick={handlePayrollListItemClick}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
