import { SpinnerDiamond } from 'spinners-react';
import { Spinner } from '../Styled.imafeFinder';

export const Loader = () => {
  return (
    <Spinner>
      <SpinnerDiamond
        size={50}
        thickness={100}
        speed={100}
        color="#36ad47"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    </Spinner>
  );
};
