import React from 'react';
import {Link} from '../style/style.js';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class NavBar extends React.Component {
   
   

    
    render() {
        return(
            <div id="navbar">
             <Link orange>about</Link> 
             <AnchorLink href='#portfolio'>
                <Link green>portfolio</Link>
             </AnchorLink>
            <Link blue>contact</Link>                    
            </div>
        )
    }
}


export default NavBar;