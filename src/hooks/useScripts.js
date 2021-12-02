import { useEffect } from "react"

const useScripts = url => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url])
};

export default useScripts;