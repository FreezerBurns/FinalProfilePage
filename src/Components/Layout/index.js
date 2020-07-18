import React from "react";
import '../Layout/style/Footer.css'
import '../Layout/style/Header.css'
import '../Layout/style/Aside.css'
import '../Layout/style/Main.css'
import "../Layout/style/Container.css"
import Nav from "../Nav/index"
import Contact from '../Contact/index'
import ProfileCard from '../pages/profile';
import InfoLinks from '../Links/index';

// import '../Layout/style/ClearFix.css'

function Layout() {
    return(
<div className="container">
    <header className="Header"> <Nav/></header>
   
    <div className="ClearFix">
      <aside className="Aside"><ProfileCard /> </aside>
      
      <main><InfoLinks /> </main>
      
    </div>
    <footer><Contact /></footer>
  </div>
    )
}
export default Layout;