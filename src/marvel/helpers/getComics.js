import { data } from '../mocks/comics.json'

export const getComics = () => {

    const { results } = data;

    const comicMap = results.map(comic => ({
        id: comic.id,
        name: comic.title,
        img: comic.thumbnail.path,
        extension: comic.thumbnail.extension
    }))

    return comicMap;
}