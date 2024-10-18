import Link from "next/link"

export default function Page (){
    return (
      <div className="container">
        <h1>This is Country Routes and nested Routes</h1>
        <ul className="country">
         <li><Link href="/country/pakistan">Pakistan</Link></li> 
         <li><Link href="/country/india">India</Link></li>
         </ul>
        </div>
        
    )
}