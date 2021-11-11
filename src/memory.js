const scoreList = {
  task: [{
    name: 'hola',
    score: 12,
  }],

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
