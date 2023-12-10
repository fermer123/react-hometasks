import { useCustomRef } from "./hooks/useCustomRef";

const Button = () => {
  const { setRef, handleChangeButtonColor } = useCustomRef();

  return (
    <button
      key="btn"
      ref={setRef}
      onClick={handleChangeButtonColor}
      style={{
        width: "100px",
        height: "50px",
        border: "1px solid",
      }}
    >
      button
    </button>
  );
};

export default Button;
