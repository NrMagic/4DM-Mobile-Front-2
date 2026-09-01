import { Image, ScrollView } from 'react-native'
import { Conteiner } from './style'
import logo from '../../assets/logo.png'

export const Home = () => {
  return (
    
    <Conteiner>
        <Image source={logo} />

        <HighLightSection>
            <TitleHighLight>Nossos<TextHighLight>Destaques</TextHighLight>
            </TitleHighLight>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Image source={require('../../assets/1.png')} />
                <Image source={require('../../assets/2.png')} />
                <Image source={require('../../assets/3.png')} />
            </ScrollView>
        </HighLightSection>
              
    </Conteiner>
  )
}