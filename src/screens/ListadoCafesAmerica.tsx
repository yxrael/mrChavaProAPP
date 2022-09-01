import React, { useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { CafeIndividual } from '../components/CafeIndividual';
import { AuthContext } from '../context/AuthContext';
import { ProductContext } from '../context/ProductContext';
import { LoginScreen } from './LoginScreen';

//v31.08

export const ListadoCafesAmerica = () => {

    const { user, status } = useContext(AuthContext);
    const { productos } = useContext(ProductContext);

    const listaAmerica = productos.filter( cafe => cafe.continente === 'AMERICA' && cafe.disponible === true && cafe.descafeinado === false);

    if ( status !== 'authenticated'){
        return (
            <LoginScreen />
        )
    }

    const handleNext = () => {
        console.log('pagina siguiente');
    }

    return (

    <View>

        <View 
            style={{
                position: 'absolute',
                zIndex: 8888,
                backgroundColor: 'black',
                height: 50,
                width: 50,
                bottom: 29,
                right: 8,
                borderRadius: 100,
                opacity: 0.3
            }}
        />

        <TouchableOpacity 
                activeOpacity={ 0.8 }
                onPress={ handleNext }
                style={{
                position: 'absolute',
                zIndex: 9999,
                backgroundColor: '#9ACD32',
                height: 50,
                width: 50,
                bottom: 30,
                right: 5,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                
                elevation: 3,
                }}>
            <View>
            <Ionicons name='chevron-forward-outline' size={35} color='#808000'/>

                {/* <Text style={{ fontWeight: 'bold' }}>OK</Text> */}
            </View>
        </TouchableOpacity>

        <View style={{ marginHorizontal: 20}}>
            {/* <Text>LISTADO CAFES</Text>
            <Text>{ user?.uid }</Text> */}
            {/* <Text>{ productos }</Text> */}

            

            <FlatList 
                data={ listaAmerica }
                renderItem={ ( {item} ) => (
                <CafeIndividual 
                    nombre={ item.nombre }
                    pais={ item.pais }
                    precio={ item.precio }
                    cantidad={ item.cantidad }
                    continente={ item.continente }
                    descafeinado={ item.descafeinado }
                    infoExtra={ item.infoExtra }
                    proceso={ item.proceso }
                    puntos={ item.puntos }
                    rutaURL={ item.rutaURL }
                    disponible={ item.disponible }
                />)}
                keyExtractor={ item => String(item.id) }
                showsVerticalScrollIndicator={ false }
            />

            
            

        </View>
    </View>
    );
}