
const getScores = async () => {
  let leaderboardScores;
  let leaderboardAPIrequest;
  const scoreListContainer = document.getElementById('scoreList');
  scoreListContainer.innerHTML = '';

  
  const loading = document.getElementById('loading');
  loading.style.display = 'flex'
  


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
    console.log('Error from initial petition: Check console.');
  }

  if (leaderboardScores.result.length) {
    
    loading.style.display = 'none'
    leaderboardScores.result.forEach((score) => {
      scoreListContainer.innerHTML += `<li>
          <mark>${score.user}</mark>
          <small>${score.score}</small>
        </li>`;
    });

  } else {
    scoreListContainer.innerHTML += "<h5 style='text-align: center; text-decoration: underline; cursor: wait'>Please add a score</h5>";
  }
};

export default getScores;