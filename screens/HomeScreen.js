import {SectionList} from "react-native";
import {Appointment, SectionTitle} from "../components";
import {Ionicons} from "@expo/vector-icons";
import styled from "styled-components/native";
import {useNavigation, useNavigationContainerRef} from "@react-navigation/native";

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
                active: false,
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
                active: false,
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
                active: true,
                user: {
                    fullname: "Roman Zinin",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WI0fEmhyWbKPf37f3uMMvc3WUmN9sqJG0g&usqp=CAU"
                }
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


];

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => <Appointment navigation={navigation} item={item}/>}
                renderSectionHeader={({section: {title}}) => (
                    <SectionTitle style={{
                        shadowColor: "#2a86ff",
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 4,
                    }}>{title}</SectionTitle>
                )}
            />
            <PlusButton>
                <Ionicons name="ios-add" size={36} color="white"/>
            </PlusButton>
        </Container>
    );
};


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
`;

export default HomeScreen;
