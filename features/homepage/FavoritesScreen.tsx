import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import Colors from '../../utils/const/colors/Colors';
import FavArticle from './components/tabs/favorites/FavArticle';
import { FavsArticleInterface } from './interfaces/News';


const FavoritesScreen = () => {
    const favArticles: FavsArticleInterface[] = useSelector((state: RootState) => state.favorites.data);

    return (
        <View style={styles.container}>
            <View style={styles.articleContainer}>
                <FlatList
                    data={favArticles}
                    keyExtractor={(item) => item.source.id + item.source.name + item.title + item.urlToImage}
                    renderItem={({ item }) => <FavArticle article={item} />}
                    ListHeaderComponent={<Text style={styles.mainTitle}>Saved articles</Text>}
                    ItemSeparatorComponent={() => <View style={styles.articleGaps} />}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    articleContainer:{
        flex: 1,
        marginTop: 20,
        paddingHorizontal:16,
        
    },
    mainTitle:{
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 32,
        color: Colors.primary900,
        paddingBottom: 20,
    },
    articleGaps:{
        height: 8,
    },
 
})

export default FavoritesScreen;
