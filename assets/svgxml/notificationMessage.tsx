import { SvgXml } from "react-native-svg";

const newMsg = `<svg width="6" height="37" viewBox="0 0 6 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="6" height="36" rx="3" fill="#5858A6"/>
</svg>
`;

const oldMsg = `<svg width="6" height="37" viewBox="0 0 6 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="6" height="36" rx="3" fill="#878787"/>
</svg>
`;

const notificationMessage = (isNew:boolean) => {
    return (
        <SvgXml xml={isNew ? newMsg : oldMsg}></SvgXml>
    )
}

export default notificationMessage;