import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonImg 
} from '@ionic/react';
import "./Header.css";

export const Header = ({AuthState, SignInHeader, SignUpHeader}) => {
  return (
    <section className='header-section'>
        <img
          src="https://ionic-docs-demo-v6.vercel.app/assets/madison.jpg"
          alt="The Wisconsin State Capitol building in Madison, WI at night"
        />
      <h1 className='header'>{AuthState ? SignUpHeader : SignInHeader}</h1>
    </section>
  );
};
