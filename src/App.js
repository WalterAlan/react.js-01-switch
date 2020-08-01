import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './notesList.css'
import DatosList from './notesList' 
import './globals.css'
 import Header from './header.js'
 import Switch from './switch.js'

function App (){
  return(
<>

<Header>
 
  <Switch/>
  


</Header>
<DatosList />
</>

  )

  
}




     

export default App;
