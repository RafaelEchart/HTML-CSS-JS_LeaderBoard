const postNewScore = async () => {
  const score = document.getElementById('scoreInput');
  const name = document.getElementById('nameInput');

  if (name.value.length && score.value.length) {
    try {
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
    } catch (err) {
      console.log(err);
    }
  } else {
    alert('no');
  }
};

export default postNewScore;