import React from "react";
import styled from "styled-components/native";

const CustomButton = ({children, color}) => {
    return (
        <Button color={color}>
            <ButtonText>{children}</ButtonText>
        </Button>
    );
};

CustomButton.defaultProps = {
    color: '#2F86FF'
}

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${props => props.color};
  text-align: center;
  height: 45px;
`

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`

export default CustomButton;
