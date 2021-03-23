import { IonContent, IonPage,　IonList, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon　} from '@ionic/react';
import TaskItem from '../components/TaskItem';

const TaskListPage: React.FC = () => {
  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>課題リスト</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent fullscreen  className="ion-padding">
        <IonList lines="inset">
          <TaskItem name="task1" limit="2021/01/01"></TaskItem>
          <TaskItem name="task1" limit="2021/01/01"></TaskItem>
          <TaskItem name="task1" limit="2021/01/01"></TaskItem>         
        </IonList>
      </IonContent>
    </IonPage> 
  );
};

export default TaskListPage;
