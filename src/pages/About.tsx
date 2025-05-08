import { 
  IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen> 
         <IonCard>
                      <img alt="Silhouette of mountains" src="https://i.pinimg.com/736x/0a/3c/eb/0a3ceb01e9ef08543c9de1d833f8ac08.jpg" />
                      <IonCardHeader>
                        <IonCardTitle>One Piece</IonCardTitle>
                        <IonCardSubtitle>The Legendary Treasure of the Grand Line</IonCardSubtitle>
                      </IonCardHeader>
                
                      <IonCardContent>
                      One Piece is a world-famous manga and anime series created by Eiichiro Oda. It follows the epic journey of Monkey D. Luffy and his crew, the Straw Hat Pirates, as they sail across the Grand Line in search of the legendary treasure known as One Piece. Luffy’s ultimate dream is to find this treasure and become the King of the Pirates, a title once held by the legendary pirate Gol D. Roger.
                      Set in a vast world full of islands, powerful enemies, and ancient mysteries, One Piece is known for its deep storytelling, rich world-building, and emotional character arcs. The world is ruled by the World Government, which enforces its power through the Marines, while powerful pirate crews roam the seas. Among them are the Four Emperors (Yonko), the most feared pirates in the world, and the Warlords of the Sea (Shichibukai), former powerful pirates allied with the government.
                      Luffy and his crew, including Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, and Jinbei, face countless challenges on their adventure. They battle powerful Marines, warlords, emperors, and even ancient creatures, all while uncovering secrets about the world’s lost history, including the Void Century and the true purpose of the Poneglyphs.
                      The One Piece itself remains a mystery, but it is believed to hold the truth about the world, as well as unimaginable wealth and power. Many believe that whoever finds it will reshape the future of the world. Luffy’s journey is not just about treasure but about freedom, friendship, and adventure, making One Piece one of the greatest and most beloved stories ever told.
                      </IonCardContent>
                    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;