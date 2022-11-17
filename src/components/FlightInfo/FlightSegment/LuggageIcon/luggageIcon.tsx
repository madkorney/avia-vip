import handLuggage from 'assets/icons/hand-laggage.png';
import luggage from 'assets/icons/laggage.png';
import noLuggage from 'assets/icons/no-laggage.png';

import './luggageIcon.scss';

type LuggageIconProps = {
  luggageIncluded: boolean;
};

const LuggageIcon = ({ luggageIncluded }: LuggageIconProps) => {
  return (
    <div className="luggage-icon-container">
      <div className="hand-luggage">
        <img src={handLuggage} alt="hand luggage icon" />
      </div>

      <div className="luggage">
        <img src={luggageIncluded ? luggage : noLuggage} alt="luggage icon" />
      </div>
    </div>
  );
};

export default LuggageIcon;
