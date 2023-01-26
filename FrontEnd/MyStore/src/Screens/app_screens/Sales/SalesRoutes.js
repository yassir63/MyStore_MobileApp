import React from 'react'
import { Route,Routes } from 'react-router-native'

import AddSale from './AddSale'
import SaleItem from './SaleItem'
import Sales from './Sales'
import SeeCart from './SeeCart'
import AddProductToSale from './AddProductToSale'
import { Products } from './SaleProducts'

import { useState } from 'react'


   


function SalesRoutes() {

  
  const [Product_list, setProduct_list] = useState([]);
  const handle_validation=()=>{
    console.log('validation pressed');
    console.log(Product_list);
  }

  //this handle presse function is not used for now , but it would bet a good solution for the repeated validation buton on / and /more route

  return (
    <Products.Provider value={{Product_list,setProduct_list}} >
      <Routes>
        
          <Route exact path='/' element={<AddSale handle_validation={handle_validation}/>} />
          <Route exact path='/more' element={<SeeCart handle_validation={handle_validation} />} />
          <Route exact path='/addproduct' element={<AddProductToSale/>} />
          <Route exact path='/seecart' element={<SeeCart/>}/>
        

          {/* <Route exact path='/edit' element={<EditProduct/>} /> */}
          {/* <Route exact path='/read' element={<SaleItem/>} /> */}
      </Routes>
    </Products.Provider>
  )
}

export default SalesRoutes