import { Image, Pressable, View, Text, TextInput } from "react-native"
import logo from "../../assets/logoShopSwift.png"
import maps from "../../assets/maps.png"
import { ConteinerContact, MapsConteiner, MapText, MapsImage, ContainerForm, MessageText, } from "./style"
export const Contatos = () =>{

    return(
        <ConteinerContact>

            <Image souce={logo}/>

            <MapsConteiner>
                <MapText>Venha nos <TextHighLigth>Visitar</TextHighLigth></MapText>
                <MapsImage souce={maps}/>
            </MapsConteiner>

            <ContainerForm>
                <MessageText>Nome:</MessageText>
                <TextInput />
            </ContainerForm>

            <View>
                <Text>Assuno:</Text>
                <TextInput/>
            </View>

            <View>
                <Text>Mensagem:</Text>
                <TextInput/>
            </View>

            <Pressable>
                <Text>Enviar</Text>
            </Pressable>

        </ConteinerContact>
    )
}