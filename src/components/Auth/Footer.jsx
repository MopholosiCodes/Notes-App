import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonFooter 
} from '@ionic/react';

export const Footer = ({SignInLink, SignUpLink, SignUpOption, SignInOption, AuthState}) => {
  return (
    <footer>
      <span>
            {AuthState 
              ? <p>{SignInOption} {SignInLink}</p>
              : <p>{SignUpOption} {SignUpLink}</p>}
      </span>
    </footer>
  )
};
