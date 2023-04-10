

export const getFetch = async ({ search }) => {

    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${search}&ts=1&apikey=53910c0d6281fa7f2230e3055521237d&hash=e27474824d8565f4510ed9a66261ba58`;
    const res = await fetch(url);
    const fetchingData = await res.json();
    const { results } = fetchingData.data


    const mapeo = results.map(hero => ({
        id: hero.id,
        name: hero.name,
        img: hero.thumbnail.path,
        extension: hero.thumbnail.extension
    }))

    return mapeo
}