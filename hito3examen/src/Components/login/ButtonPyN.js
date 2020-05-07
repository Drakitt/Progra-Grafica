import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import Colors from '../../Config/Colors';

const Button = ({titleButton, onPress, isLoading}) => {
  const loader = () => {
    return <ActivityIndicator animating={isLoading} />;
  };
  const button = () => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{titleButton}</Text>
      </TouchableOpacity>
    );
  };

  return <View style={styles.button}>{isLoading ? loader() : button()}</View>;
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    shadowColor: Colors.blue,
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 10},
    shadowRadius: 20,
    borderColor: Colors.white,
    borderWidth: 1,
  },
  text: {
    width: 100,
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 20,
  },
});

export default Button;