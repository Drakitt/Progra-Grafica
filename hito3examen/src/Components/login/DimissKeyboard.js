import React from 'react';
import {TouchableWithoutFeedback,Keyboard} from 'react-native';

const DimissKeyboard =({children})=> {
    return( 
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
    );
}
export default DimissKeyboard;