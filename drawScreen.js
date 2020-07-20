import React, {component} from 'react';
import{
    Platfrom,
    StyleSheet,
  Text,
  View,
  TetxInput,
  TouchableOpacity
}from 'react-native';

type Props = {};
export default class Appextends Component<Props>{
    render(){
        return(
            <View Style={styls.container}>
            <Text Style={styls.Welcome}>Login To my apps</Text>
            <TetxInput
            Style={styls.input}
            placeholder="UserName"/>

            <TetxInput
            Style={styls.input}
            placeholder="PassWord"
            secureTextEntry
            />

            <View Style={styls.btnContainer}>
            <TouchableOpacity styls={styls.userBtn}
            <onPress={()=> alert("Login Works")}
            >
            <Text Style:{styls.btnTxt}<Login></Text>
            </TouchableOpacity>
            <Text> Login</Text>

            <TouchableOpacity styls={styls.userBtn}
            >
            <Text Style:{styls.btnTxt}<Login></Text>
            </TouchableOpacity>
            <Text> SignIn</Text>
            </View>
            </View>

        );
    }
}

cons styls = StyleSheet.create({
    container:{
        flex:1,
        justifyConent:'center',
        alignItems:'center'
        backgroundColour:'#1e90ff'
    },
    Welcome:{
        fontSize: 30,
        textAlign: 'center'
        margin: 20,
        colour: "#ff"
        fontFamily: "DancingScript-Bold"
    },input:{
        width: "90%"
        backgroundColour: "#fff"
        padding:20,
        marginBottom: 10
    },
    btnContainer:{
        flexDirection:"row"
        justifyConent:"space-bttween"
        width:"90%"
    }
    userBtn:{
        backgroundColour:"#FFD700"
        padding:15,
        width:"45%"
    },
    btnTxt:{
        fontSize:16,
        textAlign:"center"
    }

})