import {
  IonButtons,
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
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { shieldCheckmarkOutline , radioButtonOnOutline, search, star } from 'ionicons/icons';
import { Route, Redirect } from 'react-router-dom';


import Favorites from './Home.tabs/Favorite';
import SecurityQuiz from './Home.tabs/SecurityQuiz';
import Search from './Home.tabs/Search';
import React from 'react';

const Home: React.FC = () => {
  const tabs = [
    {
      name: 'SecurityQuiz',
      tab: 'securityquiz',
      url: '/App-Dev/app/home/securityquiz',
      icon: shieldCheckmarkOutline,
    },
    {
      name: 'Search',
      tab: 'search',
      url: '/App-Dev/app/home/search',
      icon: search,
    },
    {
      name: 'Favorites',
      tab: 'favorites',
      url: '/App-Dev/app/home/favorites',
      icon: radioButtonOnOutline,
    },
  ];

  return (
    <IonReactRouter>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonTabs>
          <IonRouterOutlet>
            <Route
              exact
              path="/App-Dev/app/home/securityquiz"
              component={SecurityQuiz}
            />
            <Route exact path="/App-Dev/app/home/search" component={Search} />
            <Route exact path="/App-Dev/app/home/favorites" component={Favorites} />
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
      </IonPage>
    </IonReactRouter>
  );
};

export default Home;
