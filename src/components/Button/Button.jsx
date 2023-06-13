import PropTypes from 'prop-types';
import { Loed, Loadmore } from 'components/Styled.imafeFinder';

//кнопка для загрузки сторінок
export const Button = ({ onClick }) => {
  return (
    <Loadmore>
      <Loed type="button" onClick={onClick}>
        Load More
      </Loed>
    </Loadmore>
  );
};

Button.ptopTypes = {
  onClick: PropTypes.func.isRequired,
};