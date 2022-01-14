import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

//Bayut Api Also Reuseanle
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "26569863d3mshcb662a5e0043a07p181e98jsn773e4f4916e4",
    },
  });

  return data;
};
