import { Notyf } from 'notyf';

const getScores = async () => {
  let leaderboardScores;
  let leaderboardAPIrequest;
  const scoreListContainer = document.getElementById('scoreList');
  const refreshButton = document.getElementById('refreshButton');
  refreshButton.style.visibility = 'hidden';
  scoreListContainer.innerHTML = '';

  const loading = document.getElementById('loading');
  loading.style.display = 'flex';

  try {
    leaderboardAPIrequest = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/afMNT2NsfBzm4rDRXx1A/scores/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    leaderboardScores = await leaderboardAPIrequest.json();
  } catch (err) {
    const notyf = new Notyf({
      position: {
        x: 'right',
        y: 'top',
      },
    });
    notyf.error('Error, Plese try again...');
    refreshButton.style.visibility = 'visible';
  }

  if (leaderboardScores.result.length) {
    leaderboardScores.result.sort((a, b) => b.score - a.score);

    loading.style.display = 'none';
    leaderboardScores.result.forEach((score) => {
      scoreListContainer.innerHTML += `<li>
          <mark>${score.user}</mark>
          <small>${score.score}</small>
        </li>`;
    });

    const notyf = new Notyf({
      position: {
        x: 'right',
        y: 'top',
      },
      types: [
        {
          type: 'success',
          background: '#8AC7DB',
        },
      ],
    });
    notyf.success('Leaderboard updated!');
  } else {
    scoreListContainer.innerHTML += "<h5 style='text-align: center; text-decoration: underline; cursor: wait'>Please add a score</h5>";
  }
  refreshButton.style.visibility = 'visible';
};

export default getScores;