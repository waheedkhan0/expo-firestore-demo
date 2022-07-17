import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    button: {
      width: 150,
      padding: 5,
      backgroundColor: '#ff9999',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 15,
      alignSelf: 'center',
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
    text: {
      textAlign: 'center',
      fontSize: 20,
      fontStyle: 'italic',
      marginTop: '2%',
      marginBottom: '10%',
      fontWeight: 'bold',
      color: 'black',
    },
    titleText: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#2E6194',
    },
  });

  export default styles;