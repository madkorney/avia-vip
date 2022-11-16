import './ticketOption.scss';

const TicketOptions = (props: { option: string }) => {
  return (
    <div className="refund-option-container">
      <div>{props.option}</div>
    </div>
  );
};

export default TicketOptions;
