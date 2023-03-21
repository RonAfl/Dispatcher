import { SvgXml } from "react-native-svg";

const dropdown = `<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3335 5.33301L9.00016 12.6663L1.66683 5.33301" stroke="#5A5A89" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const sortDropDown = () => {
    return (
        <SvgXml xml={dropdown}></SvgXml>
    )
}


export default sortDropDown;