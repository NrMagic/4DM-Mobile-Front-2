import { Image, Pressable } from 'react-native';
import logo from '../../assets/logoShopSwift.png'
import iconFilter from '../../assets/iconFilter.png'
import { ProductsSection } from '../../components/ProductsSection';
import { ContainerProducts, InputContainer, InputSeach } from './style';

export const Produtos = () => {
    return(
        <ContainerProducts>
            <Image source={logo} />
        
            <InputContainer>
                <InputSeach/>

                <Pressable>
                    <Image source={iconFilter} />
                </Pressable>
            </InputContainer>

            <ProductsSection />

        </ContainerProducts>
    )
}