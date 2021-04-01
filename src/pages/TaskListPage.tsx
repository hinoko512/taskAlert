import React, { useState } from 'react'
import { 
  IonContent, IonPage,　IonList, 
  IonHeader, IonToolbar, IonTitle, 
  IonButton, IonIcon, IonFab, 
  IonFabButton, IonModal, IonButtons,
  IonItem, IonInput } from '@ionic/react'
import { add, close } from 'ionicons/icons'

import TaskItem from '../components/TaskItem'

type task = {
  "limit": string,
  "name": string
}
let initList:task[] = [
  {
    "name": "task1",
    "limit": "2021/01/01"
  },
  {
    "name": "task2",
    "limit": "2021/01/01"
  },
  {
    "name": "task3",
    "limit": "2021/01/01"
  },
]
const TaskListPage: React.FC = () => {
  const [taskList, setTaskList] = useState(initList)
  const [showModal, setShowModal] = useState(false)
  const [newTaskName, setNewTaskName] = useState('')
  const [newTaskLimit, setNewTaskLimit] = useState('')

  const addTask = (name:string, limit:string):void => {
    let newTaskList:task[] = taskList
    newTaskList.push({name: name, limit: limit})
    setTaskList(newTaskList)
    setShowModal(false)
  }

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>課題リスト</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Modal to add task */}
      <IonModal isOpen={showModal}>
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle>課題を追加する</IonTitle>       
             <IonButtons slot="end">
              <IonButton onClick={() => setShowModal(false)}>
                <IonIcon icon={close}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        
        <IonContent fullscreen className="ion-padding">
          <IonList>
            <IonItem>
              <IonInput value={newTaskName} placeholder="タスク名" onIonChange={e => setNewTaskName(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput value={newTaskLimit} placeholder="期限" onIonChange={e => setNewTaskLimit(e.detail.value!)}></IonInput>
            </IonItem>
          </IonList>
          <IonButton color="primary" expand="block" onClick={() => {addTask(newTaskName, newTaskLimit)}}>追加</IonButton>
        </IonContent>
      </IonModal>

      {/* Content */}
      <IonContent fullscreen  className="ion-padding">
        <IonList lines="inset">
          {taskList.map((value, index) => {
            return(
              <TaskItem 
                name={value.name} 
                limit={value.limit} 
                key={index} />
            )
          })}       
        </IonList> 
      </IonContent>

      {/* Button to add task */}
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton onClick={() => {setShowModal(true)}}>
            <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonPage> 
  );
};

export default TaskListPage;
