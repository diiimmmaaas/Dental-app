import styled from "styled-components/native";
import {SectionList} from "react-native";
import {Ionicons} from "@expo/vector-icons";

import {Appointment} from "./components/Appointment";
import {SectionTitle} from "./components/SectionTitle";

const DATA = [
    {
        title: "14 сентября",
        data: [
            {
                time: "15:30",
                diagnosis: "пульпит",
                active: true,
                user: {
                    fullname: "Vasya Pupkin",
                    avatar: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
                },
            },
            {
                time: "18:30",
                diagnosis: "удаление зуба",
                user: {
                    fullname: "Roman Zinin",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WI0fEmhyWbKPf37f3uMMvc3WUmN9sqJG0g&usqp=CAU"
                }
            },
            {
                time: "15:30",
                diagnosis: "пульпит",
                active: true,
                user: {
                    fullname: "Vasya Pupkin",
                    avatar: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
                },
            },
            {
                time: "18:30",
                diagnosis: "удаление зуба",
                user: {
                    fullname: "Roman Zinin",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WI0fEmhyWbKPf37f3uMMvc3WUmN9sqJG0g&usqp=CAU"
                }
            },
            {
                time: "15:30",
                diagnosis: "пульпит",
                active: true,
                user: {
                    fullname: "Vasya Pupkin",
                    avatar: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
                },
            },
            {
                time: "18:30",
                diagnosis: "удаление зуба",
                user: {
                    fullname: "Roman Zinin",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WI0fEmhyWbKPf37f3uMMvc3WUmN9sqJG0g&usqp=CAU"
                }
            },
        ]
    },
    {
        title: "16 сентября",
        data: [
            {
                time: "18:30",
                diagnosis: "удаление зуба",
                user: {
                    fullname: "Roman Zinin",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WI0fEmhyWbKPf37f3uMMvc3WUmN9sqJG0g&usqp=CAU"
                }
            },
        ]
    },


];

export default function App() {
    return (
        <Container>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => <Appointment {...item} />}
                renderSectionHeader={({section: {title}}) => (
                    <SectionTitle style={{
                        shadowColor: "#2a86ff",
                        shadowOpacity: 0.7,
                        shadowRadius: 3.5,
                        elevation: 4,
                    }}>{title}</SectionTitle>
                )}
            />
            <PlusButton><Ionicons name="ios-add" size={36} color="white"/></PlusButton>
        </Container>
    );
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2A86FF;
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;
