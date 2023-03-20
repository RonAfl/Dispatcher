import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import Colors from '../../../../../utils/const/colors/Colors';
import {  FavsArticleInterface } from '../../../interfaces/News';
import { SvgXml } from 'react-native-svg';
import { likedArticle } from '../../../../../assets/svgxml/likedArticle';
import { useDispatch } from 'react-redux';
import { unlikeClicked } from '../../../../../redux/slices/favsSlice';
interface ArticleProps {
    article: FavsArticleInterface;
}

const FavArticle = (props: ArticleProps) => {
    const { article } = props;
    const dispatch = useDispatch();
    
    const handleClick = () => {
        console.log('click Handled'); //still in work - validation click happens
    }
    const handleUnLikeClicked = () => {
        dispatch(unlikeClicked(article));
    }


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: article.urlToImage }} />
                <Pressable style={styles.likedImg} onPress={handleUnLikeClicked}>
                    <SvgXml xml={likedArticle}></SvgXml>
                </Pressable>
            </View>
            <Pressable style={styles.dataContainer} onPress={handleClick}>
                <Text style={styles.title}>{article.title}</Text>
            </Pressable>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.secondary900,
        backgroundColor: Colors.white,
    },
    imageContainer:{
        position:'relative',
    },
    dataContainer: {
        paddingLeft: 16,
        paddingTop: 9,
        paddingBottom: 12,
        paddingRight: 140,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 8,
        margin: 4,
    },
    likedImg: {
        position: 'absolute',
        top: 8,
        left: 8,
    },
    title: {
        paddingTop: 10,
        fontWeight: '500',
        fontSize: 14,
        color: Colors.title_article,
        // paddingRight:130,
    },
})

export default FavArticle;
