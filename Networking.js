const baseUrl = 'http://localhost:8080/api/';

export const getTrainingsFromApi = async () => {
  return await fetch(baseUrl + 'trainings')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
};

export const getExercisesFromApi = async id => {
  return await fetch(baseUrl + 'exercises?id=' + id)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
};

export const getBmiFromApi = async (height, weight) => {
  return await fetch(baseUrl + 'bmi?height=' + height + '&weight=' + weight)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
};

export const savePersonTrainingFromApi = async (idPerson, idTraining) => {
  return await fetch(
    baseUrl +
      'person/training?id_person=' +
      idPerson +
      '&id_training=' +
      idTraining,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
    .then(response => {
      return response.status;
    })
    .catch(error => {
      console.error(error);
    });
};

export const getPersonTrainingsFromApi = async id => {
  return await fetch(baseUrl + 'person/training?id=' + id)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
};

export const getPersonLastTrainingFromApi = async idPerson => {
  return await fetch(baseUrl + 'person/training/last?id=' + idPerson)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
};
