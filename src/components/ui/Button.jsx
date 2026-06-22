function Button({
  text,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variant} ${size}`}
    >
      {text}
    </button>
  );
}

export default Button;