import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import getToggle from "../../../../../assets/svgxml/toggleSettings";
import Colors from "../../../../../utils/const/colors/Colors";
import { ConstantLabels, ConstantText } from "../../../../../utils/const/constantTexts/ConstantText";
import { Screen } from "../../../../../utils/navigation/Screens/Screens";
import TopBar from "./components/TopBar";
import { ProfileStackParams } from "./ProfileNavigator";

const SettingsScreen = () => {

    const [filters, setFilters] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [notifications, setNotifications] = useState(true);




    const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none"
            }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarActiveBackgroundColor: Colors.primary900,
            tabBarInactiveBackgroundColor: Colors.primary900,
            tabBarActiveTintColor: Colors.white,
            tabBarInactiveTintColor: Colors.gray,
            tabBarStyle: { height: 65 }
        });
    }, [navigation]);

    return (
        <View style={styles.container} >
            <TopBar/>
            <View style={styles.mainContentContainer}>
                <Text style={styles.titleText}>{ConstantLabels.SETTINGS}</Text>
                <Text style={styles.searchResultsTitle}>{ConstantLabels.SEARCH_RESULTS}</Text>
                <View style={styles.saveFiltersSection}>
                    <View style={styles.saveFiltersTextsContainer}>
                        <Text style={styles.subTitle}>{ConstantLabels.SAVE_FILTERS}</Text>
                        <View style={styles.smallGap}>
                            <Text style={styles.subText}>{ConstantText.ALLOW_FILTERS_SAVE}</Text>
                            <Text style={styles.subText}>{ConstantText.BACK_TO_APP}</Text>
                        </View>
                    </View>
                    <Pressable onPress={() => setFilters(!filters)}>
                        {getToggle(filters)}

                    </Pressable>
                </View>

                <View style={styles.saveFiltersSection}>
                    <View style={styles.saveFiltersTextsContainer}>
                        <Text style={styles.subTitle}>Save search results</Text>
                        <View style={styles.smallGap}>
                            <Text style={styles.subText}>Alow us to save your search result</Text>
                            <Text style={styles.subText}>prefrences for next search</Text>
                        </View>
                    </View>
                    <Pressable onPress={() => setSearchResults(!searchResults)}>

                        {getToggle(searchResults)}
                    </Pressable>
                </View>

                <Text style={styles.searchResultsTitle}>App prefrences</Text>

                <View style={styles.bottomSection}>


                    <View style={styles.notificationsSection}>
                        <Text style={styles.subTitle}>Notification</Text>
                        <Pressable onPress={() => setNotifications(!notifications)}>

                            {getToggle(notifications)}
                        </Pressable>
                    </View>

                    <View style={styles.notificationsSection}>
                        <Text style={styles.subTitle}>News language</Text>
                        <SvgXml xml={`<svg width="75" height="17" viewBox="0 0 75 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.54688 11.7734V13H2.52344V11.7734H8.54688ZM2.82812 1.625V13H1.32031V1.625H2.82812ZM7.75 6.51562V7.74219H2.52344V6.51562H7.75ZM8.46875 1.625V2.85938H2.52344V1.625H8.46875ZM11.8906 6.35156V13H10.4453V4.54688H11.8125L11.8906 6.35156ZM11.5469 8.45312L10.9453 8.42969C10.9505 7.85156 11.0365 7.31771 11.2031 6.82812C11.3698 6.33333 11.6042 5.90365 11.9062 5.53906C12.2083 5.17448 12.5677 4.89323 12.9844 4.69531C13.4062 4.49219 13.8724 4.39062 14.3828 4.39062C14.7995 4.39062 15.1745 4.44792 15.5078 4.5625C15.8411 4.67188 16.125 4.84896 16.3594 5.09375C16.599 5.33854 16.7812 5.65625 16.9062 6.04688C17.0312 6.43229 17.0938 6.90365 17.0938 7.46094V13H15.6406V7.44531C15.6406 7.0026 15.5755 6.64844 15.4453 6.38281C15.3151 6.11198 15.125 5.91667 14.875 5.79688C14.625 5.67188 14.3177 5.60938 13.9531 5.60938C13.5938 5.60938 13.2656 5.6849 12.9688 5.83594C12.6771 5.98698 12.4245 6.19531 12.2109 6.46094C12.0026 6.72656 11.8385 7.03125 11.7188 7.375C11.6042 7.71354 11.5469 8.07292 11.5469 8.45312ZM25.0156 4.54688H26.3281V12.8203C26.3281 13.5651 26.1771 14.2005 25.875 14.7266C25.5729 15.2526 25.151 15.651 24.6094 15.9219C24.0729 16.1979 23.4531 16.3359 22.75 16.3359C22.4583 16.3359 22.1146 16.2891 21.7188 16.1953C21.3281 16.1068 20.9427 15.9531 20.5625 15.7344C20.1875 15.5208 19.8724 15.2318 19.6172 14.8672L20.375 14.0078C20.7292 14.4349 21.099 14.7318 21.4844 14.8984C21.875 15.0651 22.2604 15.1484 22.6406 15.1484C23.099 15.1484 23.4948 15.0625 23.8281 14.8906C24.1615 14.7188 24.4193 14.4635 24.6016 14.125C24.7891 13.7917 24.8828 13.3802 24.8828 12.8906V6.40625L25.0156 4.54688ZM19.1953 8.86719V8.70312C19.1953 8.05729 19.2708 7.47135 19.4219 6.94531C19.5781 6.41406 19.7995 5.95833 20.0859 5.57812C20.3776 5.19792 20.7292 4.90625 21.1406 4.70312C21.5521 4.49479 22.0156 4.39062 22.5312 4.39062C23.0625 4.39062 23.526 4.48438 23.9219 4.67188C24.3229 4.85417 24.6615 5.1224 24.9375 5.47656C25.2188 5.82552 25.4401 6.2474 25.6016 6.74219C25.763 7.23698 25.875 7.79688 25.9375 8.42188V9.14062C25.8802 9.76042 25.7682 10.3177 25.6016 10.8125C25.4401 11.3073 25.2188 11.7292 24.9375 12.0781C24.6615 12.4271 24.3229 12.6953 23.9219 12.8828C23.5208 13.0651 23.0521 13.1562 22.5156 13.1562C22.0104 13.1562 21.5521 13.0495 21.1406 12.8359C20.7344 12.6224 20.3854 12.3229 20.0938 11.9375C19.8021 11.5521 19.5781 11.099 19.4219 10.5781C19.2708 10.0521 19.1953 9.48177 19.1953 8.86719ZM20.6406 8.70312V8.86719C20.6406 9.28906 20.6823 9.6849 20.7656 10.0547C20.8542 10.4245 20.987 10.75 21.1641 11.0312C21.3464 11.3125 21.5781 11.5339 21.8594 11.6953C22.1406 11.8516 22.4766 11.9297 22.8672 11.9297C23.3464 11.9297 23.7422 11.8281 24.0547 11.625C24.3672 11.4219 24.6146 11.1536 24.7969 10.8203C24.9844 10.487 25.1302 10.125 25.2344 9.73438V7.85156C25.1771 7.5651 25.0885 7.28906 24.9688 7.02344C24.8542 6.7526 24.7031 6.51302 24.5156 6.30469C24.3333 6.09115 24.1068 5.92188 23.8359 5.79688C23.5651 5.67188 23.2474 5.60938 22.8828 5.60938C22.487 5.60938 22.1458 5.69271 21.8594 5.85938C21.5781 6.02083 21.3464 6.24479 21.1641 6.53125C20.987 6.8125 20.8542 7.14062 20.7656 7.51562C20.6823 7.88542 20.6406 8.28125 20.6406 8.70312ZM30.3438 1V13H28.8906V1H30.3438ZM34.4844 4.54688V13H33.0312V4.54688H34.4844ZM32.9219 2.30469C32.9219 2.07031 32.9922 1.8724 33.1328 1.71094C33.2786 1.54948 33.4922 1.46875 33.7734 1.46875C34.0495 1.46875 34.2604 1.54948 34.4062 1.71094C34.5573 1.8724 34.6328 2.07031 34.6328 2.30469C34.6328 2.52865 34.5573 2.72135 34.4062 2.88281C34.2604 3.03906 34.0495 3.11719 33.7734 3.11719C33.4922 3.11719 33.2786 3.03906 33.1328 2.88281C32.9922 2.72135 32.9219 2.52865 32.9219 2.30469ZM41.9766 10.7578C41.9766 10.5495 41.9297 10.3568 41.8359 10.1797C41.7474 9.9974 41.5625 9.83333 41.2812 9.6875C41.0052 9.53646 40.5885 9.40625 40.0312 9.29688C39.5625 9.19792 39.138 9.08073 38.7578 8.94531C38.3828 8.8099 38.0625 8.64583 37.7969 8.45312C37.5365 8.26042 37.3359 8.03385 37.1953 7.77344C37.0547 7.51302 36.9844 7.20833 36.9844 6.85938C36.9844 6.52604 37.0573 6.21094 37.2031 5.91406C37.3542 5.61719 37.5651 5.35417 37.8359 5.125C38.112 4.89583 38.4427 4.71615 38.8281 4.58594C39.2135 4.45573 39.6432 4.39062 40.1172 4.39062C40.7943 4.39062 41.3724 4.51042 41.8516 4.75C42.3307 4.98958 42.6979 5.3099 42.9531 5.71094C43.2083 6.10677 43.3359 6.54688 43.3359 7.03125H41.8906C41.8906 6.79688 41.8203 6.57031 41.6797 6.35156C41.5443 6.1276 41.3438 5.94271 41.0781 5.79688C40.8177 5.65104 40.4974 5.57812 40.1172 5.57812C39.7161 5.57812 39.3906 5.64062 39.1406 5.76562C38.8958 5.88542 38.7161 6.03906 38.6016 6.22656C38.4922 6.41406 38.4375 6.61198 38.4375 6.82031C38.4375 6.97656 38.4635 7.11719 38.5156 7.24219C38.5729 7.36198 38.6719 7.47396 38.8125 7.57812C38.9531 7.67708 39.151 7.77083 39.4062 7.85938C39.6615 7.94792 39.987 8.03646 40.3828 8.125C41.0755 8.28125 41.6458 8.46875 42.0938 8.6875C42.5417 8.90625 42.875 9.17448 43.0938 9.49219C43.3125 9.8099 43.4219 10.1953 43.4219 10.6484C43.4219 11.0182 43.3438 11.3568 43.1875 11.6641C43.0365 11.9714 42.8151 12.237 42.5234 12.4609C42.237 12.6797 41.8932 12.8516 41.4922 12.9766C41.0964 13.0964 40.651 13.1562 40.1562 13.1562C39.4115 13.1562 38.7812 13.0234 38.2656 12.7578C37.75 12.4922 37.3594 12.1484 37.0938 11.7266C36.8281 11.3047 36.6953 10.8594 36.6953 10.3906H38.1484C38.1693 10.7865 38.2839 11.1016 38.4922 11.3359C38.7005 11.5651 38.9557 11.7292 39.2578 11.8281C39.5599 11.9219 39.8594 11.9688 40.1562 11.9688C40.5521 11.9688 40.8828 11.9167 41.1484 11.8125C41.4193 11.7083 41.625 11.5651 41.7656 11.3828C41.9062 11.2005 41.9766 10.9922 41.9766 10.7578ZM47.0156 1V13H45.5703V1H47.0156ZM46.6719 8.45312L46.0703 8.42969C46.0755 7.85156 46.1615 7.31771 46.3281 6.82812C46.4948 6.33333 46.7292 5.90365 47.0312 5.53906C47.3333 5.17448 47.6927 4.89323 48.1094 4.69531C48.5312 4.49219 48.9974 4.39062 49.5078 4.39062C49.9245 4.39062 50.2995 4.44792 50.6328 4.5625C50.9661 4.67188 51.25 4.84896 51.4844 5.09375C51.724 5.33854 51.9062 5.65625 52.0312 6.04688C52.1562 6.43229 52.2188 6.90365 52.2188 7.46094V13H50.7656V7.44531C50.7656 7.0026 50.7005 6.64844 50.5703 6.38281C50.4401 6.11198 50.25 5.91667 50 5.79688C49.75 5.67188 49.4427 5.60938 49.0781 5.60938C48.7188 5.60938 48.3906 5.6849 48.0938 5.83594C47.8021 5.98698 47.5495 6.19531 47.3359 6.46094C47.1276 6.72656 46.9635 7.03125 46.8438 7.375C46.7292 7.71354 46.6719 8.07292 46.6719 8.45312Z" fill="#B1B1B1" />
                            <path d="M73.458 5.83301L67.4997 11.7913L61.5413 5.83301" stroke="#B1B1B1" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>`
                        }></SvgXml>
                    </View>

                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    mainContentContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    titleText: {
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 32,
        color: Colors.primary900,
    },
    searchResultsTitle: {
        color: Colors.primary900,
        paddingTop: 26,
        borderBottomWidth: 1,
        fontSize: 16,
        lineHeight: 32,
        fontWeight: '400',
        borderBottomColor: Colors.settings_separatorLine,
    },
    saveFiltersSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 20,
    },
    saveFiltersTextsContainer: {
        flexDirection: 'column',
        gap: 8,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        color: '#1F2937',
    },
    smallGap: {
        gap: 16,
    },
    subText: {
        color: '#9E9E9E',
    },
    bottomSection: {
        paddingTop: 20,
        gap: 30,
    },
    notificationsSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default SettingsScreen;