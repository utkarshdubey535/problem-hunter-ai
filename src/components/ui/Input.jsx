function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div>
      <label>{label}</label>
      <br />

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <p>{error}</p>}
    </div>
  );
}

export default Input;