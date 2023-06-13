
import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { getImages } from '../pixabay/pixabay';


export const App = () => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [total, setTotal] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [largeImg, setLargeImg] = useState('')
  const [tags, setTags] = useState('')

useEffect(() => {
  if (!query) {
    return
  }
  getPhotos(query, page)
}, [page, query])

 

 const getPhotos = async (query, page) => {
    
    try {
      setIsLoading( true );
      const { hits, totalHits } = await getImages(query, page);

      if (hits.length === 0) {
        return alert('за вашим запитом нічого не знайдено');
      }
      setImages(prevState => [...prevState, ...hits])
      setTotal(totalHits)
      
   
    } catch (error) {
      setError( error.message );
    } finally {
      setIsLoading( false );
    }
  };

  const onHandleSubmit = query => {
    setQuery(query)
    setPage(1)
    setImages([])

  
  };

  //показати модалку
  const openModal = (largeImage, tags) => {
    setShowModal(true)
    setLargeImg(largeImage)
    setTags(tags)
  };

  //закрити модалку
  const closeModal = () => {
    setShowModal(false)
    setLargeImg('')
    setTags('')
  };

  const onLoadMore = () => {
setPage(prevState => prevState + 1)
  };

 
    const AllPage = total / images.length;
    return (
      <>
        <Searchbar onHandleSubmit={onHandleSubmit} />
        {error && <p>Щось пішло не так</p>}
        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}

        {showModal && (
          <Modal
            onClouse={closeModal}
            tags={tags}
            largeImage={largeImg}
          />
        )}

        {isLoading && <Loader />}
        {AllPage > 1 && !isLoading && images.length > 0 && (
          <Button onClick={onLoadMore} />
        )}
      </>
    );
  }

