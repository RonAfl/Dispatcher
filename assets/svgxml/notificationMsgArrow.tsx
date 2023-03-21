import { SvgXml } from "react-native-svg";

const arrow= `<svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.3335 1.91699L7.91683 6.50033L3.3335 11.0837" stroke="#5A5A89" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const msgArrow = () => {
    return  (
        <SvgXml xml={arrow}></SvgXml>
    )
}

export default msgArrow;