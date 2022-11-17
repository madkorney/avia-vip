import { CARRIERS } from 'data';

import S7Logo from 'assets/carrier-logos/S7.png';
import './carrierLogo.scss';

type CarrierLogoProps = {
  carrier: CARRIERS;
};

const CarrierLogo = ({ carrier }: CarrierLogoProps) => {
  return (
    <div className="carrier-logo-container">
      <img src={S7Logo} alt="carrier logo" />
      <div>{carrier}</div>
    </div>
  );
};

export default CarrierLogo;
