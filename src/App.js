import React, { Component } from 'react';
import './App.css';
import ProfileComponent from './ProfileComponent';
import image from "./image.jpg";


class App extends Component {
  constructor() {
    super();
    this.state = { 
    fullName : "Achraf Ameur",
    bio:  `My name is Achraf Ameur and I am a full-stack Web
    Application Developer and Software Developer, currently living in Tunisia. 
    My primary focus and inspiration for my studies is Web Development`
    ,
    imgSrc: image,
    profession:"Full-Stack web developer",
    toggle: true,
    
}

  };


  toggle = () => {
    this.setState({ toggle: !this.state.toggle})
  };
  

render(){
  return(
    <>  
  {}
  {this.state.toggle &&(
    <div className='bloc'>
        <ProfileComponent src={this.state.imgSrc} fullName={this.state.fullName} profession={this.state.profession}  bio={this.state.bio}/>
    </div>
    )}
    <button className={`clickme ${this.state.toggle?'danger':'success'}`} onClick={this.toggle}>{this.state.toggle? 'Hide':'Show'}</button>
    </>
  );
}
};
export default App ;