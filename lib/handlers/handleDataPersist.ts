export function handleDataPersist<T>(key: string, jsonData: T) {
  // Convert JSON data to a string
  const jsonString = JSON.stringify(jsonData);

  // Store the JSON string in local storage
  localStorage.setItem(key, jsonString);
}
