import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import React from "react";
//TS: Explicitly specifies onCalculate and onReset props are functions but return nothing
const BmiControls: React.FC<{ onCalculate: () => void; onReset: () => void }> =
  (props) => {
    return (
      <IonRow className="ion-margin-top">
        <IonCol size="12" size-md="6" className="ion-text-center">
          <IonButton
            size="large"
            expand="block"
            color="secondary"
            onClick={props.onCalculate}
          >
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate
          </IonButton>
        </IonCol>
        <IonCol size="12" size-md="6" className="ion-text-center">
          <IonButton onClick={props.onReset} fill="clear" color="medium">
            <IonIcon slot="start" icon={refreshOutline} />
            Reset
          </IonButton>
        </IonCol>
      </IonRow>
    );
  };

export default BmiControls;
