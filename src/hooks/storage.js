import { useLocalStorage } from "react-use";

export const useLastTime = () => {
  return useLocalStorage('data-last-time', localStorage.getItem('data-last-time'));
};

export const useMainData = () => {

  
  return useLocalStorage('data-main', JSON.parse(localStorage.getItem('data-main')));
};
