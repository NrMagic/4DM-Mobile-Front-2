import { Button, Image, Pressable, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Illustration from '../assets/android-icon-foreground.png'
import { Card } from './components/Card';
import { Login } from './screens/Login';
import { Cadastro } from './screens/Cadastro';
import { Home } from './screens/Home';
import { Produtos } from './screens/Produtos';
import { Contatos } from './screens/Contatos';

export default function App() {
  return (
    <SafeAreaView>
      {/* <Login/>      */}
      {/* <Cadastro/> */}
      {/* <Home/> */}
      {/* <Produtos/> */}
      <Contatos/>
    </SafeAreaView>
  );
}