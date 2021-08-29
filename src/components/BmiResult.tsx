import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";
import React from "react";

//prop result will either be number or string
//Unable to add on props.result.toFixed(2), to limit decimals to 2.
const BmiResult: React.FC<{ result: number | string }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <h2>Your BMI</h2>
            <h2>{props.result}</h2>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
