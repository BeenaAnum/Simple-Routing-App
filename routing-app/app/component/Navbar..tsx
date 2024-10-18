
import Link from "next/link";

{/* <button className="flex bg-yellow-500"><a href="/about">About</a></button></> */}
export default function Navbar(){
 return(

   <ul className="navbar">

       <li><Link href="/">
          Home </Link>
        </li>
       
        <li><Link href="/about">
           About </Link>
        </li>
        
        <li>
        <Link href="/country">
           Counrty</Link>
        </li>

        <li><Link href="/contact">
           Contact </Link>
        </li>

    </ul>
);
}

