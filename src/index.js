import './style.css';
import img from './assets/loading.gif';

import postNewScore from './postNewScore';
import getScores from './getScores';

window.onload = async () => {
  // const loading = document.getElementById('loading-image');
  // loading.src = img;
  const submitButton = document.getElementById('submitButton');
  const refreshButton = document.getElementById('refreshButton');

  getScores();

  submitButton.addEventListener('click', postNewScore);
  refreshButton.addEventListener('click', getScores);
};
