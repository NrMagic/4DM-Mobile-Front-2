import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerHome:{
        gap: 110,
        paddingHotizontal: 20
    },

    contentHome:{
        gap: 20,
        paddingHorizontal: 20
    },
    containerForm:{
        gap: 40 
    },

    containerInput:{
        gap: 2
    },
    input:{
        borderWidth: 1,
        borderColor: "#2d3133",
        borderRadius: 7,
    },
    buttonLogin:{
        backgroundColor: "#375EE7",
        borderRadius: 7,
        paddingVertical: 14
        
    },
    txtLogin:{
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
    txtNaoTemConta:{
        color: "#2D3133",
        textAlign: "center",
    },
    txtCriarConta:{
        color: "#375EE7",
        textDecorationLine: "underline",
    },
    txtColor:{
        color: "#fff",
        textAlign: "center",
    },

    txtTitulo:{
        color: "#2D3133",
        fontSize: 40,
        fontWeight: 700,
    },
    txtHighlights:{
        color: "#375EE7"
    }
})