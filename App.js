import * as React from 'react';
import { View, Text, Button, TextInput,StyleSheet,DrawerLayoutAndroid} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SideMenu from 'react-native-side-menu';


function MainPage({navigation}){
  return(
    <View style={styles.container}>
    <Text style={styles.text}>Weclome to Lost Ark Wiki！</Text>
    <Button title="Island Tokens" onPress={()=> navigation.navigate('Island Tokens')} />
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
    <Text style={styles.text}>Island Tokens</Text>
    <Button title="Go to Home" onPress={()=>navigation.navigate('Main')} />
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
    </View>
  
  )
}
function MoKoKoSeeds({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text  style={styles.text}>MoKoKo Seeds</Text>
    
    <Button title="Go to Home" onPress={()=>navigation.navigate('Main')} />
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
    </View>
  
  )
}
function GiantHearts({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text  style={styles.text}>Giant Hearts</Text>
    <Button title="Go to Home" onPress={()=>navigation.navigate('Main')} />
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
    </View>
  )
}
function MasterPieces({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text style={styles.text}>Master Pieces</Text>
    <Button title="Go to Home" onPress={()=>navigation.navigate('Main')} />
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
    </View>
  )
}
function SeaBounty({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text  style={styles.text}>Sea Bounty</Text>
    <Button title="Go to Home" onPress={()=>navigation.navigate('Main')} />
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
    </View>
  )
}
function IgneaTokens({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text  style={styles.text}>Ignea Tokens</Text>
    <Button title="Go to Home" onPress={()=>navigation.navigate('Main')} />
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
    </View>
  )
}
function WorldTreeLeaves({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text  style={styles.text}>World Tree Leaves</Text>
    <Button title="Go to Home" onPress={()=>navigation.navigate('Main')} />
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
    </View>
  )
}
function OmniumStars({navigation}){
  const[text, setText] = React.useState("");
  return(
    <View style={styles.container}>
    <Text  style={styles.text}>Omnium Stars</Text>
    <Button title="Go to Home" onPress={()=>navigation.navigate('Main')} />
    <Button title="Go Back" onPress={()=>navigation.goBack()} />
    <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
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
  text:{
        height: 100,
        textAlign:'center', 
     },
   
});

 
