import Daisyui from './componant/Daisyui/DaisyNav'
import './App.css'
import Navbar from './componant/NavBar/nav'
import { Suspense } from 'react'
import PricingOption from './componant/PricingOption/PricingOption'


const pricingPromise = fetch('../public/PricingData.json')
                      .then(res => res.json());




function App() {
  
  return (
    <>
    <header> 

       <Navbar></Navbar>
       {/* <Daisyui></Daisyui> */}


       </header>
       
       <main>
    
  <Suspense fallback ={
  <span className="loading loading-spinner loading-lg"></span>}>
 <PricingOption pricingPromise = {pricingPromise}> </PricingOption>
  </Suspense>



       </main>
       
    </>
  )
}

export default App
