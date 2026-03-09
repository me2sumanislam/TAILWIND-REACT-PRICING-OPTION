 import React from 'react'
 import Link from './Link';
import { Menu } from 'lucide-react';
 const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" }
];

  function Navbar() {
   return (
     <nav className='flex justify-between mx-7'>
             <Menu></Menu>
        <h2>MyNavbar</h2>
       <ul className='flex'>
        {
            navigationData.map(route => <Link key={route.id} route ={route}></Link>)
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
 