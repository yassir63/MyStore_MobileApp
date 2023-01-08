import React from 'react'
import { Route,Routes } from 'react-router-native'
import AllProducts from './AllProducts'
import EditProduct from './EditProduct'
import NewProduct from './NewProduct'
import ReadProduct from './ReadProduct'


function ProductRoutes() {
  return (
    <Routes>
        <Route exact path='/' element={<AllProducts/>} />
        <Route exact path='/create' element={<NewProduct/>} />
        <Route exact path='/edit' element={<EditProduct/>} />
        <Route exact path='/read' element={<ReadProduct/>} />
    </Routes>
  )
}

export default ProductRoutes