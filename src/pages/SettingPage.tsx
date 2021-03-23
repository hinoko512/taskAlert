import React from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const SettingPage: React.FC = () => {
  return(
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>設定</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent fullscreen  className="ion-padding">
        setting
      </IonContent>
    </IonPage>
  )
}
export default SettingPage;