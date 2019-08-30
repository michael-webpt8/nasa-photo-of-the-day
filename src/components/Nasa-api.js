import axios from 'axios';

export function NasaApi(setter) {
  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => setter(res.data))
    .catch(err => console.log(err));
}
