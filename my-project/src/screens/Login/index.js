import { Image, Text, View } from 'react-native'
import { styles } from './style'
import logo from '../../assets/logoShopSwift.png'

export const Login = () => {
    return(
        <View>
        <View>
            <Image source={logo}/>

            <Text style={styles.txtTitulo}>Faça login e se <Text style={styles.txtHighlights}>surpreenda</Text></Text>

        </View>

        <View>

            <Text>E-mail</Text>
            <TextInput keyboardType
            ={'Digite seu e-mail'}/>          
        
        </View>
        
        <View>
            <Text>Senha:</Text>
            <TextInput secureTextEntry={true} placeholder={'Digite sua senha'}/>
        </View>

        </View>
    )
}