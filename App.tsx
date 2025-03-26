//1. import core component react-native
import {Text, View, StyleSheet} from 'react-native';
//2. Buat component
//   component adalah function yg return jsx
const App = () => {
  return (
    //jsx
    <View style={styles.container}>
      <Text style={styles.title}>Basic React Native</Text>
    </View>
  )

} 
//3. export component
export default App

//4. Styling
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: 'yellow',
    textAlign: 'center'
  }
})