 import React, { useState } from 'react'
 import Link from './Link';
import { Menu, X } from 'lucide-react';
 const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" }
];

  function Navbar() {
  const [open,setOpen] = useState(false);
 const link = navigationData.map(route => <Link key={route.id} route ={route}></Link>)


   return (
     <nav className='flex justify-between mx-7'>
        {/* span ar modhe toggle korte chachi span ar modhe akta array function dilam  */}
       <span className='flex' onClick={() => setOpen(!open) }>
         { open ?
        // x lucide icone crose(x) anar jonno x use kora hoyeche
         <X className='md:hidden'></X> :
         <Menu className='md:hidden'></Menu>

         }
         <ul className='md:hidden'>
            {/* icone toggle  jonno aikahe ar akta same nav dilam  */}
            {link}
         </ul>
      
        <h2 className='ml-4'>MyNavbar</h2>
       </span>
       <ul className='md:flex hidden'>
        {/* md:flex hidden jokhon dibo  mediam screen flex hobe and small hidden thakbe */}
        {   //ai khan theke map ta cut kore akta variable banabo Link name ar poriborte link bosabo
            // navigationData.map(route => <Link key={route.id} route ={route}></Link>)
            link
        }
       </ul>





       {/* <ul className='flex'>
        <li className='mr-10'><a href='/'>Home</a></li>
        <li className='mr-10'><a href='/'>About</a></li>
        <li className='mr-10'><a href='/'>Blog</a></li>
       </ul> */}
       <button>Sign In</button>
     </nav>
   )
 }
 
 export default Navbar
 