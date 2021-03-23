import { IonItem } from '@ionic/react'
import React from 'react'
import './TaskItem.css'

type Props = {
  limit: string,
  name: string;
}

const TaskItem: React.FC<Props> = (props) => {
  return (
    <IonItem button onClick={()=>{}}>
      <div className="container">
        <div className="limit">{props.limit}</div>
        <div className="name">{props.name}</div>
      </div>
    </IonItem>
  )
}

export default TaskItem