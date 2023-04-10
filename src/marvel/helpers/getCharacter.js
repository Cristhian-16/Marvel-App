import { data } from '../mocks/heroes.json'

export const getCharacter = () => {

    const { results } = data

    const heroMap = results.map(hero => ({
        id: hero.id,
        name: hero.name,
        img: hero.thumbnail.path,
        extension: hero.thumbnail.extension
    }))

    return heroMap;
}