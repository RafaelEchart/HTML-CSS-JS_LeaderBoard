import './style.css';

import 'notyf/notyf.min.css';
import postNewScore from './postNewScore';
import getScores from './getScores';

window.onload = async () => {
  const submitButton = document.getElementById('submitButton');
  const refreshButton = document.getElementById('refreshButton');

  getScores();

  submitButton.addEventListener('click', postNewScore);
  refreshButton.addEventListener('click', getScores);
};
