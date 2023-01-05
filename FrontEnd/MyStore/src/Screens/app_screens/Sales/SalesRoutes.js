import React from 'react'
import { Route,Routes } from 'react-router-native'



import AddSale from './AddSale'
import SaleItem from './SaleItem'
import Sales from './Sales'
import SeeCart from './SeeCart'



function SalesRoutes() {
  return (
    <Routes>
        <Route exact path='/' element={<AddSale/>} />
        <Route exact path='/more' element={<SeeCart/>} />
        {/* <Route exact path='/edit' element={<EditProduct/>} /> */}
        {/* <Route exact path='/read' element={<SaleItem/>} /> */}
    </Routes>
  )
}

export default SalesRoutes