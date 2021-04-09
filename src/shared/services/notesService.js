const REQUEST_URL = "https://api.emmasandbox.com";

export const fetchNotes = async () => {
  return fetch(REQUEST_URL)
    .then(response => response.json())
    .then(data => data)
    .catch(() => console.log("FETCH ERROR"));
};
