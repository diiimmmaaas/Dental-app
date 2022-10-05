import styled from "styled-components/native";
import {Appointment} from "./Appointment";

Appointment.defaultProps = {
    title: 'Untitled',
}

export const SectionTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
  margin-top: 25px;
  padding: 0 20px;
`;

