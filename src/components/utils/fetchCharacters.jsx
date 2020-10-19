import formatCharacters from './formatCharacters'

const fetchCharacters = async (page) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await response.json()
        const characters = formatCharacters(data.results)
    
        return characters
    } catch (error) {
        console.error(error)
        return []
    }

}

export default fetchCharacters