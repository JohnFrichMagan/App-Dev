import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonAlert,
  IonButtons,
  IonIcon
} from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { useIonRouter } from '@ionic/react'; // Import router for navigation

const Scores: React.FC = () => {
  const [attempts, setAttempts] = useState<any[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const router = useIonRouter(); // Initialize router

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear session data
    router.push('/App-Dev/-/login', 'forward', 'replace'); // Redirect to login page
  };

  useEffect(() => {
    const storedAttempts = JSON.parse(localStorage.getItem('attempts') || '[]');
    setAttempts(storedAttempts);
  }, []);

  // Function to handle delete operation for a selected attempt
  const handleDelete = (index: number) => {
    setSelectedIndex(index);
    setShowAlert(true); // Show alert to confirm delete
  };

  // Function to confirm the deletion of an attempt
  const confirmDelete = (index: number) => {
    const updatedAttempts = attempts.filter((_, i) => i !== index);
    setAttempts(updatedAttempts);
    localStorage.setItem('attempts', JSON.stringify(updatedAttempts)); // Update localStorage
    setShowAlert(false); // Close the alert
  };

  // Function to cancel the delete action
  const cancelDelete = () => {
    setShowAlert(false); // Close the alert
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="colorful-title">🌟 Scores</IonTitle>
          <IonButtons slot="end">
            {/* Logout Button */}
            <IonButton onClick={handleLogout} expand="full" shape="round" color="medium">
              <IonIcon icon={logOutOutline} slot="start" />
              Logout
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Check if there are attempts, else show message */}
        {attempts.length === 0 ? (
          <p>No attempts yet</p>
        ) : (
          attempts.map((attempt: any, index: number) => (
            <IonCard key={index}>
              <IonCardHeader>
                <h3>{attempt.nickname}</h3>
              </IonCardHeader>
              <IonCardContent>
                <p>Score: {attempt.score}</p>
                {attempt.timers?.map((time: number, idx: number) => (
                  <p key={idx}>Q{idx + 1}: {time} second(s)</p>
                ))}
                {/* Delete button for each attempt */}
                <IonButton
                  color="danger"
                  onClick={() => handleDelete(index)}
                  className="delete-button ion-margin-top"
                >
                  🗑️ Delete
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))
        )}

        {/* Alert Box to confirm delete action */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Confirm Delete'}
          message={'Are you sure you want to delete this attempt?'}
          buttons={[
            {
              text: 'No',
              role: 'cancel',
              handler: cancelDelete, // Cancel delete
            },
            {
              text: 'Yes',
              handler: () => {
                if (selectedIndex !== null) {
                  confirmDelete(selectedIndex); // Confirm and delete attempt
                }
              },
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Scores;