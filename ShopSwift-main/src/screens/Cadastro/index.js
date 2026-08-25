import { View, Text, TextInput, Image, Pressable} from "react-native";
import logo from '../../assets/ShopSwiftLogo.png'
import { styles } from "./style";

export const Cadastro = () => {
    return(
        <View style={styles.containerHome}>
            <Image source={logo} style={styles.logo} />  

         <View style={styles.contentHome}>
            <Text style={styles.txtTitulo}>Crie uma comta  
                <Text style={styles.txtHighlights}>{"\n"}e se surpreenda</Text>
            </Text>

                <View style={styles.containerInput}>
                        <Text>E-mail:</Text>
                        <TextInput keyboardType='email-address' style={styles.input}/>
                </View>
                <View style={styles.containerInput}>
                        <Text>Senha:</Text>
                        <TextInput secureTextEntry={true} style={styles.input}/>   

                </View>

            <Pressable style={styles.buttonLogin}>
                <Text style={styles.txtColor}>Criar</Text>
            </Pressable>

            <Text style={styles.txtColor}>Já tem uma conta? 
                <Text style={styles.txtCriarConta}>Faça login</Text>
            </Text>
         </View>

        </View>
    )
}   