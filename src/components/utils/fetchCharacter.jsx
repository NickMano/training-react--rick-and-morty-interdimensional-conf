const fetchCharacter = async (characters, page) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json()
    const newCharacters = formatCharacters(data.results)

    return [].concat(characters, newCharacters)
}

const formatCharacters = (characters) => {
return characters.map(character => {
    return {
    id:character.id,
    firstName: character.name,
    lastName: "",
    email: `${character.name}@gmail.com`,
    jobTitle: `${character.type ? `${character.type}  - ` : ''} ${character.gender} - ${character.origin.name}`,
    twitter: `${character.name}_ok`,
    avatarUrl: character.image,
    }
})
}

export default fetchCharacter