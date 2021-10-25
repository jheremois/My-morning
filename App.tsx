import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import MainRoutes from './src/router/Main.routes'

const App = ()=>{
  return(
    <SafeAreaView style={{backgroundColor: '#212121', flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor="#151515"/>
      <MainRoutes/>
    </SafeAreaView>
  )
}

export default App