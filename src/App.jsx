

import React from 'react'

import useFetch from './service/useFetch'
import { API_URL } from './lib/constant'
import {LiveUpdatingData,ErrorBoundary} from './component/LiveComponent'
import Live from './component/Live'


export default function App() {



  
  return (
    <>
     
     <ErrorBoundary>

      <LiveUpdatingData />
     </ErrorBoundary>

     
    


   
    </>
  )
}
