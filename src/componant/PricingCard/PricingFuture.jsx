 import React from 'react'
  import { SquareCheckBig } from 'lucide-react'
 function PricingFuture({ feature}) {


   return (
     <p className='flex gap-2'><SquareCheckBig ></SquareCheckBig>{feature}</p>
   );
 };
 
 export default PricingFuture;
 