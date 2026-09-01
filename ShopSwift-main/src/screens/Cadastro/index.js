import { View, Text, TextInput, Image, Pressable} from "react-native";
import logo from '../../assets/ShopSwiftLogo.png'
import {TextLogin ,TextButtonLogin, CreateAccountButton, TextButton, Container, TextTitle, TextHighlights, FormContainer, InputContainer, TextLabel, Input, ContentCadastro, ImageLogo } from "./style";
export const Cadastro = () => {
    return(
        <Container>
            <ImageLogo source={logo} /> 
            <ContentCadastro> 

         <FormContainer>
            <TextTitle>Crie uma conta  
                <TextHighlights>{"\n"}e se surpreenda</TextHighlights>
            </TextTitle>
            <InputContainer>
                <View>
                        <TextLabel>E-mail:</TextLabel>
                        <Input keyboardType='email-address'/>
                </View>

                <View>
                        <TextLabel>Senha:</TextLabel>
                        <Input secureTextEntry={true} />   
                </View>
            </InputContainer>
            <CreateAccountButton>
                <TextButton >Criar Conta</TextButton>
            </CreateAccountButton>

            <TextLogin >Já tem uma conta? 
                <TextButtonLogin>Faça login</TextButtonLogin>
            </TextLogin>
         </FormContainer>
            </ContentCadastro>
        </Container>
    )
}   