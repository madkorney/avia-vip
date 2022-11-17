import './priceTag.scss';

type PriceTagProps = {
  amount: number;
};

const PriceTag = ({ amount }: PriceTagProps) => {
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
