import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 30
    },
    titulo:{
      fontSize: 25,
      color: 'red',
      alignSelf: 'center',
      marginTop: 15
    },
    imagem:{
      marginTop: 10,
      height: 200,
      width: 350,
      marginLeft: 10,
      borderColor: '#222',
    },
    subt:{
      fontSize: 16,
      color: 'blue', 
      marginTop: 15      
    },
      subt2:{
      alignSelf: 'center',
      fontSize: 20,
      color: 'red', 
      marginTop: 15      
    },
    borda:{
      borderWidth: 1,
      borderColor: '#222',
      height:275,
      width: 375,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 20,
    },
    expe:{
    alignSelf: 'center'
    },
    areaPessoa:{
      borderColor: '#222',
      
    }
  });


  export {styles};