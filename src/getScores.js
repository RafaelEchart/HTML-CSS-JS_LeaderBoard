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
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dMg2ekytUZGHf60kEMby/scores/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    leaderboardScores = await leaderboardAPIrequest.json();

    console.log(leaderboardScores);
  } catch (err) {
    const notyf = new Notyf({
      position: {
        x: 'right',
        y: 'top',
      },
    });
    notyf.error('Error, Plese try again...');
    refreshButton.style.visibility = 'visible';
    loading.style.display = 'none';
  }
  console.log(leaderboardScores.result.length);
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
    loading.style.display = 'none';

    scoreListContainer.innerHTML += '<div style="display: flex; flex-direction: column;align-items: center;margin-top: 50px"><ion-icon name="add-circle-outline" style="font-size: 60px"></ion-icon><h6 style="font-size: 19px; margin: 15px">Add your first score</h6></div>';
  }
  refreshButton.style.visibility = 'visible';
};

export default getScores;