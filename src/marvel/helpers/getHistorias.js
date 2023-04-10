import { data } from '../mocks/historias.json';

export const getHistorias = () => {

    const { results } = data;

    const historiasMap = results.map(history => ({
        id: history.id,
        img: history.thumbnail,
        name: history.title
    }))

    return historiasMap;
}