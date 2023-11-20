import Navbar from "../navbar/navbar";

export default function Header({title}) {
  return (
    <section class="Sub-header">
        <Navbar/>
       <h1>{title}</h1>
    </section>
  )
}
 