import { SvgXml } from "react-native-svg";

const toggleOff = `<svg width="53" height="28" viewBox="0 0 53 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="53" height="28" rx="14" fill="#D1D5DB"/>
<rect x="2.5" y="2.5" width="23" height="23" rx="11.5" fill="white" stroke="white"/>
</svg>
`;

const toggleOn = `<svg width="53" height="28" viewBox="0 0 53 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="53" height="28" rx="14" fill="#116ACC"/>
<rect x="27" y="2" width="24" height="24" rx="12" fill="white"/>
</svg>
`;

const getToggle = (isOn: boolean) => {
    
    return (
            <SvgXml xml={isOn ? toggleOn : toggleOff}></SvgXml>
    )
}

export default getToggle;