import { InputTextProps } from 'data';

const InputText = ({
  className,
  label,
  id,
  placeholder,
  required,
  value,
  handleChange,
}: InputTextProps) => {
  return (
    <label>
      {label}
      <input
        className={className}
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </label>
  );
};

export default InputText;
