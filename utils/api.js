import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';

class Api {
  getCharacters = async () => {
    const url = `${BASE_URL}character`;
    const resultado = await axios.get(url);

    return resultado.data;
  };

  getCharacterId = async (id) => {
    const url = `${BASE_URL}/character/${id}`;
    const resultado = await axios.get(url);

    return resultado.data;
  };
}

export default new Api();
