import { useEffect, useState } from "react";
import { ImageBackground, FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Clipboard from 'expo-clipboard';
import axios from "axios";
import { AntDesign } from '@expo/vector-icons';

const Home = () => {

    const [quotes, setQuotes] = useState([]);
    const [copiedText, setCopiedText] = useState('');

    const copyToClipboard = async(text)=>{
        await Clipboard.setStringAsync(text)
    }

    useEffect(() => {
        async function fetchData() {
          const response = await axios.get('https://type.fit/api/quotes');
          setQuotes(response.data);
        }
        fetchData();
      }, []);




    return ( 
        <ImageBackground source={{uri: 'https://files.oyebesmartest.com/uploads/preview/joker-mobile-wallpaper-fuy0aje.webp'}}>
            <View style={styles.home}>
                <FlatList
                    data={quotes}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>copyToClipboard(item.text + "\n" + item.author)}>
                            <ImageBackground>
                                <View style={styles.container}>
                                    <Text style={styles.text}>{item.text}</Text>
                                    <Text style={styles.text}>~{item.author}</Text>
                                    <AntDesign style={styles.logo} name="copy1" size={20} color="black" />
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ImageBackground>
     );
}
 
const styles = StyleSheet.create({
    home:{
        
    },
    container:{
        display:'flex',
        justifyContent:'center',
        marginTop:15,
        backgroundColor:'white',
        opacity:0.5,
        height:120,
        marginHorizontal:20,
        borderRadius:4,
    },
    text:{
        marginHorizontal:15,
        marginTop:10,
        fontWeight:'bold',
        color:'#000000',
    },
    logo:{
        textAlign:'right',
        padding:10,
    }
})

export default Home;