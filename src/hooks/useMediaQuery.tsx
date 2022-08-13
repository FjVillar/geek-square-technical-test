import { useEffect, useState } from "react";

// This allow us to know if we are under a viewport of 480px (by default) or any
// any other viewport we want
const useMediaQuery = (query = "(max-width: 480px)") => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
