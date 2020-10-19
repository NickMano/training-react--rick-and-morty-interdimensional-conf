const formatCharacters = (characters) => {
    if (Array.isArray(characters) ) {
        return characters.map(character => {
            return {
            id: character.id,
            firstName: character.name,
            lastName: "",
            email: `${character.name}@gmail.com`,
            jobTitle: `${character.type ? `${character.type}  - ` : ''} ${character.gender} - ${character.origin.name}`,
            twitter: `${character.name}_ok`,
            avatarUrl: character.image,
            }
        })
    } else {
        return {
        id: characters.id,
        firstName: characters.name,
        lastName: "",
        email: `${characters.name}@gmail.com`,
        jobTitle: `${characters.type ? `${characters.type}  - ` : ''} ${characters.gender} - ${characters.origin.name}`,
        twitter: `${characters.name}_ok`,
        avatarUrl: characters.image,
        }
    }
}

export default formatCharacters;