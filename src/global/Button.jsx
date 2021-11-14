import React from "react";

function Button({ children, clickHandler, type = "default" }) {
  const onClickHandler =
    clickHandler || (() => console.log("button was clicked"));

  let buttonClasses = "flex items-center px-2 py-2 font-semibold border rounded-sm shadow-sm";

  switch (type) {
    case "success":
      buttonClasses += " bg-green-500 border-green-600 text-gray-800";
      break;

    case "primary":
      buttonClasses += " bg-blue-500 border-blue-600 text-gray-200";
      break;

    default:
      break;
  }

  return (
    <button className={buttonClasses} onClick={onClickHandler}>
      {children ?? "Click"}
    </button>
  );
}

export default Button;
