import React from 'react';
import './App.css';
import Header from './component/header';
import Jumbotron1 from './component/jumbotron1';

class App extends React.Component{
  state={}
  render (){
    return (
      <div className='section1'>
        <Header/>
        <Jumbotron1/>
      </div>
    )
  }
}

export default App;
