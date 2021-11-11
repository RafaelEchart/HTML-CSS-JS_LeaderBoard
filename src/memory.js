const scoreList = {
  task: [
    {
      name: 'Rafael Echart',
      score: 24,
    },
    {
      name: 'Guillermo Echart',
      score: 77,
    },
    {
      name: 'Brandon Kocher',
      score: 90,
    },
    {
      name: 'Emiliano Felipano',
      score: 123,
    },
    {
      name: 'Guayaco Batracio',
      score: 1,
    },
  ],

  get currentTasks() {
    return this.task;
  },

  set updateTasks(newTask) {
    this.task.push(newTask);
  },

  set newArray(array) {
    this.task = array;
  },
};

export default scoreList;
