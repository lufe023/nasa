import React, { FC } from "react";
import { Text, View, StyleSheet, Image, Button} from "react-native";
import { PostImage, RootStackParams} from "../../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationPropos = NativeStackNavigationProp<RootStackParams, 'Detail'>

const TodaysImage: FC<PostImage> = ({date, title, url, explanation }) => {
    const {navigate} = useNavigation<PostImageNavigationPropos>()

    const handleViewPress = ()=> {
        navigate('Detail', {title, date, url, explanation})
    };

return (
    <View style={styles.container}>
        <Image source={{uri:url}} style={styles.image}/>
        <Text style={styles.title}>
        {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.bottonContainer}>
        <Button title="View" onPress={handleViewPress}/>
        </View>
    </View>
)
}

export default TodaysImage


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2c449d',
        marginVertical: 16,
        marginHorizontal: 24,
        borderRadius: 10,
        padding: 16
    },

    image: {
        width: '100%',
        height: 180,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold'
    },
    date: {
        color: '#fff',
        fontSize: 16,
    },
    bottonContainer: {
        alignItems: 'flex-end'
    }
})