import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title; // Title dynamically set ho raha
  }, [title]); // Jab bhi title change hoga ye chalega
};

export default useTitle;
