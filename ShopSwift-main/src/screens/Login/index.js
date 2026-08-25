import { Image, Text, View, TextInput, Pressable } from 'react-native'
import logo from '../../assets/ShopSwiftLogo.png'

export const Login = () => {
    return(

        <View>
            <Image source={logo}/>
           
            <View>
                <Text>
                    Faça login e se <Text>surpreenda</Text>
                </Text>

            <View>
                <View>
                    <Text>E-mail:</Text>
                    <TextInput keyboardType='email-address'/>
                </View>
                <View>
                    <Text>Senha:</Text>
                    <TextInput secureTextEntry={true}/>
                </View>
            </View>

            <Pressable>
                <Text>Entrar</Text>
            </Pressable>

            <Text>
                Não tem uma conta? <Text>Cadastre-se</Text>
            </Text>

            </View>
        </View>



    )
}