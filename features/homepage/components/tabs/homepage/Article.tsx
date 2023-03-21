import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import Colors from '../../../../../utils/const/colors/Colors';
import { ConstantLabels } from '../../../../../utils/const/constantTexts/ConstantText';
import { ArticleInterface, FavsArticleInterface } from '../../../interfaces/News';
import { SvgXml } from 'react-native-svg';
import getRightArrow from '../../../../../assets/svgxml/right-arrow';
import { likedArticle, unlikedArticle } from '../../../../../assets/svgxml/likedArticle';
import { useDispatch, useSelector } from 'react-redux';
import { likeClicked, unlikeClicked } from '../../../../../redux/slices/favsSlice';
import { RootState } from '../../../../../redux/store/store';

interface ArticleProps {
    article: ArticleInterface;
}

const Article = (props: ArticleProps) => {
    const [liked, setLiked] = useState(false);
    const { article } = props;
    const dispatch = useDispatch();
    const favArticles = useSelector((state: RootState) => state.favorites.data);

    useEffect(() => {
        let ok;
        favArticles.forEach((item) => {
            if (item.urlToImage === article.urlToImage) { 
                setLiked(true);
                ok=true;
            }
        })
        if(ok!==true)
        {
            setLiked(false);
        }

    }, [favArticles])

    const handleDispatchClicked = () => {
        console.log('click Handled'); //still in work - validation click happens
    }

    const handleLikeClicked = () => {
        setLiked(!liked);
        if (!liked) {
            let fav: FavsArticleInterface = {
                title: article.title,
                urlToImage: article.urlToImage,
                source: article.source
            }
            dispatch(likeClicked(fav));
            
        }
        else {
            dispatch(unlikeClicked(article));
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: article.urlToImage }} />
                <Pressable style={styles.likedImg} onPress={handleLikeClicked}>
                    <SvgXml xml={liked ? likedArticle : unlikedArticle}></SvgXml>
                </Pressable>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.info}>{article.publishedAt}</Text>
                <Text style={styles.title}>{article.title}</Text>
                <View style={styles.authorContainer}>
                    <Text style={styles.author}>{article.author}</Text>
                </View>
                <View style={styles.articleContentContainer}>
                    <Text style={styles.description}>{article.description}</Text>
                </View>
                <Pressable style={styles.buttonContainer} onPress={handleDispatchClicked}>
                    <Text style={styles.buttonText}>{ConstantLabels.NAVIGATE_DISPATCH}</Text>
                    {getRightArrow()}
                </Pressable>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Colors.secondary900,
        backgroundColor: Colors.white,

    },
    dataContainer: {
        paddingHorizontal: 16,
        paddingTop: 9,
        paddingBottom: 12,

    },
    imageContainer: {
        position: 'relative'
    },
    image: {
        height: 160,
        width: '100%',
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
        position: 'relative',
    },
    likedImg: {
        position: 'absolute',
        top: 16,
        right: 16
    },
    info: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        color: Colors.primary700,
    },
    title: {
        paddingTop: 10,
        fontWeight: '700',
        fontSize: 18,
        color: Colors.title_article,
    },
    authorContainer: {
        paddingTop: 10,
    },
    author: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: Colors.primary700

    },
    articleContentContainer: {
        paddingTop: 10,
    },
    description: {
        color: Colors.primary700,
    },
    buttonContainer: {
        paddingHorizontal: 45,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: Colors.primary500,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 26,
        letterSpacing: 0.25,
        textTransform: 'uppercase',
        color: Colors.white,
    }
})

export default Article;
