import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar
} from '@ionic/react';
import { 
  resource_SignInHeader, 
  resource_SignUpHeader, 
  resource_SignInButtonLabel, 
  resource_SignUpButtonLabel,
  resource_FirstNameLabel,
  resource_LastNameLabel,
  resource_TsAndCsLabel,
  resource_SignInLink,
  resource_SignInOption,
  resource_SignUpLink,
  resource_SignUpOption
} from '../components/Auth/resources';
import { Header as AuthHeader} from '../components/Auth/Header';
import {Form} from '../components/Auth/Form';
import './style.css';
import { Footer } from '../components/Auth/Footer';
import { useState } from 'react';

export const Auth = () => {
  const [page,setpage] = useState(false)
  return (
    <IonPage className=''>
      <AuthHeader 
        SignInHeader={resource_SignInHeader}
        SignUpHeader={resource_SignUpHeader} 
        AuthState={page} 
      />
      <Form 
        SignInButtonLabel={resource_SignInButtonLabel}
        SignUpButtonLabel={resource_SignUpButtonLabel}
        FirstNameLabel={resource_FirstNameLabel}
        LastNameLabel={resource_LastNameLabel}
        TsAndCsLabel={resource_TsAndCsLabel}
        AuthState={page}
      />
      <Footer
        SignInLink={resource_SignInLink}
        SignUpLink={resource_SignUpLink}
        SignInOption={resource_SignInOption}
        SignUpOption={resource_SignUpOption}
        AuthState={page}
      />  
    </IonPage>
  );
};

