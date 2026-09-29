const API_URL = "https://rickandmortyapi.com/api"

export async function searchCharacters () {

    // const response = await axios.get(`${API_URL}/character`)
    const response = await fetch (`${API_URL}/character`)
    const data = await response.json()
    return data.results
    
}