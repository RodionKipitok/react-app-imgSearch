import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItems from './ImageGalleryItem/ImageGalleryItem';
import fetchImag from './API/PixabayAPI';
import Loader from './Loader/Loader';
import Button from './Button/Buttom';

class App extends Component {
  state = {
    img: [],
    currentPage: 1,
    currentHits: 0,
    searchNameImg: '',
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage === this.state.currentPage) {
      const { currentPage, searchNameImg } = this.state;

      try {
        
        const response = await fetchImag(searchNameImg, currentPage);

        const { hits: arrImgAdd } = response;

        this.setState(() => ({
          img: [...arrImgAdd],
          
        }));
      } catch (error) {
        console.error(error);
      }
    }


      // if (prevState.searchNameImg !== this.state.searchNameImg) {

      //   this.setState(() => ({
      //     img: [],
      //   }));
        
      // }

  }

  addStateImg = async nameImg => {
    try {
      if (nameImg !== '') {
        const { currentPage } = this.state;
        this.setState({ isLoading: true });
        const response = await fetchImag(nameImg, currentPage);

        const { hits: arrImgAdd } = response;

        this.setState(() => ({
          img: [...arrImgAdd],
          isLoading: false,
        }));

        this.setState(() => ({
          searchNameImg: nameImg,
        }));
      }
    } catch (error) {
      console.log(error());
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    return (
      <>
        <Searchbar addStateImg={this.addStateImg} />
        {this.state.isLoading && <Loader/>}
        <ImageGalleryItems queryImg={this.state.img} />
        {this.state.img.length > 0 && <Button onClick={this.loadMore} />}
      </>
    );
  }
}

export default App;
