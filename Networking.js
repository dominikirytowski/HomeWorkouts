const baseUrl = 'http://192.168.0.10:8080/api/';

export const getTrainings = async () => {
  return await fetch(baseUrl + 'trainings')
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
};

export const getExercises = async id => {
  try {
    await fetch(baseUrl + 'exercises?id=' + id)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      });
  } catch (error) {
    console.error(error);
  }
};

export const getBmi = async (height, weight) => {
  try {
    await fetch(baseUrl + 'bmi?height=' + height + '&weight=' + weight)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      });
  } catch (error) {
    console.error(error);
  }
};

export const savePersonTraining = async (idPerson, idTraining) => {
  try {
    await fetch(
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
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      });
  } catch (error) {
    console.error(error);
  }
};

export const getPersonTraining = async id => {
  try {
    await fetch(baseUrl + 'person/training?id=' + id)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      });
  } catch (error) {
    console.error(error);
  }
};
