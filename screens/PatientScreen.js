import styled from "styled-components/native";
import {CustomButton, GrayText} from "../components";
import {Foundation} from "@expo/vector-icons";
import {View} from "react-native";

const PatientScreen = () => {
    return (
        <View style={{flex: 1}}>
            <PatientDetails>
                <PatientFullName>Marina Almazova</PatientFullName>
                <GrayText>+375297618499</GrayText>

                <PatientButtons>
                    <FormulaButtonView>
                        <CustomButton>Формула зубов</CustomButton>
                    </FormulaButtonView>
                    <PhoneButtonView>
                        <CustomButton color="#84D269">
                            <Foundation name="telephone"
                                        size={22}
                                        color="white"/>
                        </CustomButton>
                    </PhoneButtonView>
                </PatientButtons>
            </PatientDetails>
            <PatientAppointments>

            </PatientAppointments>
        </View>

    );
};


const Container = styled.View`
  flex: 1;
  padding: 25px;
`;

const PatientDetails = styled(Container)`
  flex: 0.3;
`;

const PatientAppointments = styled.View`
  flex: 0.7;
  background: #F8FAFD;
`;

const FormulaButtonView = styled.View`
  flex: 1
`;

const PhoneButtonView = styled.View`
  margin-left: 10px;
  width: 45px;
`;

const PatientButtons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const PatientFullName = styled.Text`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 5px;
`;


export default PatientScreen;
