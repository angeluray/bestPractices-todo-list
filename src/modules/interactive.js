import { printDynamic, eachList } from './Add&Remove.js';

const noCompleted = () => {
  const comptdTaskList = eachList.filter((noCompletedTask) => noCompletedTask.completed === false);
  printDynamic(comptdTaskList);
  localStorage.clear();
  localStorage.setItem('tasks', JSON.stringify(comptdTaskList));
};

// eslint-disable-next-line
export { noCompleted };