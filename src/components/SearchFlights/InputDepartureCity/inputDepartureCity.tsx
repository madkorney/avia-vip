import InputText from '../InputText';

import { InputTextProps } from 'data';

const InputDepartureCity = ({
  label,
  id,
  placeholder,
  required,
  value,
  handleChange,
}: InputTextProps) => {
  return (
    <InputText
      label={label}
      id={id}
      placeholder={placeholder}
      required={required}
      value={value}
      handleChange={handleChange}
    />
  );
};

export default InputDepartureCity;
