import { SvgXml } from "react-native-svg";

export const searchIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.1665 16.667C13.3086 16.667 16.6665 13.3091 16.6665 9.16699C16.6665 5.02486 13.3086 1.66699 9.1665 1.66699C5.02437 1.66699 1.6665 5.02486 1.6665 9.16699C1.6665 13.3091 5.02437 16.667 9.1665 16.667Z" stroke="#B6B6EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3333 18.3333L15 15" stroke="#B6B6EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const notificationsOffIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.91719 11.4891V11.3066C2.94396 10.7667 3.117 10.2436 3.41847 9.79118C3.92026 9.24772 4.26376 8.58176 4.41293 7.86315C4.41293 7.30776 4.41293 6.74442 4.46144 6.18903C4.71208 3.51518 7.3559 1.6665 9.96738 1.6665H10.0321C12.6435 1.6665 15.2874 3.51518 15.5461 6.18903C15.5946 6.74442 15.5461 7.30776 15.5865 7.86315C15.7377 8.58343 16.0809 9.25146 16.581 9.79911C16.8847 10.2475 17.058 10.7687 17.0823 11.3066V11.4812C17.1003 12.2065 16.8505 12.9139 16.3789 13.4727C15.7556 14.1261 14.9099 14.5326 14.0018 14.6152C11.339 14.9008 8.65237 14.9008 5.98952 14.6152C5.08246 14.529 4.23797 14.1231 3.61251 13.4727C3.14817 12.9134 2.9017 12.2103 2.91719 11.4891Z" stroke="#B6B6EA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.9624 17.3765C8.37846 17.8987 8.98945 18.2367 9.66015 18.3156C10.3308 18.3945 11.0059 18.2079 11.536 17.797C11.699 17.6755 11.8457 17.5342 11.9726 17.3765" stroke="#B6B6EA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const notificationsOnIcon = `<svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.91719 14.4891V14.3066C2.94396 13.7667 3.117 13.2436 3.41847 12.7912C3.92026 12.2477 4.26376 11.5818 4.41293 10.8632C4.41293 10.3078 4.41293 9.74442 4.46144 9.18903C4.71208 6.51518 7.3559 4.6665 9.96738 4.6665H10.0321C12.6435 4.6665 15.2874 6.51518 15.5461 9.18903C15.5946 9.74442 15.5461 10.3078 15.5865 10.8632C15.7377 11.5834 16.0809 12.2515 16.581 12.7991C16.8847 13.2475 17.058 13.7687 17.0823 14.3066V14.4812C17.1003 15.2065 16.8505 15.9139 16.3789 16.4727C15.7556 17.1261 14.9099 17.5326 14.0018 17.6152C11.339 17.9008 8.65237 17.9008 5.98952 17.6152C5.08246 17.529 4.23797 17.1231 3.61251 16.4727C3.14817 15.9134 2.9017 15.2103 2.91719 14.4891Z" stroke="#B6B6EA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.9624 20.3765C8.37846 20.8987 8.98945 21.2367 9.66015 21.3156C10.3308 21.3945 11.0059 21.2079 11.536 20.797C11.699 20.6755 11.8457 20.5342 11.9726 20.3765" stroke="#B6B6EA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="16" cy="5" r="4.5" fill="#FD5959" stroke="#272146"/>
</svg>
`
export const getSearchIcon = () => {
    return (
        <SvgXml xml={searchIcon}/>
    )
}

const getHeaderIcon = (isNotificationOn:boolean) => {
    return (
        <SvgXml xml={isNotificationOn? notificationsOnIcon : notificationsOffIcon}/>
    )
}

export default getHeaderIcon;
