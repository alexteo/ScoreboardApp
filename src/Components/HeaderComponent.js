import React from "react";
import Stats from "./StatsComponent.js"
import Stopwatch from "./Stopwatch.js"

//import { Navbar, NavbarBrand } from 'reactstrap';


const Header = (props/*title, players*/) => {

    const {players:p, playersNo:pNo, title:t} = props; //destructurare

    return (

         <header>

            <Stats playersNo = {pNo}
                    players ={p/*title*/}/>
            <h1>{t/*title*/}</h1>

            <span className="stats"></span>

            <Stopwatch/>
          
         </header>
         
     );
}
 
export default Header;