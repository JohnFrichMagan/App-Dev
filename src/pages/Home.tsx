import React from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { bookOutline, star } from 'ionicons/icons';
import { Route, Redirect } from 'react-router-dom';

import Scores from './Home.tabs/Scores';
import SecurityQuiz from './Home.tabs/SecurityQuiz';

const Home: React.FC = () => {
  const tabs = [
    {
      name: 'SecurityQuiz',
      tab: 'securityquiz',
      url: '/App-Dev/app/home/securityquiz',
      icon: bookOutline
    },
    {
      name: 'Scores',
      tab: 'scores',
      url: '/App-Dev/app/home/scores',
      icon: star
    }
  ];

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/App-Dev/app/home/securityquiz" component={SecurityQuiz} />
          <Route exact path="/App-Dev/app/home/scores" component={Scores} />
          <Route exact path="/App-Dev/app/home">
            <Redirect to="/App-Dev/app/home/securityquiz" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {tabs.map((item, index) => (
            <IonTabButton key={index} tab={item.tab} href={item.url}>
              <IonIcon icon={item.icon} />
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
