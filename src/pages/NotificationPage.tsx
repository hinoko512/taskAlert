import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const NotificationPage: React.FC = () => {
  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>通知</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      {/* Content */}
      <IonContent fullscreen  className="ion-padding">
        通知
      </IonContent>
    </IonPage>
  );
};

export default NotificationPage;
