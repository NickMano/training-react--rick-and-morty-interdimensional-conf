import formatCharacters from './formatCharacters'

const fetchCharacter = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json()
    const characters = formatCharacters(data)

    return characters
}

export default fetchCharacter