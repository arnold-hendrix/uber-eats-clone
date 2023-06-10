import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function HeaderTab() {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
      <View style={styles.buttonView}>
        <DeliveryButton
          text="Delivery"
          btnColor="black"
          textColor="white"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <PickupButton
          text="Pickup"
          btnColor="white"
          textColor="black"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
  );
}

const DeliveryButton = (props) => (
  <TouchableOpacity
    style={[
      {
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
      },
      styles.button,
    ]}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={[
        {
          color: props.activeTab === props.text ? 'white' : 'black',
        },
        styles.buttonText,
      ]}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

const PickupButton = (props) => (
  <TouchableOpacity
    style={[
      {
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
      },
      styles.button,
    ]}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={[
        {
          color: props.activeTab === props.text ? 'white' : 'black',
        },
        styles.buttonText,
      ]}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 15,
  },
  button: {
    borderRadius: 30,
    margin: (2, 5),
    padding: (5, 15),
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
