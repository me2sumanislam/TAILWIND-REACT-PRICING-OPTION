
import { use } from 'react';

 import PricingCard from '../PricingCard/PricingCard';
 function PricingOption({pricingPromise}) {

const pricingData = use(pricingPromise);

// console.log(pricingData);
 

   return (
     <div>
       <h2 className='text-5xl mt-5'>Get our Membership</h2>
       <div className='grid md:grid-cols-3 gap-8 mt-5'>
        {
          pricingData.map(pricing => <PricingCard 
            key={pricing.id} 
            pricing ={pricing}></PricingCard>)
        }
       </div>
     </div>
   )
 }
 
 export default PricingOption
 