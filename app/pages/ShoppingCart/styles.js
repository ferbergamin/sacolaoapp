import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shoppingView: {
    margin: 15,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  viewProduct: {
    backgroundColor:  '#E76F51',
    width: '80%',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  itemsView: {
    marginTop: 25,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '90%'
  },
  viewUnities: {
    backgroundColor:  '#000',
    width: '105%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    elevation: 5,
    margin: 10,
    height: 30,
  },
  viewActions: { 
    margin: 16,
    display: 'flex',
    justifyContent: 'space-evenly',
    height: "12%" 
  },
});

export default styles
