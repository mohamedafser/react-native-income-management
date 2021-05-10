import React from "react";
import { StyleSheet, View, Text, Modal, Picker } from "react-native";
import styled from "styled-components";
export const globalStyles = StyleSheet.create({
  middleContent: {
    flex: 1,
    justifyContent: "center"
  },
  inputInner: {
    paddingLeft: 15
  },
  inputContainer: {
    marginBottom: 15
  }
});

export const StyledButton = styled(View)`
  background: ${(props: any) => props.bg || "#ddd"};
  align-self: ${(props: any) => props.alignBtn || "center"};
  padding: 5px 15px;
  border-radius: 10px;
`;

export const StyledButtonText = styled(Text)`
  color: ${(props: any) => props.color || "#222"};
  font-size: 14px;
`;

export const StyledModelContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const StyledModel = styled(View)`
  flex-direction: column;
  background-color: #ddd;
  padding: 20px;
  margin: 0 15px;
  border-radius: 10px;
`;

export const StyledDropdown = styled(Picker)`
  border-bottom-width: 1px;
  border-bottom-color: #222;
`;
