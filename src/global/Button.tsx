import React, { SyntheticEvent } from "react";

interface ComponentProps {
  children: React.ReactNode;
  clickHandler?: (clickEvent: SyntheticEvent) => void;
  type: string;
}

function Button({ children, clickHandler, type = "default" }: ComponentProps) {
  const onClickHandler = clickHandler;

  let buttonClasses =
    "flex items-center px-2 py-2 font-semibold border rounded-sm shadow-sm";

  switch (type) {
    case "success":
      buttonClasses += " bg-green-500 border-green-600 text-gray-800";
      break;

    case "error":
      buttonClasses += " bg-red-500 border-red-600 text-gray-200";
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
