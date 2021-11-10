import './style.css';
import scoreList from './memory';

window.onload = () => {
  scoreList.currentTasks.forEach((score) => {
    document.getElementById('scoreList').innerHTML += `<li>
        <mark>${score.name}</mark>
        <small>${score.score}</small>
      </li>`;
  });
};