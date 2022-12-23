import { View, Image, FlatList } from 'react-native';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';

import { useEffect, useState } from 'react';
 
export function Home(){
    const [games, setGames] = useState<GameCardProps[]>([]);
    
    useEffect(()=>{
        fetch('http://192.168.100.10:3333/games')
        .then(response => response.json())
        .then(data => setGames(data))
    }, [])

    return (
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logo}/>
            
            <Heading title="Encontre seu duo" subtitle="Selecione o game que deseja jogar...">

            </Heading>

            <FlatList   horizontal 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.contenteList}
                        data={games} 
                        keyExtractor={item => item.id} 
                        renderItem={({ item }) => (
                                <GameCard data={ item }>
                                </GameCard>       
                        )}>

            </FlatList>

                
        </View>
    );
}