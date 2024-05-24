import {getAll, TodosPost} from '../NetWorkUrl';
import {get, post} from '../main';

const allApi = body => {
  const TodosUrl = getAll + body;
  return get(TodosUrl);
};

const TodosList = () => {
  return get(Todos);
};

const allCity = body => {
  const TodosUrl = getAll + body;
  return get(TodosUrl);
};

export default {allApi, TodosList, allCity};
