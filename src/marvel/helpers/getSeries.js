import { data } from '../mocks/series.json'

export const getSeries = () => {

    const { results } = data;

    const seriesMap = results.map(serie => ({
        id: serie.id,
        img: serie.thumbnail.path,
        extension: serie.thumbnail.extension,
        name: serie.title
    }))

    return seriesMap;
}