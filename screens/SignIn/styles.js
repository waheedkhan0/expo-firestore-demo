import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
      width: 200,
      padding: 5,
      backgroundColor: '#ff9999',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 15,
      alignSelf: 'center',
      margin: "2%",
    },
    buttonText: {
      fontSize:20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: '#3FC5AB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formInput: {
      width: 300,
      fontSize:18,
      borderWidth: 1,
      borderColor:'#a4eddf',
      padding: 10,
      margin: 5,
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
      fontWeight: 'bold',
      color: '#2E6194',
    }
  });

  export default styles;