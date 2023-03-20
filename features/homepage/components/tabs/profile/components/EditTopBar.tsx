import React from "react";
import { StyleSheet, View, Pressable } from 'react-native';
import { getApproveIcon, getCancalIcon } from "../../../../../../assets/svgxml/topBarIcons";
import Colors from "../../../../../../utils/const/colors/Colors";
import { useDispatch } from "react-redux";
import { cancelEditProfileClicked, setConfirm } from "../../../../../../redux/slices/profileSlice";

const EditTopBar = () => {
    const disptach = useDispatch();

    const onCancelPressed = () => {
        disptach(cancelEditProfileClicked());
    }

    const onApprovePressed = () => {
        disptach(setConfirm());
        disptach(cancelEditProfileClicked());
    }



    return (
        <View style={styles.container}>
            <Pressable style={styles.cancel} onPress={onCancelPressed}>
                {getCancalIcon}

            </Pressable>
            <Pressable style={styles.approve} onPress={onApprovePressed}>
                {getApproveIcon()}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary900,
        paddingHorizontal: 16,
        paddingVertical: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancel: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    approve: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    backText: {
        color: Colors.prof_backText,
        fontSize: 16,
    }
})

export default EditTopBar;