import React from 'react';
import {   StyleSheet, Text, View } from 'react-native';
import sortDropDown from '../../../../../assets/svgxml/sortDropDown';
import sortFilter from '../../../../../assets/svgxml/sortFilter';
import Colors from '../../../../../utils/const/colors/Colors';
import { ConstantLabels } from '../../../../../utils/const/constantTexts/ConstantText';

const Sort = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sortContainer}>
                <Text style={styles.text}>{ConstantLabels.SORT_BY}</Text>
                {sortDropDown()}
            </View>
            {sortFilter()}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingLeft: 16,
        paddingVertical: 11,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Colors.secondary900,
    },
    text: {
        fontSize: 16,
        color: Colors.primary700,
        fontWeight:'400',
        lineHeight: 22,
        letterSpacing: 0.25,
    },
    sortContainer:{
        flexDirection: 'row',
        alignItems:'center',
        gap:8,
    },
    filter:{
        marginRight:15,
    }
})

export default Sort;
