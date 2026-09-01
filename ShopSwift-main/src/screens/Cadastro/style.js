// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//     containerHome:{
//         gap:   10,
//         paddingHotizontal: 20
//     },
//     logo:{
//         width: 200,
//         height: 100,
//         right: 20,
//     },
//     contentHome:{
//         gap: 20,
//         paddingHorizontal: 20
//     },
//     containerForm:{
//         gap: 40 
//     },

//     containerInput:{
//         gap: 2
//     },
//     input:{
//         borderWidth: 1,
//         borderColor: "#2d3133",
//         borderRadius: 7,
//     },
//     buttonLogin:{
//         backgroundColor: "#375EE7",
//         borderRadius: 7,
//         paddingVertical: 14
        
//     },
//     txtLogin:{
//         color: "#fff",
//         textAlign: "center",
//         fontWeight: "bold",
//     },
//     txtNaoTemConta:{
//         color: "#2D3133",
//         textAlign: "center",
//     },
//     txtCriarConta:{
//         color: "#375EE7",
//         textDecorationLine: "underline",
//     },
//     txtColor:{
//         color: "#fff",
//         textAlign: "center",
//     },

//     txtTitulo:{
//         color: "#2D3133",
//         fontSize: 40,
//         fontWeight: 700,
//     },
//     txtHighlights:{
//         color: "#375EE7"
//     }
// })


    import styled from "styled-components/native";

    export const Container = styled.View`
    gap: 40px;
    padding: 0 20px; 
      `;

    export const TextTitle = styled.Text`
        font-size: 40px;
        font-weight: 700;
        width: 300px;
    `;

    export const TextHighlights = styled.Text`
        color: #375EE7;
    `;

    export const FormContainer = styled.View`
        gap: 40px;
    `;

    export const InputContainer = styled.View`
        gap: 25px;
    `;

    export const TextLabel = styled.Text`
        font-size: 20px;
    `;
    export const Input = styled.TextInput`
        border-width: 1px;
        border-color: #2d3133;
        border-radius: 7px;
    `;

    export const ContentCadastro = styled.View`
        gap: 40px;
    `;

    export const CreateAccountButton = styled.Pressable`
        background-color: #375EE7;
        border-radius: 7px;
        padding: 14px 0;
    `;

    export const ImageLogo = styled.Image`
        width: 200px;
        height: 100px;
        right: 20px;
    `;

    export const TextButton = styled.Text`
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
    `;

    export const TextButtonLogin = styled.Text`
        color: #375EE7;
        text-decoration-line: underline;
    `;

    export const TextLogin = styled.Text`
        color: #2D3133;
        text-align: center;
    `;