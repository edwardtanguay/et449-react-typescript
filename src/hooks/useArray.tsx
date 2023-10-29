import { useState } from 'react';

export const useArray = (initialArray: unknown[]) => {
  const [array, setArray] = useState(initialArray);

  const push = (element: unknown) => {
    setArray([...array, element]);
  };

  const remove = (index: number) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const clear = () => {
    setArray([]);
  };

  return {
    array,
    push,
    remove,
    clear,
  };
}