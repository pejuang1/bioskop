import React, {Component} from 'react';
import logo2 from '../img/img1.png'
import logo3 from '../img/img2.png'
import logo4 from '../img/img3.png'
import logo5 from '../img/img4.png'

class Jumbotron1 extends Component{
    state={}
    render(){
        return (
            <div className="jumbroton">
        <div className="heading">
          <div className="heading1">
            <h1>Unlock the power of video delivery.</h1>
            <p>Grow your business with JW Player's flexible platform of video services, <br /> powered by billions of signals from across our vast network.</p>
            <button className="buttonstarted">Get Started &nbsp;<i className="fas fa-play-circle" /></button>
          </div>
        </div>
        <div className="imgMiddle">   
          <div className="imgOne">
            <img src={logo2} alt="" />
          </div>
          <div className="imgTwo">
            <img src={logo3} alt="" />
          </div>
          <div className="imgThree">
            <img src={logo4} alt="" />
          </div>
          <div className="imgFour">
            <img src={logo5} alt="" />
          </div>
        </div>
      </div>
    )
}
}
export default Jumbotron1;