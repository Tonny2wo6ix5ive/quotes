import { StyleSheet, Text, View } from "react-native";

const NavBar = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>
                Quotes
            </Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#404144',
        paddingTop:20,
        paddingBottom:10,
    },
    text:{
        color:'#ffffff',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
    }
})

export default NavBar;