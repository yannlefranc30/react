
import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View,Pressable,Image} from 'react-native';

export default Home = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
 // On utilise un state pour garder nos données
 const [games, setGames] = useState([

 ]);
 const handleSearch = () => {
    const apiKey = 'cd525fc234c54df685c207417377d1c5';
    const url =  encodeURIComponent(`https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURI(searchText)}`)
     fetch(url)
    .then( response => response.json() )
    .then( data => {setGames(data.results) } )
    .catch( (e) => {alert('Une erreur est survenue:'+e.message } ) // le e permet  de  faire un message 
}
const handleClick = slug => {
    navigation.push('Details', {slug});
}
const search = () => {
    alert('bienvenue');
}
return(
    <View style={style.page}>
    <View style={style.searchBar}>
    <TextInput style={style.searchInput}></TextInput>
    <Button onClick={search} title="recherche" onPress={handleSearch}>
    </Button>
    </View>
    <FlatList style={style.list} data={games} renderItem={ ({item}) => (
    <View style={style.listItem}>
    <Text>{item.name}</Text>
    <Text>Note: {item.rating}</Text>
    </View>
    )}keyExtractor={(item) => item.id}>
    </FlatList>
    </View>
    );
   };
const style = {
 page: {
 flex: 1,
 marginTop:50,
 },
 searchBar:{
 flexDirection:"row",
 backgroundColor:"#FFFF0"
 },
 searchInput:{
 flex: 1,
 borderWidth: 1,
 borderColor: "#dddddd",
 },
 list: {
 flex:1,
 },
 listItem: {
 backgroundColor: '#e0e0e0',
 margin: 2,
 padding: 15
 }
}