import React from "react";
import { View, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";
import Colors from "../../../const/colors/Colors";
import { Screen } from "../../Screens/Screens";


interface IconProps {
    iconName: string,
    style: ViewStyle,
    focused: boolean,
}

const Icon = (props: IconProps) => {
    let icon: string;

    switch (props.iconName) {
        case Screen.HOME_PAGE:
            icon = `
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.7978 2.20882C13.1227 1.90163 13.5529 1.73047 14 1.73047C14.4471 1.73047 14.8773 1.90163 15.2023 2.20882L23.6793 10.2221C24.2043 10.7173 24.5 11.4086 24.5 12.1296V21.8771C24.5 22.5733 24.2234 23.2409 23.7312 23.7332C23.2389 24.2255 22.5712 24.5021 21.875 24.5021H18.375C18.0301 24.5021 17.6886 24.4341 17.3701 24.3021C17.0515 24.1701 16.762 23.9765 16.5182 23.7326C16.2744 23.4887 16.0811 23.1991 15.9493 22.8804C15.8175 22.5617 15.7498 22.2202 15.75 21.8753V17.5003C15.75 17.2683 15.6578 17.0457 15.4937 16.8816C15.3296 16.7175 15.1071 16.6253 14.875 16.6253H13.125C12.8929 16.6253 12.6704 16.7175 12.5063 16.8816C12.3422 17.0457 12.25 17.2683 12.25 17.5003V21.8753C12.25 22.5715 11.9734 23.2392 11.4812 23.7315C10.9889 24.2238 10.3212 24.5003 9.625 24.5003H6.125C5.42881 24.5003 4.76113 24.2238 4.26884 23.7315C3.77656 23.2392 3.5 22.5715 3.5 21.8753V12.1278C3.5 11.4068 3.7975 10.7156 4.3225 10.2203L12.7978 2.20532V2.20882ZM14 3.47932L5.523 11.4943C5.43694 11.5759 5.36837 11.6741 5.32144 11.783C5.27451 11.8919 5.2502 12.0092 5.25 12.1278V21.8753C5.25 22.1074 5.34219 22.3299 5.50628 22.494C5.67038 22.6581 5.89294 22.7503 6.125 22.7503H9.625C9.85706 22.7503 10.0796 22.6581 10.2437 22.494C10.4078 22.3299 10.5 22.1074 10.5 21.8753V17.5003C10.5 16.8041 10.7766 16.1364 11.2688 15.6442C11.7611 15.1519 12.4288 14.8753 13.125 14.8753H14.875C15.5712 14.8753 16.2389 15.1519 16.7312 15.6442C17.2234 16.1364 17.5 16.8041 17.5 17.5003V21.8753C17.5 22.1074 17.5922 22.3299 17.7563 22.494C17.9204 22.6581 18.1429 22.7503 18.375 22.7503H21.875C22.1071 22.7503 22.3296 22.6581 22.4937 22.494C22.6578 22.3299 22.75 22.1074 22.75 21.8753V12.1278C22.75 12.0089 22.7258 11.8913 22.6789 11.7821C22.632 11.6729 22.5633 11.5744 22.477 11.4926L14 3.47932Z" fill="#B6B6EA"/>
          </svg>
          
          `;
            break;
        case Screen.PROFILE_PAGE:
            icon = `
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 14C15.3924 14 16.7277 13.4469 17.7123 12.4623C18.6969 11.4777 19.25 10.1424 19.25 8.75C19.25 7.35761 18.6969 6.02226 17.7123 5.03769C16.7277 4.05312 15.3924 3.5 14 3.5C12.6076 3.5 11.2723 4.05312 10.2877 5.03769C9.30312 6.02226 8.75 7.35761 8.75 8.75C8.75 10.1424 9.30312 11.4777 10.2877 12.4623C11.2723 13.4469 12.6076 14 14 14V14ZM17.5 8.75C17.5 9.67826 17.1313 10.5685 16.4749 11.2249C15.8185 11.8813 14.9283 12.25 14 12.25C13.0717 12.25 12.1815 11.8813 11.5251 11.2249C10.8687 10.5685 10.5 9.67826 10.5 8.75C10.5 7.82174 10.8687 6.9315 11.5251 6.27513C12.1815 5.61875 13.0717 5.25 14 5.25C14.9283 5.25 15.8185 5.61875 16.4749 6.27513C17.1313 6.9315 17.5 7.82174 17.5 8.75V8.75ZM24.5 22.75C24.5 24.5 22.75 24.5 22.75 24.5H5.25C5.25 24.5 3.5 24.5 3.5 22.75C3.5 21 5.25 15.75 14 15.75C22.75 15.75 24.5 21 24.5 22.75ZM22.75 22.743C22.7482 22.3125 22.4805 21.0175 21.294 19.831C20.153 18.69 18.0058 17.5 14 17.5C9.9925 17.5 7.847 18.69 6.706 19.831C5.5195 21.0175 5.2535 22.3125 5.25 22.743H22.75Z" fill="#B6B6EA"/>
          </svg>
          `;
            break;
        case Screen.FAV_PAGE:
            icon = `
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9195 3.07151C13.2928 2.08684 14.7057 2.08684 15.0802 3.07151L17.4952 9.76117C17.6643 10.2045 18.0948 10.4997 18.5755 10.4997H24.5103C25.607 10.4997 26.0853 11.8647 25.2232 12.5332L20.9998 16.333C20.8107 16.4784 20.6724 16.6801 20.6049 16.9089C20.5374 17.1378 20.5442 17.3822 20.6242 17.607L22.1665 24.1438C22.5422 25.1938 21.3265 26.0957 20.4072 25.4493L14.6707 21.8093C14.4742 21.6713 14.24 21.5972 13.9998 21.5972C13.7597 21.5972 13.5255 21.6713 13.329 21.8093L7.59251 25.4493C6.67434 26.0957 5.45751 25.1927 5.83318 24.1438L7.37551 17.607C7.45552 17.3822 7.46226 17.1378 7.39477 16.9089C7.32728 16.6801 7.18903 16.4784 6.99984 16.333L2.77651 12.5332C1.91318 11.8647 2.39385 10.4997 3.48818 10.4997H9.42301C9.65668 10.5005 9.88509 10.4303 10.078 10.2984C10.2709 10.1665 10.4192 9.97919 10.5033 9.76117L12.9183 3.07151H12.9195Z" stroke="#B6B6EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
          `;
            break;
        default:
            icon = "";
    }



    const viewFocus: ViewStyle = {
        borderBottomWidth: 2,
        paddingBottom: 5,
        borderBottomColor: Colors.white,
        
    }

    return (
        <View style={[props.style, props.focused && viewFocus]}>
            <SvgXml xml={icon} />
        </View>
    )
}

export default Icon;