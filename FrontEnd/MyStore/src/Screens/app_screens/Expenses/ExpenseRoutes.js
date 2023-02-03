import React from 'react'
import { Route,Routes } from 'react-router-native'

import ExpenseScreen from './ExpenseScreen'
import AddExpense from './AddExpense'

import { useState } from 'react'


   


function SalesRoutes() {



  return (
      <Routes>
        
          <Route exact path='/' element={<ExpenseScreen />} />
          <Route exact path='/add' element={<AddExpense  />} />

        

          {/* <Route exact path='/edit' element={<EditProduct/>} /> */}
          {/* <Route exact path='/read' element={<SaleItem/>} /> */}
      </Routes>
  )
}

export default SalesRoutes