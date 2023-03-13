import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import { fetchNews } from '../../../redux/thunks/newsThunk';
import Article from './Article';
import { ArticleInterface } from '../interfaces/News';
import Colors from '../../../utils/const/colors/Colors';

const MainContent = () => {
    const [lastLoginData, setlastLoginData] = useState('');
    const news: ArticleInterface[] = useSelector((state: RootState) => state.news.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    useEffect(() => {
        setlastLoginData('03:50 PM, 09.03.2022');
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.titlesContainer}>
                <View style={styles.lastLoginContainer}>
                    <Text style={styles.lastLoginTitile}>Last Login: </Text>
                    <Text style={styles.lastLoginText}>{lastLoginData}</Text>
                </View>
            </View>
            <View style={styles.newsContainer}>
                <FlatList
                    data={news}
                    keyExtractor={(item) => item.source.id + item.source.name + item.title + item.urlToImage}
                    renderItem={({ item }) => <Article article={item} />}
                    ListHeaderComponent={<Text style={styles.mainTitle}>Top Headlines in USA</Text>}
                    ItemSeparatorComponent={() => <View style={styles.articleGaps} />}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 6,
    },
    articleGaps: {
        height: 20,
    },
    titlesContainer: {
        gap: 12,
    },
    lastLoginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lastLoginText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: 0.25,
        color: Colors.primary700,
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 32,
        color: Colors.primary900,
        paddingBottom: 20,
    },
    lastLoginTitile: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 22,
        letterSpacing: 0.25,
        color: Colors.primary700,
    },
    newsContainer: {
        flex: 1,
        marginTop: 20,
    },
});

export default MainContent;
