import './priceTag.scss';

type PriceTagProps = {
  amount: number;
};

const PriceTag = (props: PriceTagProps) => {
  const { amount } = props;
  return (
    <div className="price-container">
      {new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0,
      }).format(amount)}
    </div>
  );
};

export default PriceTag;
