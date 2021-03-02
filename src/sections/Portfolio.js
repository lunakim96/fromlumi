import React, {Component} from 'react'
import itiswell from '../assets/itiswell.jpg';
import kiiboo from '../assets/kiiboo.jpg';
import bbla from '../assets/bbla.jpg';
import Post from './PortfolioTemplate';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Portfolio extends Component {
  render() {
    const pieces = [
     
      // {
      //   title: "LJCDS Checkout System",
      //   image: itiswell
      // },
      {
        title: "Balanced Bod Lifestyle Academy",
        image: bbla
      },
      {
        title: "It is well L.A.",
        image: itiswell
      },
      {
        title: "kiiboo",
        image: kiiboo
      }, 
    ]


  return (
      <div className="portfolio block" id="portfolio">
          {pieces.map((piece)=> 
          <Post key={piece.title} title={piece.title} image={piece.image}/>)}
          <AnchorLink href='#top'><button>back to top</button></AnchorLink>
      </div>
    );
  }
}




export default Portfolio;
