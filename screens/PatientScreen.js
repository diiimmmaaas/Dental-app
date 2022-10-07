import styled from 'styled-components/native';
import { Foundation } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { CustomButton, GrayText, Badge } from '../components';

const PatientScreen = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <PatientDetails>
        <PatientFullName>{route.params.user.fullname}</PatientFullName>
        <GrayText>{route.params.user.phone}</GrayText>
        <PatientButtons>
          <FormulaButtonView>
            <CustomButton>Формула зубов</CustomButton>
          </FormulaButtonView>
          <PhoneButtonView>
            <CustomButton color='#84D269'>
              <Foundation name='telephone'
                          size={22}
                          color='white' />
            </CustomButton>
          </PhoneButtonView>
        </PatientButtons>
      </PatientDetails>
      <PatientAppointments>
        <Container>
          <AppointmentCard>
            <AppointmentCardRow>
              <MaterialCommunityIcons name='tooth' size={16} color='#A3A3A3' />
              <AppointmentCardLabel>Зуб: <Text style={{ fontWeight: '600' }}>12</Text>
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow>
              <Foundation name='clipboard-notes' size={24} color='black' />
              <AppointmentCardLabel>Диагноз: <Text
                style={{ fontWeight: '600' }}>{route.params.diagnosis}</Text>
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow
              style={{ marginTop: 15, justifyContent: 'space-between' }}>
              <Badge style={{ width: 155 }} active>11.10.2022 - 15:40</Badge>
              <Badge color="green">50 BYN</Badge>
            </AppointmentCardRow>
          </AppointmentCard>
        </Container>
      </PatientAppointments>
    </View>

  );
};


const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCardRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`;

const AppointmentCard = styled.View`
  shadow-color: '#2a86ff';
  shadow-opacity: 0.4;
  shadow-radius: 5;
  padding: 20px 25px;
  border-radius: 10px;
  background: white;
`;

const Container = styled.View`
  flex: 1;
  padding: 25px;
`;

const PatientDetails = styled(Container)`
  flex: 0.25;
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
