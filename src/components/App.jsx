import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import fetchImages from './API/PixabayAPI';

console.log(fetchImages());



class App extends Component {

  state = {
    img: []
  }




    render(){

      return <Searchbar/>
    }

};


export default App