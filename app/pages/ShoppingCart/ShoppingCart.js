import React, { useState, useEffect } from 'react'

import { View, SafeAreaView, ScrollView } from 'react-native';
import {  ButtonPrimary, Searchbar } from '../../components';

import styles from './styles';
import { Text } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import useCart from '../../hooks/useCart';

const ShoppingCart = () => {
  const { cart, removeAllFromCart } = useCart()
  const [counter, setCounter] = useState(0)

  useEffect(()=> {
  }, [counter])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.itemsView}>
          {cart && Object.keys(cart).map((value) =>
            (
              <>
                <View style={styles.viewUnities}>
                  <Text>{value}</Text>
                </View>
                {
                  Object.keys(cart[value]).map((key) => {
                    const item = cart[value][key]
                    return (
                      <>
                        {item.quantity > 0 && 
                          <View style={styles.shoppingView} key={key}>
                            <View style={styles.viewProduct}>
                              <Text style={{fontWeight: 'bold'}}>
                                {`${item.quantity} unidades de ${item.name.toLowerCase()}`}
                              </Text>
                            </View>
                            <ButtonPrimary 
                              mode="contained"
                              onClick={() =>{
                                removeAllFromCart(value, item.id)
                                setCounter(counter+1)
                              }}
                            >
                              <Text style={{fontWeight: 'bold'}}>X</Text>
                            </ButtonPrimary>
                          </View>
                        }
                      </>
                    )
                  })
                }
              </>
            )
          )}
        </View>
      </ScrollView>
      <View 
        style={styles.viewActions}
      >
        <ButtonPrimary mode="contained" >
          <Text style={{fontWeight: 'bold'}}>Fechar sacola</Text>
        </ButtonPrimary>
        <ButtonPrimary mode="text" onClick={() => Actions.replace('shopping')}>
          <Text style={{fontWeight: 'bold'}} theme={{colors: {text: "#000"}}}>
            Voltar as compras
          </Text>
        </ButtonPrimary>
      </View>
    </SafeAreaView>
  )
}

export default ShoppingCart
