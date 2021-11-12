const postNewScore = async () => {
  const score = document.getElementById('scoreInput');
  const name = document.getElementById('nameInput');

  const loading = document.getElementById('loading-form');

  const error = document.getElementById('ErrorMessage');
  error.style.display = 'none';

  if (name.value.length && score.value.length) {
    try {
      loading.style.display = 'flex';
      await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/afMNT2NsfBzm4rDRXx1A/scores/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: name.value,
            score: score.value,
          }),
        },
      );
      score.value = '';
      name.value = '';
      loading.style.display = 'none';
    } catch (err) {
      console.log(err);
    }
  } else {
    error.style.display = 'block';
  }
};

export default postNewScore;