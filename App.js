import * as React from 'react';
import { View, Text, Button, TextInput,StyleSheet,DrawerLayoutAndroid} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SideMenu from 'react-native-side-menu';

function MainPage({navigation}){
  return(
    <View style={styles.container}>
    <Text style={styles.text1}>Weclome to Lost Ark Wiki！</Text>
    <Button title="Island Tokens" onPress={()=> navigation.navigate('Island Tokens')}/>
    <Button title="MoKoKo Seeds" onPress={()=> navigation.navigate('MoKoKo Seeds')} />
    <Button title="Giant’s Hearts" onPress={()=> navigation.navigate('Giant’s Hearts')} />
    <Button title="Master Pieces" onPress={()=> navigation.navigate('Master Pieces')} />
    <Button title="Sea Bounty" onPress={()=> navigation.navigate('Sea Bounty')} />
    <Button title="Ignea Tokens" onPress={()=> navigation.navigate('Ignea Tokens')} />
    <Button title="World Tree Leaves" onPress={()=> navigation.navigate('World Tree Leaves')} />
    <Button title="Omnium Stars" onPress={()=> navigation.navigate('Omnium Stars')} />
    </View>
  );
}

function IslandTokens({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text style={styles.text1}>Island Tokens</Text>
    <Text style={styles.text1}>There are 95 Island Tokens in total, players can get those Tokens by sailling</Text>
    <Text> </Text><Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text>
    <Button style={styles.button} title="Back" onPress={()=>navigation.goBack()} />
    <Button title="Go to Home Page" onPress={() => navigation.popToTop()}/>
    </View>
  
  )
}
function MoKoKoSeeds({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text  style={styles.text1}>MoKoKo Seeds</Text>
    <Text style={styles.text1}>There are 1251 MoKoKo Seeds in total, players can get those Seeds by Expedition on the Continents</Text>
    <Text> </Text><Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text>
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go to Home Page" onPress={() => navigation.popToTop()}/>
    </View>
  
  )
}
function GiantHearts({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text  style={styles.text1}>Giant Hearts</Text>
    <Text style={styles.text1}>There are 15 Giant Hearts in total, players can get those Giant Hearts by Expedition on the Continents</Text>
    <Text> </Text><Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text>
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go to Home Page" onPress={() => navigation.popToTop()}/>
    </View>
  )
}
function MasterPieces({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text style={styles.text1}>Master Pieces</Text>
    <Text style={styles.text1}>There are 46 Master Pieces in total, players can get those Master Pieces by Complete missions and dungeons</Text>
    <Text> </Text><Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text>
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go to Home Page" onPress={() => navigation.popToTop()}/>
    </View>
  )
}
function SeaBounty({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text  style={styles.text1}>Sea Bounty</Text>
    <Text style={styles.text1}>There are 50 Sea Bounty in total, players can get those Sea Bounty by sailling</Text>
    <Text> </Text><Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text>
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go to Home Page" onPress={() => navigation.popToTop()}/>
    </View>
  )
}
function IgneaTokens({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text  style={styles.text1}>Ignea Tokens</Text>
    <Text style={styles.text1}>There are 14 Ignea Tokens in total, players can get those Ignea Tokens by complete the Adventure Tome</Text>
    <Text> </Text><Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text>
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go to Home Page" onPress={() => navigation.popToTop()}/>
    </View>
  )
}
function WorldTreeLeaves({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text  style={styles.text1}>World Tree Leaves</Text>
    <Text style={styles.text1}>There are 60 World Tree Leaves in total, players can get those World Tree Leaves by trade system
    </Text>
    <Text> </Text><Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text>
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go to Home Page" onPress={() => navigation.popToTop()}/>
    </View>
  )
}
function OmniumStars({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text  style={styles.text1}>Omnium Stars</Text>
    <Text style={styles.text1}>There are 5 Omnium Stars in total, players can get those Omnium Stars by Complete missions and dungeons</Text>
    <Text> </Text><Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text> <Text> </Text><Text>
    </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> 
    </Text><Text> </Text><Text> </Text>
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go to Home Page" onPress={() => navigation.popToTop()}/>
    </View>
  )
}
const Stack = createNativeStackNavigator();
function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="Island Tokens" component={IslandTokens}/>
        <Stack.Screen name="HomePage" component ={MainPage} />
        <Stack.Screen name="MoKoKo Seeds" component={MoKoKoSeeds}/>
        <Stack.Screen name="Giant’s Hearts" component={GiantHearts}/>
        <Stack.Screen name="Master Pieces" component={MasterPieces}/>
        <Stack.Screen name="Sea Bounty" component={SeaBounty}/>
        <Stack.Screen name="Ignea Tokens" component={IgneaTokens}/>
        <Stack.Screen name="World Tree Leaves" component={WorldTreeLeaves}/>
        <Stack.Screen name="Omnium Stars" component={OmniumStars}/>      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container:{
        marginTop:10,
     },
  text1:{
        height: 100,
        textAlign:'center', 
     },
  button:{
        height: 200,
        marginTop:300, 
     },
});

 
