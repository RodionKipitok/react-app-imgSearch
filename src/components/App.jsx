import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItems from './ImageGalleryItem/ImageGalleryItem';
import fetchImag from './API/PixabayAPI';
import Loader from './Loader/Loader';
import Button from './Button/Buttom';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    img: [],
    currentPage: 1,
    currentHits: 0,
    searchNameImg: '',
    isLoading: false,
    showModal: false,
    imgData: '',
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
  }

  toggaleModal = e => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.getImgDate(e.target);
  };

  getImgDate = data => {
    this.setState(() => ({
      imgData: data,
    }));
  };

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
    const { isLoading } = this.state;

    return (
      <>
        <Searchbar addStateImg={this.addStateImg} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ImageGalleryItems
              onOpenModalImg={this.toggaleModal}
              queryImg={this.state.img}
            />
            {this.state.img.length > 0 && <Button onClick={this.loadMore} />}
            {this.state.showModal && (
              <Modal imgData={this.state.imgData} onClose={this.toggaleModal} />
            )}
          </>
        )}
      </>
    );
  }
}

export default App;

