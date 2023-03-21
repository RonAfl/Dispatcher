import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { NotificationInterface } from "../../../../../redux/slices/favsSlice";
import { RootState } from "../../../../../redux/store/store";
import Colors from "../../../../../utils/const/colors/Colors";
import { ConstantText } from "../../../../../utils/const/constantTexts/ConstantText";
import NotificationMsg from "./NotificationMsg";
import NotificationsTopBar from "./NotificationsTopBar";

const Notifications = () => {
    const favArticles: NotificationInterface[] = useSelector((state: RootState) => state.favorites.notifications);
    
    const goToArticle = (id: string | undefined) => {
    }

    return (
        <View style={styles.container}>
            <NotificationsTopBar></NotificationsTopBar>
            <Text style={styles.title}>{ConstantText.NOTIFICATIONS}</Text>
            <View style={styles.msgContainer}>
                {favArticles.map((item) => {
                    return (
                        <Pressable key={item.id} onPress={()=>goToArticle(item.id)}>
                            <NotificationMsg isNew={true}></NotificationMsg>
                        </Pressable>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: Colors.primary900,
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 32,
        paddingLeft: 16,
        paddingTop: 12,
    },
    msgContainer: {
        gap: 4,
    }
})

export default Notifications;