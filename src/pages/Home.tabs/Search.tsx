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
  const Search: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonCard>
              <img alt="Silhouette of mountains" src="https://i.pinimg.com/736x/13/91/b2/1391b259304ad34ee373c09c258045ad.jpg" />
              <IonCardHeader>
                <IonCardTitle>Vinsmoke Sanji</IonCardTitle>
                <IonCardSubtitle>The Black Leg of the Straw Hat Pirates</IonCardSubtitle>
              </IonCardHeader>
        
              <IonCardContent>
              Vinsmoke Sanji is the cook of the Straw Hat Pirates and one of the strongest fighters in the crew. Born as the third son of the infamous Vinsmoke family, Sanji rejected his noble heritage and instead pursued his dream of finding the All Blue, a legendary sea where fish from all four oceans exist. He is a highly skilled martial artist, specializing in a powerful kicking-based fighting style known as Black Leg Style (Kuro Ashi), which he developed under the guidance of his mentor, Red-Leg Zeff.
              Sanji is a tall, lean yet muscular man with distinctive blond hair that usually covers one of his eyes. His most recognizable features are his curly eyebrows and his stylish, formal attire, often consisting of a black suit, dress shirt, and tie. He is known for his suave and flirtatious personality, constantly swooning over beautiful women and referring to them with great reverence. However, his love for women is also his greatest weakness—he refuses to harm them under any circumstances, even at the cost of his own life.
              As a fighter, Sanji is an absolute powerhouse, relying solely on his legs in battle to keep his hands reserved for cooking. His powerful kicks can generate flames, an ability known as Diable Jambe, which increases the strength and speed of his attacks. After awakening his genetically enhanced exoskeleton from his Vinsmoke lineage, he developed Ifrit Jambe, an even hotter, more destructive version of his flame kicks. Alongside his combat abilities, Sanji is also a master of stealth, using Sky Walk (Geppo) to move through the air and his Raid Suit (before discarding it) to become invisible.
              Despite his flirtatious and goofy nature, Sanji possesses a strong sense of honor, loyalty, and kindness. He values food deeply and will never let anyone go hungry, even an enemy. His most emotional moment occurs in the Whole Cake Island Arc, where he is forced to return to his family and nearly gives up on his dreams to protect his friends. However, through Luffy’s unwavering belief in him, Sanji finds his resolve again and fully embraces his place in the Straw Hat crew.
              Sanji’s role in the crew goes beyond being a cook—he is one of the Monster Trio, alongside Luffy and Zoro, making him one of the strongest members of the Straw Hats. His growth as a fighter, his ability to strategize in battle, and his deep loyalty to his friends make him an irreplaceable part of the crew. With each adventure, Sanji moves closer to achieving his dream of finding the All Blue, proving himself as one of the greatest chefs and warriors of the sea.
              </IonCardContent>
            </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  export default Search;