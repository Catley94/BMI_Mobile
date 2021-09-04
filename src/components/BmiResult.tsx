import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";
import React from "react";
import "./BmiResult.css";

//prop result will either be number or string
//Unable to add on props.result.toFixed(2), to limit decimals to 2.
const BmiResult: React.FC<{ result: number | string }> = (props) => {
  return (
    <IonCard id="result">
      <IonCardContent className="ion-text-center">
        <h2>Your BMI</h2>
        <h3>{props.result}</h3>
      </IonCardContent>
    </IonCard>
  );
};

export default BmiResult;
