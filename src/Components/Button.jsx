const Button = ({ type, name, OnClick }) => {
  return (
    <button type={type} onClick={OnClick}>
      {name}
    </button>
  );
};

export default Button;
