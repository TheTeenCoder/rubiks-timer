import { useLocalStorage } from "react-use"
import { useLastTime } from "./storage";

export const useMode = () => {
  const [mode, setMode] = useLocalStorage('misc-mode', localStorage.getItem('misc-mode'));
  
  const [, setLastTime] = useLastTime(); 

  const defaultMode = (lastTime) => {
    setLastTime(lastTime)
  }


  const modeBackground = (args) => {
    switch (mode){
      case null || 'default': 
        defaultMode(args.lastTime)
    }
  }

  return {
    mode, setMode, modeBackground
  }
  
}