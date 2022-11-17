import './ticketOption.scss';

type TicketOptionsProps = {
  refundOption: string;
};

const TicketOptions = ({ refundOption }: TicketOptionsProps) => {
  return (
    <div className="refund-option-container">
      <div>{refundOption}</div>
    </div>
  );
};

export default TicketOptions;
