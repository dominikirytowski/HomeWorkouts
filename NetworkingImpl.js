import {
  getTrainingsFromApi,
  getExercisesFromApi,
  getBmiFromApi,
  savePersonTrainingFromApi,
  getPersonTrainingsFromApi,
  getPersonLastTrainingFromApi,
} from './Networking';

export const getTrainings = async () => {
  return await getTrainingsFromApi();
};
export const getExercises = async id => {
  return await getExercisesFromApi(id);
};

export const getBmi = async (height, weight) => {
  return await getBmiFromApi(height, weight);
};

export const savePersonTraining = async (idPerson, idTraining) => {
  return await savePersonTrainingFromApi(idPerson, idTraining);
};

export const getPersonTrainings = async idPerson => {
  return await getPersonTrainingsFromApi(idPerson);
};
export const getPersonLastTraining = async idPerson => {
  return await getPersonLastTrainingFromApi(idPerson);
};
