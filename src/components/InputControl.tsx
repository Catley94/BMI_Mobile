import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React from "react";

//onIonChange links to inputChangeHandler because it's expecting a string of either mkg or ftlbs, however it's an event so it returns a lot more
//It is now filtered so only the string value (e.detail.value) is passed on
const InputControl: React.FC<{
  selectedValue: "mkg" | "ftlbs";
  onSelectValue: (value: "mkg" | "ftlbs") => void;
}> = (props) => {
  const inputChangeHandler = (event: CustomEvent) => {
    props.onSelectValue(event.detail.value);
  };
  return (
    <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="mkg">
        <IonLabel>M / KG</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>FT / LBS</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
