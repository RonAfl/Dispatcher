import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../../../utils/const/colors/Colors';
import { ConstantLabels } from '../../../utils/const/constantTexts/ConstantText';
import { ArticleInterface } from '../interfaces/News';
import { SvgXml } from 'react-native-svg';
import rightArrow from '../../../assets/svgxml/right-arrow';
interface ArticleProps {
    article: ArticleInterface;
}

const Article = (props: ArticleProps) => {
    const { article } = props;

    const handleClick = () => {
        console.log('click Handled'); //still in work - validation click happens
    }


    return (

        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: article.urlToImage }} />
            <View style={styles.dataContainer}>
                <Text style={styles.info}>{article.publishedAt}</Text>

                <Text style={styles.title}>{article.title}</Text>

                <View style={styles.authorContainer}>
                    <Text style={styles.author}>{article.author}</Text>
                </View>

                <View style={styles.articleContentContainer}>
                    <Text style={styles.description}>{article.description}</Text>
                </View>

                <TouchableOpacity style={styles.buttonContainer} onPress={handleClick}>
                    <Text style={styles.buttonText}>{ConstantLabels.NAVIGATE_DISPATCH}</Text>
                    <SvgXml xml={rightArrow} />

                </TouchableOpacity>
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
    image: {
        height: 160,
        width: '100%',
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,

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
