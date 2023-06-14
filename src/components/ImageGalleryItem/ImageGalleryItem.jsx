import PropTypes from 'prop-types';
import { Img } from '../Styled.imafeFinder';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  toggleModal,
  largeImageURL,
}) => {
  return (
    <>
      <li onClick={() => toggleModal(largeImageURL, tags)}>
        <Img src={webformatURL} alt={tags} />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
