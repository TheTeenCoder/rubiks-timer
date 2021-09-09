import { useLocalStorage } from "react-use";

export const useLastTime = () => {
  return useLocalStorage('data-last-time', localStorage.getItem('data-last-time'));
};
