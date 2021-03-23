import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {list, notifications, settings} from 'ionicons/icons';

import TaskListPage from './pages/TaskListPage';
import NotificationPage from './pages/NotificationPage';
import SettingPage from './pages/SettingPage'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        {/* Router */}
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <TaskListPage />
          </Route>
          <Route exact path="/tab2">
            <NotificationPage />
          </Route>
          <Route exact path="/setting">
            <SettingPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>

        {/* TabBar */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={list} />
            <IonLabel>課題リスト</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={notifications} />
            <IonLabel>通知</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/setting">
            <IonIcon icon={settings} />
            <IonLabel>設定</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
