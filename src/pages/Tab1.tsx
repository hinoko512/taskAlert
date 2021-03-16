import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>課題リスト</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen  className="ion-padding">
        <IonList lines="inset">
          <IonItem>
            <IonLabel>Item1</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>Item2</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>Item3</IonLabel>
          </IonItem>         
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
