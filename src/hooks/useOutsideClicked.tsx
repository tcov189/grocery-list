import { useEffect } from "react";

const useOutsideClicked = (
  ref: React.RefObject<HTMLDivElement>,
  handler: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    });

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", (event: MouseEvent) =>
        handleClickOutside(event)
      );
    };
  }, [ref, handler]);
};

export default useOutsideClicked;
