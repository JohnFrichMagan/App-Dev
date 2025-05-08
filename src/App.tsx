import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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

/* Pages */
import Login from './pages/Login';
import Menu from './pages/Menu';
import Register from './pages/Register';
import SecurityQuiz from './pages/Home.tabs/SecurityQuiz'; // ✅ Import your quiz component
import Favorites from './pages/Home.tabs/Favorite';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Existing routes */}
        <Route exact path="/App-Dev" component={Login} />
        <Route exact path="/App-Dev/register" component={Register} />
        <Route path="/App-Dev/app" component={Menu} />


        {/* ✅ New Security Quiz Route */}
        <Route exact path="/App-Dev/quiz" component={SecurityQuiz} />
        

        {/* Optional redirect */}
        <Redirect exact from="/" to="/App-Dev/quiz" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
