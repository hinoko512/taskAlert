import React, { useState } from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/react'

import NotificationItem from '../components/NotificationItem'

type notification = {
  "type": string,
  "content": string
}

const initState:notification[] = [
  {
    "type": "complete",
    "content": "Aさんがタスクを終了させました"
  },
  {
    "type": "expired",
    "content": "Bさんがタスクを終えられませんでした"
  }
]

const NotificationPage: React.FC = () => {
  const [notificationList, setNotificationList] = useState(initState)
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
        <IonList>
          {notificationList.map((value, index) => {
            return(
              <NotificationItem type={value.type} content={value.content} key={index}/>
            )
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NotificationPage;
