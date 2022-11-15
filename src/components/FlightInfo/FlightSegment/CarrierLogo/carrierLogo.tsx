import { CARRIERS } from 'data';

import S7Logo from 'assets/carrier-logos/S7.png';

import './carrierLogo.scss';

const CarrierLogo = (props: { carrier: CARRIERS }) => {
  return (
    <div className="carrier-logo-container">
      <img src={S7Logo} alt="carrier logo" />
      <div>{props.carrier}</div>
    </div>
  );
};

export default CarrierLogo;
