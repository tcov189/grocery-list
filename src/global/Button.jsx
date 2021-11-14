import React from "react";

function Button({ children, buttonHanlder, type = "default" }) {
  const onClickHandler =
    buttonHanlder || (() => console.log("button was clicked"));

  let buttonClasses = "px-3 py-1 font-bold border rounded-sm shadow-sm";

  switch (type) {
    case "success":
      buttonClasses += " bg-green-500 text-gray-700";
      break;

    default:
      break;
  }

  console.log(buttonClasses);

  return (
    <button className={buttonClasses} onClick={onClickHandler}>
      {children ?? "Click"}
    </button>
  );
}

export default Button;
