function Button({ move }) {
  return (
    <button
      onPointerMove={move}
      style={{
        width: "20px",
        height: "10px",
        fontSize: "0px",
        cursor: "pointer",
        margin: "20px"
      }}
    >
      Move your cursor here
    </button>
  );
}

export default Button;
