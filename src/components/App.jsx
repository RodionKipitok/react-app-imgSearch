import React, { Component } from 'react';
import fetchImages from './API/PixabayAPI';
import Loader from './Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGalleryItems from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Buttom';

class App extends Component {
  state = {
    itemImg: [],
    currentPage: 1,
    searchNameImg: '',
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchNameImg, currentPage, isLoading } = this.state;

    if (prevState.currentPage !== currentPage) {
      try {
        const getImages = await fetchImages(searchNameImg, currentPage);
        console.log(getImages);
        this.setState(prevState => ({
          itemImg: [...prevState.itemImg, ...getImages.hits],
        }));
      } catch (error) {
        console.log(error);
      }
    }
  }

  addStateImg = async searchName => {
    try {
      if (searchName !== '') {
        this.setState({ isLoading: true, currentPage: 1 }); // Сброс currentPage перед новым поиском
        const getImages = await fetchImages(searchName);

        this.setState(() => ({
          itemImg: [...getImages.hits],
          searchNameImg: searchName,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  loadMore = async () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
      isLoading: true, // Устанавливаем isLoading в true перед загрузкой следующей страницы
    }));
  };

  render() {
    const { isLoading, itemImg } = this.state;

    return (
      <>
        <Searchbar addStateImg={this.addStateImg} />
        {isLoading && <Loader />}
        <ImageGalleryItems queryImg={itemImg} />
        <Button loadMore={this.loadMore} />
      </>
    );
  }
}

export default App;
