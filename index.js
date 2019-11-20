const countryList = document.querySelector('#country-list');
const button = document.querySelector('#the-button');

const urlString = 'https://restcountries.eu/rest/v2/name/spain';
const baseURL = 'https://restcountries.eu/rest/v2/name/';

function getCountry1(countryName) {
  axios
    .get(baseURL + countryName)
    .then(responseFromAPI => {
      const { data } = responseFromAPI;

      let htmlString = '';

      data.forEach(countryObj => {
        htmlString += `
          <h2> ${countryObj.name} </h2>
          <p> ${countryObj.capital} </p>
        `;
      });

      countryList.innerHTML = htmlString;
    })
    .catch(err => console.log(err));
}

function getCountry2(countryName) {
  // Pre built request type
  const getCountryByName = axios.create({ baseURL: baseURL, method: 'get' });

  getCountryByName(countryName)
    .then(responseFromAPI => {
      const { data } = responseFromAPI;

      let htmlString = '';

      data.forEach(countryObj => {
        htmlString += `
          <h2> ${countryObj.name} </h2>
          <p> ${countryObj.capital} </p>
        `;
      });

      countryList.innerHTML = htmlString;
    })
    .catch(err => console.log(err));
}

button.addEventListener('click', () => {
  const country = document.getElementById('the-input').value;
  console.log('COUNTRY', country);

  getCountry2(country);
});
