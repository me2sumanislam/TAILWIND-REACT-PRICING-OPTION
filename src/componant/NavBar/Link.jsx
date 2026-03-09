 import React from 'react'
 
 function Link({route}) {
   return (
       <li className='px-4 lg:mr-10 hover:bg-amber-400'>
        <a href = {route.path}>{route.name}</a>
       </li>
   )
 }
 
 export default Link
 