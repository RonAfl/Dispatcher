import { StyleSheet, Text, View } from "react-native";
import notificationMessage from "../../../../assets/svgxml/notificationMessage";
import msgArrow from "../../../../assets/svgxml/notificationMsgArrow";
import { ConstantText } from "../../../../utils/const/constantTexts/ConstantText";

const NotificationMsg = ({isNew}:{isNew:boolean}) => {
    const containerStyle = isNew ? styles.newContainer : styles.container;

    return (
        <View style={containerStyle}>
            {notificationMessage(isNew)}
            <Text style={styles.msg}>{ConstantText.NOTIFICATION_MSG}</Text>
            {msgArrow()}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:8,
        paddingLeft:16,
        paddingVertical:16,
        paddingRight:24,
        backgroundColor: '#F0EEF9',
    },
    newContainer:{
        flexDirection: 'row',
        alignItems:'center',
        gap: 8,
        paddingLeft:16,
        paddingVertical:16,
        paddingRight:24,
        backgroundColor: '#FAFAFA',
    },
    msg:{
        paddingRight:55,
    }
})

export default NotificationMsg;