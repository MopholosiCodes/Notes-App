import { 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonButton, 
    IonCheckbox 
} from '@ionic/react';
import "./Form.css";
export const Form = ({
    AuthState, 
    SignInButtonLabel, 
    SignUpButtonLabel, 
    FirstNameLabel, 
    LastNameLabel, 
    TsAndCsLabel
}) => {
  return (
    <div>
        <IonItem>
            <IonLabel position="floating">{FirstNameLabel}</IonLabel>
            <IonInput fill='outline'/>
        </IonItem>
        <IonItem>
            <IonLabel position="floating">{LastNameLabel}</IonLabel>
            <IonInput/>
        </IonItem>
        {AuthState && (
            <IonItem lines="none">
                <IonLabel>{TsAndCsLabel}</IonLabel>
                <IonCheckbox defaultChecked={true} slot="start" />
            </IonItem>
        )}
        <IonButton className="ion-margin-top" type="submit" expand="block">
            {AuthState ? SignUpButtonLabel : SignInButtonLabel}
        </IonButton>
    </div>
  );
};
