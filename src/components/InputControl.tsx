import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';

const InputControl: React.FC = () => {
return (
    <IonSegment>
        <IonSegmentButton>
            <IonLabel>m/kg</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton>
            <IonLabel>ft/lb</IonLabel>
        </IonSegmentButton>
    </IonSegment>
)
};

export default InputControl;