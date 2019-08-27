import axios from 'axios';

export function NasaApi() {
  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
