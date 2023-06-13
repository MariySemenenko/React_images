import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Button = styled.button`
  margin-left: 10px;
`;
export const Ul = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Large = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const Loed = styled.button`
  background-color: bisque;
  font-size: 18px;
  color: blue;
  border: 0;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const Loadmore = styled.div`
  display: grid;
  place-items: center;
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const Spinner = styled.div`
  display: grid;
  place-items: center;
`;