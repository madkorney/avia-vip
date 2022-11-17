import InputText from '../InputText';

import { InputTextProps } from 'data';

const InputReturnDate = ({
  className,
  label,
  id,
  placeholder,
  required,
  value,
  handleChange,
}: InputTextProps) => {
  return (
    <InputText
      className={className}
      label={label}
      id={id}
      placeholder={placeholder}
      required={required}
      value={value}
      handleChange={handleChange}
    />
  );
};

export default InputReturnDate;
