import { useEffect, useState } from "react";
import { Clipboard, FlatList, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const Home = () => {

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        async function fetchData() {
          const response = await axios.get('https://type.fit/api/quotes');
          setQuotes(response.data);
        }
        fetchData();
      }, []);

      const onCopyPress = async () => {
        await Clipboard.setString(text);
      };

    return ( 
        <View style={styles.home}>
            <FlatList
                data={quotes}
                renderItem={({item})=>(
                    <View style={styles.container}>
                        <Text style={styles.text}>{item.text}</Text>
                        <Text style={styles.text}>~{item.author}</Text>
                    </View>
                )}
            />
            <Text co></Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    home:{
        flex:1,
        paddingTop:50,
        backgroundColor:'gray',
    },
    container:{
        marginTop:15,

    },
    text:{
        marginHorizontal:15,
        color:'indigo',
    }
})

export default Home;