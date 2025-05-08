import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonRadioGroup,
    IonRadio,
    IonItem,
    IonLabel,
    IonButton,
    IonToast,
    IonButtons,
    IonMenuButton,
  
    IonInput
  } from '@ionic/react';
  import { useState, useEffect } from 'react';
  import { useHistory } from 'react-router-dom';
  
  const questions = [
    {
      question: "What is the most common method hackers use to gain access to your computer?",
      options: [
        "Installing software updates",
        "Phishing emails",
        "Using strong passwords",
        "Encrypting your data",
      ],
      answer: "Phishing emails",
    },
    {
      question: "What should you do if you receive a suspicious email from your bank asking for your login credentials?",
      options: [
        "Report it to your IT department and delete it",
        "Reply to verify the sender",
        "Click the link and change your password",
        "Forward it to coworkers",
      ],
      answer: "Report it to your IT department and delete it",
    },
    {
      question: "Which of the following is a strong password?",
      options: [
        "12345678",
        "Password1",
        "W!nt3r$N0w2025",
        "JohnDoe",
      ],
      answer: "W!nt3r$N0w2025",
    },
    {
      question: "Why is it risky to use public Wi-Fi for sensitive transactions?",
      options: [
        "It is slow",
        "It drains your battery",
        "It requires a password",
        "It may allow attackers to intercept your data",
      ],
      answer: "It may allow attackers to intercept your data",
    },
    {
      question: "What is two-factor authentication (2FA)?",
      options: [
        "Using your password twice",
        "Logging in from two devices",
        "Using a password plus a second method like a code or fingerprint",
        "A backup computer",
      ],
      answer: "Using a password plus a second method like a code or fingerprint",
    },
    {
      question: "What does malware stand for?",
      options: [
        "Major alert software",
        "Malicious software",
        "Manual alert warning",
        "Multi-algorithm ware",
      ],
      answer: "Malicious software",
    },
    {
      question: "Which of the following is safe to click on in an email?",
      options: [
        "A link from an unknown sender",
        "A file attachment with an .exe extension",
        "A link from your company's official IT team",
        "A message saying you won a prize",
      ],
      answer: "A link from your company's official IT team",
    },
    {
      question: "How often should you change your work passwords?",
      options: [
        "Every 60–90 days or as required by company policy",
        "Only when you forget them",
        "Once a year",
        "Never",
      ],
      answer: "Every 60–90 days or as required by company policy",
    },
    {
      question: "What is a sign that a website is secure for online transactions?",
      options: [
        "It loads fast",
        "It has 'https' and a padlock icon",
        "It asks for your full credit card number via email",
        "It has pop-up ads",
      ],
      answer: "It has 'https' and a padlock icon",
    },
    {
      question: "If you accidentally click on a suspicious link, what should you do immediately?",
      options: [
        "Ignore it",
        "Disconnect from the internet and report it to IT",
        "Restart your computer",
        "Send the link to a friend for advice",
      ],
      answer: "Disconnect from the internet and report it to IT",
    },
  ];
  
  const SecurityQuiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
    const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();
    const [isCorrect, setIsCorrect] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [showNext, setShowNext] = useState(false);
    const [timeLeft, setTimeLeft] = useState(5);
    const [timers, setTimers] = useState<number[]>([]);
    const [startTime, setStartTime] = useState<number>(0);
    const [quizDone, setQuizDone] = useState(false);
    const [nickname, setNickname] = useState('');
    const [nicknameSubmitted, setNicknameSubmitted] = useState(false);
  
    const history = useHistory();
  
    useEffect(() => {
      let interval: any;
      if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
        setTimeLeft(5);
        setStartTime(Date.now());
        interval = setInterval(() => {
          setTimeLeft(prev => {
            if (prev <= 1) {
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [currentQuestionIndex]);
  
    useEffect(() => {
      if (quizDone) {
        const playerInfo = { nickname, score, timers };
        const storedAttempts = localStorage.getItem('attempts');
        const attempts = storedAttempts ? JSON.parse(storedAttempts) : [];
        attempts.push(playerInfo);
        localStorage.setItem('attempts', JSON.stringify(attempts));
      }
    }, [quizDone]);
  
    const handleAnswer = () => {
      if (!selectedAnswer) return;
      const correctAnswer = questions[currentQuestionIndex].answer;
      const isAnswerCorrect = selectedAnswer === correctAnswer;
      setIsCorrect(isAnswerCorrect);
      setShowResult(true);
  
      if (isAnswerCorrect) {
        const timeTaken = Math.round((Date.now() - startTime) / 1000);
        const points = timeTaken <= 5 ? 10 : 5;
        setScore(prev => Math.min(prev + points, 100));
        setTimers(prev => [...prev, timeTaken]);
        setShowNext(true);
      }
    };
  
    const handleNext = () => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(undefined);
        setIsCorrect(false);
        setShowNext(false);
        setShowResult(false);
      } else {
        setQuizDone(true);
      }
    };
  
    const startQuiz = () => {
      if (nickname.trim() === '') {
        alert("Please enter your nickname first.");
        return;
      }
      setNicknameSubmitted(true);
      setCurrentQuestionIndex(0);
      setScore(0);
      setTimers([]);
      setQuizDone(false);
    };
  
    const playAgain = () => {
      setCurrentQuestionIndex(-1);
      setScore(0);
      setTimers([]);
      setSelectedAnswer(undefined);
      setIsCorrect(false);
      setShowNext(false);
      setShowResult(false);
      setQuizDone(false);
      setNickname('');
      setNicknameSubmitted(false);
    };
  
    const viewScore = () => {
      history.push('/it35-lab/app/home/favorites'); // Correct route path
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
           
              <IonMenuButton />
            </IonButtons>
            <IonTitle>
  <div style={{
    background: 'linear-gradient(90deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  }}>
    Security Awareness Quiz
  </div>
</IonTitle>

          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" style={{ backgroundColor: '#f4f4f9' }}>
          {!nicknameSubmitted && (
            <IonCard>
              <IonCardHeader>
              <IonCardTitle>
  <div style={{
    background: 'linear-gradient(135deg, #FF9A8B, #FAD0C4, #A1C4FD)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.2)'
  }}>
    Welcome!
  </div>
</IonCardTitle>

              </IonCardHeader>
              <IonCardContent>
              <IonInput
  placeholder="Enter your nickname"
  value={nickname}
  onIonChange={(e) => setNickname(e.detail.value!)}
  style={{
    fontSize: '18px',
    color: '#333',
    padding: '12px',
    borderRadius: '12px',
    border: '2px solid transparent',
    backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #a18cd1, #fbc2eb)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginTop: '15px'
  }}
/>

<IonButton
  expand="block"
  onClick={startQuiz}
  className="ion-margin-top"
  color="success"
  style={{
    backgroundColor: '#28a745', // Green color for the button (success)
    color: 'white', // White text
    fontWeight: 'bold', // Bold text for emphasis
    fontSize: '16px', // Slightly bigger font for readability
    borderRadius: '12px', // Rounded corners for modern look
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
  }}
  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'} // Hover color (darker green)
  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'} // Reset to original color
  onFocus={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Slight zoom effect on focus
  onBlur={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset zoom on blur
>
  Start Quiz
</IonButton>

              </IonCardContent>
            </IonCard>
          )}
  
          {nicknameSubmitted && currentQuestionIndex >= 0 && !quizDone && (
            <>
              <h4>Time left: {timeLeft}s</h4>
              <IonCard>
                <IonCardHeader>
                <IonCardTitle
  style={{
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    background: 'linear-gradient(90deg, #ff9a9e, #fad0c4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    marginBottom: '12px'
  }}
>
  Question {currentQuestionIndex + 1}
</IonCardTitle>

                </IonCardHeader>
                <IonCardContent>
                  <p><strong>{questions[currentQuestionIndex].question}</strong></p>
                  <IonRadioGroup
                    value={selectedAnswer}
                    onIonChange={e => setSelectedAnswer(e.detail.value)}
                  >
                    {questions[currentQuestionIndex].options.map((option, idx) => (
                      <IonItem key={idx}>
                        <IonLabel>{option}</IonLabel>
                        <IonRadio slot="start" value={option} />
                      </IonItem>
                    ))}
                  </IonRadioGroup>
                  <IonButton
  expand="block"
  onClick={handleAnswer}
  className="ion-margin-top"
  disabled={!selectedAnswer}
  color="secondary"
  style={{
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',  // Gradient color
    color: 'white',  // Text color
    fontWeight: 'bold',  // Text weight for emphasis
    fontSize: '16px',  // Font size
    borderRadius: '10px',  // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Light shadow for a lifted effect
    transition: 'all 0.3s ease'  // Smooth transition for hover effect
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}  // Slight scale on hover
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}  // Return to normal size
>
  Submit Answer
</IonButton>

                  {showNext && (
                  <IonButton
                  expand="block"
                  onClick={handleNext}
                  color="success"
                  className="ion-margin-top"
                  style={{
                    background: 'linear-gradient(to right, #28a745, #218838)',  // Green gradient (maintaining the "success" theme)
                    color: 'white',  // Text color remains white for readability
                    fontWeight: 'bold',  // Bold text for emphasis
                    fontSize: '16px',  // Font size
                    borderRadius: '25px',  // More rounded, unique edges
                    padding: '12px 20px',  // Adjusted padding for a better feel
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',  // Adds depth with a more pronounced shadow
                    transition: 'transform 0.3s ease, background 0.3s ease',  // Smooth hover effects
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';  // Slightly enlarge the button on hover
                    e.currentTarget.style.background = '#218838';  // Darker green on hover for effect
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';  // Return to normal size
                    e.currentTarget.style.background = 'linear-gradient(to right, #28a745, #218838)';  // Reset to original gradient
                  }}
                >
                  Next Question
                </IonButton>
                
                  )}
                </IonCardContent>
              </IonCard>
            </>
          )}
  
          {quizDone && (
            <IonCard>
              <IonCardHeader>
              <IonCardTitle
  style={{
    fontSize: '24px', // Increase the font size for prominence
    fontWeight: 'bold', // Make the text bold
    color: '#4CAF50', // Vibrant green color for the title (represents success)
    textAlign: 'center', // Center the text for better presentation
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
    marginBottom: '20px', // Add margin for spacing
  }}
>
  Well done, {nickname}!
</IonCardTitle>

              </IonCardHeader>
              <IonCardContent
  style={{
    backgroundColor: '#f9f9f9', // Light background color to make content stand out
    padding: '20px', // Add padding for spacing
    borderRadius: '10px', // Rounded corners for a smoother look
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  }}
>
  {/* Final Score */}
  <h2
    style={{
      fontSize: '24px', // Larger text for the final score
      fontWeight: 'bold', // Make the score stand out more
      color: '#4CAF50', // Green color for a success message
      textAlign: 'center', // Center the text for a clean look
      marginBottom: '20px', // Add space below the score
    }}
  >
    Final Score: {score} points
  </h2>

  {/* Timers for each question */}
  {timers.map((time, idx) => (
    <p
      key={idx}
      style={{
        fontSize: '18px', // Slightly larger text for clarity
        color: '#333', // Dark color for readability
        textAlign: 'center', // Center align for uniformity
        marginBottom: '10px', // Space between the timer details
      }}
    >
      Q{idx + 1}: {time} second(s)
    </p>
  ))}

  {/* Play Again Button */}
  <IonButton
    expand="block"
    onClick={playAgain}
    color="success"
    className="ion-margin-top"
    style={{
      backgroundColor: '#4CAF50', // Vibrant green for success
      color: '#fff', // White text for contrast
      fontWeight: 'bold', // Bold text for emphasis
      textAlign: 'center', // Center the text for a clean look
      padding: '12px', // Padding for better clickability
    }}
  >
    Play Again
  </IonButton>

  {/* View Score Button */}
  <IonButton
    expand="block"
    onClick={viewScore}
    color="tertiary"
    className="ion-margin-top"
    style={{
      backgroundColor: '#3f51b5', // Tertiary blue color for secondary action
      color: '#fff', // White text for contrast
      fontWeight: 'bold', // Bold text for visibility
      textAlign: 'center', // Center text for neatness
      padding: '12px', // Add padding to buttons
    }}
  >
    View Score
  </IonButton>
</IonCardContent>

            </IonCard>
          )}
  
  <IonToast
  isOpen={showResult}
  onDidDismiss={() => setShowResult(false)}
  message={isCorrect ? 'Correct! Great job.' : 'Incorrect. Try again!'}
  duration={1500}
  color={isCorrect ? 'success' : 'danger'}
  style={{
    backgroundColor: isCorrect ? '#4CAF50' : '#f44336', // Green for correct, red for incorrect
    color: '#fff', // White text for good contrast
    fontWeight: 'bold', // Make the text bold for emphasis
    borderRadius: '10px', // Rounded corners for a soft look
    padding: '15px', // Extra padding for better appearance and readability
    textAlign: 'center', // Center-align the message text
    marginTop: '15px', // Top margin for spacing
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
  }}
/>

        </IonContent>
      </IonPage>
    );
  };
  
  export default SecurityQuiz;
  