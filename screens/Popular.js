import React,{Component} from "react";
import { Text,View, StyleSheet } from "react-native";


export default class PopularScreen extends Component{
    constructor(){
        super()
        this.state ={
            movieDetails: {},
            ngrok_url: "",
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Popular Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})