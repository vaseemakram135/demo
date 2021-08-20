const key = "0uTA9radXs10GLUAhLaiWQc5YYun7VmT";

// getting weather

const getWeather = async (id) => {
  const baseUrl = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const res = await fetch(baseUrl + query);
  const data = await res.json();

  return data[0];
};

// getting city
const getCity = async (city) => {
  const baseUrl =
    "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const res = await fetch(baseUrl + query);
  const data = await res.json();

  return data[0];
};
