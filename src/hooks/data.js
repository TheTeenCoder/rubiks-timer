import { useMainData } from "./storage"

export const useDataFunctions = () => {

  const [data, setData] = useMainData();

  const add = (accumulator, a) => {
      return accumulator + a;
  }

  

  const getAverage = () => {
    return !data ? 0 : data.times.reduce(add,0)/data.times.length
  }

  return {
    getAverage
  }
}