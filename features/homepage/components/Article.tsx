import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { News } from '../interfaces/News';


interface ArticleProps {
    article: News;
}

const Article = (props: ArticleProps) => {
    const { article } = props;

    const handleClick = () => {
        console.log('click Handled');
    }


    return (

        <View style={styles.container}>
            <View style={styles.articleImageContainer}>
                <Image style={styles.image} source={{ uri: article.urlToImage }} />
            </View>
            <View style={styles.dataContainer}>
                <View>
                    <Text style={styles.info}>{article.publishedAt}</Text>
                </View>

                <View>
                    <Text style={styles.title}>{article.title}</Text>
                </View>

                <View style={styles.authorContainer}>
                    <Text style={styles.author}>{article.author}</Text>
                </View>

                <View style={styles.articleContentContainer}>
                    <Text style={styles.description}>{article.description}</Text>
                </View>

                <View style={styles.goToArticleContainer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleClick}>
                        <Text style={styles.buttonText}>Navigate to dispatch</Text>
                        <Image source={require('../../../assets/images/RightArrow.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#D9DBE9',
        backgroundColor:'#FFFFFF'

    },
    dataContainer:{
        paddingHorizontal:16,
        paddingTop:9,
        paddingBottom:12,
        
    },
    image: {
        height: 160,
        width: '100%',
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
     
    },
    articleImageContainer: {
    },

    info: {
        fontSize:14,
        fontWeight: '400',
        lineHeight: 22,
        color: '#5A5A89'
    },

    title: {
        paddingTop:10,
        fontWeight:'700',
        fontSize: 18,
        color:'#14142B',
    },

    authorContainer: {
        paddingTop:10,
    },

    author:{
        fontWeight:'400',
        fontSize:14,
        lineHeight:22,
        color: '#5A5A89'

    },

    articleContentContainer: {
        paddingTop:10,
    },

    description: {
        color: '#5A5A89',
    },

    goToArticleContainer: {

    },

    buttonContainer: {
        paddingHorizontal:45,
        paddingVertical: 5,
        alignItems:'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderRadius:20,
        backgroundColor: '#0058B9',
        marginTop: 20,
    },

    buttonText: {
       fontSize: 14,
       fontWeight: '500',
       lineHeight: 26,
       letterSpacing: 0.25,
       textTransform: 'uppercase',
       color: '#FFFFFF'
    }
})

export default Article;
