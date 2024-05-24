import {dutyPharmacy, TodosPost} from '../NetWorkUrl';
import {get, post} from '../main';

const dutyPharmacyApi = body => {
  const TodosUrl = dutyPharmacy + body;
  return get(TodosUrl);
};

const TodosList = () => {
  return get(Todos);
};
const dutyPharmacyCity = body => {
    const TodosUrl = dutyPharmacy + body;
    return get(TodosUrl);
  };

export default {dutyPharmacyApi, TodosList,dutyPharmacyCity};
