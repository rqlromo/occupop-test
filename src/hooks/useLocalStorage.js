import { useState, useRef, useEffect } from "react";

export default function useLocalStorageState(
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = useState(() => {
    const storedName = localStorage.getItem(key);
    if (storedName) {
      return deserialize(storedName);
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    localStorage.setItem(key, serialize(state));
  }, [key, serialize, state]);

  return [state, setState];
}
