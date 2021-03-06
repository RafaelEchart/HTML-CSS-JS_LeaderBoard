import { Notyf } from 'notyf';
import getScores from './getScores';

const postNewScore = async () => {
  const scoreInput = document.getElementById('scoreInput');
  let score = scoreInput.value;

  const name = document.getElementById('nameInput');
  const refresh = document.getElementById('auto-refresh');

  const loading = document.getElementById('loading-form');

  const error = document.getElementById('ErrorMessage');
  error.style.display = 'none';

  if (score.length > 9) { score = score.slice(0, 8); }

  if (name.value.length && score.length) {
    try {
      loading.style.display = 'flex';
      await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dMg2ekytUZGHf60kEMby/scores/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: name.value,
            score,
          }),
        },
      );
      scoreInput.value = '';
      name.value = '';
      const notyf = new Notyf({
        position: {
          x: 'right',
          y: 'top',
        },
      });
      notyf.success({ message: 'New Score Added!', duration: 3000 });

      if (refresh.checked) {
        getScores();
      }
    } catch (err) {
      const notyf = new Notyf({
        position: {
          x: 'right',
          y: 'top',
        },
      });
      notyf.error('Error, Plese try again...');
    }
  } else {
    error.style.display = 'block';
    const notyf = new Notyf({
      position: {
        x: 'right',
        y: 'top',
      },
    });
    notyf.error('Error: Check your inputs');
  }

  loading.style.display = 'none';
};

export default postNewScore;