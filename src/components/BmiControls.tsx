import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import React from "react";
//TS: Explicitly specifies onCalculate and onReset props are functions but return nothing
const BmiControls: React.FC<{ onCalculate: () => void; onReset: () => void }> =
  (props) => {
    return (
      <IonRow>
        <IonCol className="ion-text-left">
          <IonButton onClick={props.onCalculate}>
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate
          </IonButton>
        </IonCol>
        <IonCol className="ion-text-right">
          <IonButton onClick={props.onReset}>
            <IonIcon slot="start" icon={refreshOutline} />
            Reset
          </IonButton>
        </IonCol>
      </IonRow>
    );
  };

export default BmiControls;
