import { IonItem, IonLabel, IonTitle } from '@ionic/react'
import React from 'react'
import './NotificationItem.css'
type Props = {
  "type": string,
  "content": string
}

const NotificationItem:React.FC<Props> = (props) => {
  return(
    <IonItem>
      <div>
        <div className="date">2021/01/01 12:12</div>
        <div className="content">{props.content}</div>
      </div>     
    </IonItem>
  )
}
export default NotificationItem