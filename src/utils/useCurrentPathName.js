import { useLocation } from "react-router-dom";

const useCurrentPathName = (path) => {
  const { pathname } = useLocation();

  if (path === pathname) {
    return true;
  }
  return false;
};
export default useCurrentPathName;
