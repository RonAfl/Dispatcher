import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import getProfile from "../../../../../../assets/svgxml/profilePicture";
import Colors from "../../../../../../utils/const/colors/Colors";
import auth from '@react-native-firebase/auth';
import { ConstantText } from "../../../../../../utils/const/constantTexts/ConstantText";
import { useDispatch, useSelector } from "react-redux";
import { editProfileClicked, setNameAndEmailWhenApproved } from "../../../../../../redux/slices/profileSlice";

const ProfilePage = () => {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [namePlaceholder, setNamePlaceholder] = useState('');
    const [emailPlaceholder, setEmailPlaceholder] = useState('');
    

    const dispatch = useDispatch();
    const currentUser = auth().currentUser;
    const editingProfile = useSelector(state => state.profile.editingProfile);

    useEffect(() => {
        setName(currentUser?.displayName || '');
        setEmail(currentUser?.email || '');
        setNamePlaceholder(currentUser?.displayName || '');
        setEmailPlaceholder(currentUser?.email || '');
    }, []);

    useEffect(()=>{
        setNamePlaceholder(currentUser?.displayName || '');
        setEmailPlaceholder(currentUser?.email || '');
        
        if(editingProfile===true){
            setEditing(true);
        }
        else setEditing(false);
        
    },[editingProfile]);

    useEffect(()=>{
        dispatch(setNameAndEmailWhenApproved({name,email}));
    },[ name || email ]);

    const handlePictureSelection = () => {
        
    }
   


    const HandleEditProfilePressed = () => {
        dispatch(editProfileClicked());
        setNamePlaceholder(name);
        setEmailPlaceholder(email);
    }

    // const onSaveName = (newName: string) => {
    //     setName(newName);
    //     setNamePlaceholder(newName);
    //     currentUser?.updateProfile({
    //         displayName: newName,
    //     }).catch(err=>{
    //         console.log(err);
                
    //     })
    // }

    // const onSaveEmail = (newEmail: string) => {
    //     currentUser?.updateEmail(newEmail).then((res)=>{
    //         setEmail(newEmail);
    //         setEmailPlaceholder(newEmail);
    //         console.log(res);
    //     }).catch((err)=>{
    //         if(err.code===ConstantText.EMAIL_IN_USE){
    //             Alert.alert(ConstantText.EMAIL_IN_USE_ERR_MSG);
    //         }
    //     })
    // }




    return (
        <View style={styles.container}>
            {!editingProfile && <View style={styles.topSection}>
                <Text style={styles.myProfileTitle}>
                    {ConstantText.PROFILE_TITLE}
                    </Text>
                <Pressable style={styles.editProfileBox} onPress={HandleEditProfilePressed}>
                    <Text style={styles.editProfileBoxText}>
                    {ConstantText.PROFILE_EDIT}
                    </Text>
                </Pressable>
            </View>}
            <View style={styles.middleSection}>
                {/* false for small icon - true for big icon */}

                {getProfile(true)}
                {editingProfile && 
                <Pressable onPress={handlePictureSelection}>
                <Text style={styles.changeProfilePictureText}>
                    Change profile picture
                </Text>
                </Pressable>}


            </View>
            <View style={styles.bottomSection}>
                <View style={styles.nameSectionContainer}>
                    <Text style={styles.nameLabel}>{ConstantText.PROFILE_INPUT_LABEL_NAME}</Text>
                    <View style={styles.nameSection}>
                        <TextInput
                            style={styles.textInput}
                            value={editing ? name : namePlaceholder}
                            placeholder={namePlaceholder}
                            onChangeText={setName}
                          //  onSubmitEditing={() => onSaveName(name)}
                            editable={editing} />

                    </View>
                </View>

                <View style={styles.nameSectionContainer}>
                    <Text style={styles.nameLabel}>{ConstantText.PROFILE_INPUT_LABEL_EMAIL}</Text>
                    <View style={styles.nameSection}>
                        <TextInput
                            style={styles.textInput}
                            value={editing ? email : emailPlaceholder}
                            placeholder={emailPlaceholder}
                            onChangeText={setEmail}
                          //  onSubmitEditing={() => onSaveEmail(email)}
                            editable={editing} />

                    </View>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingBottom: 600,

    },
    topSection: {
        paddingHorizontal: 16,
        paddingTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    myProfileTitle: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 32,
        color: Colors.primary900,
    },
    editProfileBox: {
        backgroundColor: '#D9DBE9',
        paddingVertical: 4,
        paddingHorizontal: 6,
    },
    editProfileBoxText: {
        color: '#5A5A89',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 22,
    },
    middleSection: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    bottomSection: {
        marginTop: 44,
        marginHorizontal: 16,
        gap: 15,

    },
    textInput: {
        paddingHorizontal:16,
        paddingVertical:11,
        justifyContent:'center',
        textAlign: 'left',
        paddingTop: 10,
        paddingBottom: 10,

    },
    nameSectionContainer: {
        gap: 5,
    },
    nameSection: {
        borderColor: '#D9DBE9',
        borderWidth: 1,
        borderRadius: 4,
        height: 44,
    },
    nameLabel: {
        color: Colors.primary900,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 32,
        paddingLeft: 8,
    },
    changeProfilePictureText:{
        fontWeight:'700',
        fontSize:16,
        lineHeight:32,
        color:Colors.primary900,
        paddingTop:10,
    },

})


export default ProfilePage;