import React from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import Text from "../components/Text";

const TouchScreen = ({ navigation }) => {
  return (
    <Container>
      <Text center heavy title color="#964ff0" margin="32px 0 0 0">
        mybank
      </Text>

      <Touch onLongPress={() => navigation.navigate("Tabs")} delayPressIn={0}>
        <Circle bgColor="#5196f405">
          <Circle bgColor="#5196f410">
            <Circle bgColor="#5196f430">
              <TouchButton>
                <MaterialIcons name="fingerprint" size={64} color="#ffffff" />
              </TouchButton>
            </Circle>
          </Circle>
        </Circle>
      </Touch>

      <Text center heavy large>
        Touch ID sensor to access{"\n"}your mybank account
      </Text>

      <Text center bold color="#9c9c9f" margin="16px 0 0 0">
        Please verify your identity{"\n"}using Touch ID
      </Text>

      <PinAccess onPress={() => navigation.navigate("Pin")} delayPressIn={0}>
        <Fontisto name="locked" color="#964ff0" size={16} />
        <Text bold margin="0 0 0 8px" color="#964ff0">
          Enter Access PIN
        </Text>
      </PinAccess>

      <StatusBar barStyle="light-content" />
    </Container>
  );
};

export default TouchScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Touch = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.View`
  background-color: ${(props) => props.bgColor};
  padding: 32px;
  border-radius: 999px;
`;

const TouchButton = styled.TouchableOpacity`
  background-color: #5196f4;
  padding: 8px;
  border-radius: 100px;
`;

const PinAccess = styled.TouchableOpacity`
  margin-top: 16px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StatusBar = styled.StatusBar``;
