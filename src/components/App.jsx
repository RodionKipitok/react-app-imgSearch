import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import fetchImages from './API/PixabayAPI';
import { Bars } from 'react-loader-spinner';

class App extends Component {
  state = {
    img: [],
    valuesInput: '',
  };

  // async componentDidMount() {
  //   let queryImg = await fetchImages(this.state.valuesInput);
  //   console.log(queryImg);

  //   this.setState(prevState => {
  //     return { img: [...queryImg] };
  //   });
  // }

  handleChange = evt => {
    this.setState({ valuesInput: evt.target.value });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    console.log(evt.target[1].value);
    let searchQuery = evt.target[1].value;
    let currentPage = 1;
    const response = await fetchImages(searchQuery);
    console.log(response);

    this.setState(prevState => {
          return { img: [...response] };
        });


  };

  render() {
    return (
      <>
        <Searchbar
          onChange={this.handleChange}
          values={this.state.valuesInput}
          onSubmit={this.handleSubmit}
        />
        {this.state.img.length > 0 ? (
          <ImageGalleryItem queryImg={this.state.img} />
        ) : (
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </>
    );
  }
}

export default App;
