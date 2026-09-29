import { useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { searchCharacters } from '../../api/api'

export const Home = () => {
    
    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        async function loadCharacters() {
            try{
                const data = await searchCharacters()
            
                setPersonagens(data)
            
            } catch(error){
                setPersonagens([])
            
            }
        
        } loadCharacters()

    }, [])

    // const buscarDados = async () => {
    //     const response = await fetch("https://rickandmortyapi.com/api/character")
    //     const data = await response.json()
    //     setPersonagens(data.results)
    // }
    
    return(
       <View>    
        {/* <Pressable onPress={buscarDados}>
            <Text>Mostrar Personagens</Text>
        </Pressable> */}

        {personagens.map((personagem) => (
            <Text>{personagem.name}</Text>
        ))}
            
       </View>
    )
    
}