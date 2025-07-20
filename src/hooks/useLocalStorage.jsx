import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : initialValue;
    } catch (err) {
      console.error("Error reading localStorage key", key, err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Error writing to localStorage key", key, err);
    }
  }, [key, value]);

  return [value, setValue];
}
