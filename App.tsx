import ConectionContext from '@src/context/ConectionContext'
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import MainRoutes from './src/router/Main.routes'

const App = ()=>{
  return(
    <ConectionContext>
      <SafeAreaView style={{backgroundColor: '#212121', flex: 1, height: '100%',}}>
        <StatusBar
          animated={true}
          backgroundColor="#151515"/>
        <MainRoutes/>
      </SafeAreaView>
    </ConectionContext>
  )
}

export default App