import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItems from './ImageGalleryItem/ImageGalleryItem';
import fetchImag from './API/PixabayAPI';
import { Bars } from 'react-loader-spinner';
import Button from './Button/Buttom';

class App extends Component {
  state = {
    img: [],
    queryImg: '',
    currentPage: 1,
    currentHits: 0,
  };

 

  addStateImg = async nameImg => {
    try {
      const { currentPage } = this.state;
      const response = await fetchImag(nameImg, currentPage);

      const { hits: arrImgAdd } = response;

      this.setState(() => ({
        img: [...arrImgAdd],
      }));

      this.setState(() => ({
        queryImg: nameImg,
      }));
    } catch (error) {
      console.log(error());
    }
  };

  loadMore = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.addStateImg} />
        {this.state.img.length > 0 ? (
          <ImageGalleryItems queryImg={this.state.img} />
        ) : (
          <Bars
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass="wraper"
            visible={true}
          />
        )}
        <Button onClick={this.loadMore} />
      </>
    );
  }
}

export default App;
