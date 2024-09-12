import React, {FC} from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { PostImage as PostImageTypes, RootStackParams } from '../../types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type PostImageNavigationPropos = NativeStackNavigationProp<RootStackParams, 'Detail'>;

const PostImage: FC<PostImageTypes> = ({title, date, url, explanation}) => {
    const {navigate} = useNavigation<PostImageNavigationPropos>()

    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation});
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.buttonContainer}>
            <Button title='View' onPress={handleViewPress}/>
        </View>
        </View>
  )
}

export default PostImage

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(18,39,113,2555)',
        borderRadius: 20,
        marginBottom: 12,
        padding: 16
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12
    },
    date: {
        color: '#fff',
    },
    buttonContainer:{
        alignItems: 'flex-end'
    }
})