export function handleReadDataPersist<T>(key: string): T | undefined {
  // Retrieve the JSON string from local storage
  const storedData = localStorage.getItem(key);

  if (!storedData) return undefined;

  // Convert the JSON string back to an object
  return JSON.parse(storedData);
}
