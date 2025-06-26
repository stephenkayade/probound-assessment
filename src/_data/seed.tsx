import { onboardType } from "../utils/enums.util";
import { IToast } from "../utils/interfaces.util";

const toast: IToast = {
    type: 'success',
    show: false,
    message: '',
    title: 'Feedback',
    position: 'top-right',
    close: () => { }
}

const onboard = {
    stepBg: '#ECD4E8',
    stepActive: '#45C2F0',
    purple: { color: '#420988', bg: '#F4EBFF', active: '#6A08E2' },
    blue: { color: '#055286', bg: '#EBF7FF', active: '#0B80CF' },
    green: { color: '#055609', bg: '#EBFFEC', active: '#1FAE27' },
    yellow: { color: '#8B5C07', bg: '#FFF8EB', active: '#E0970F' },
    red: { color: '#B80606', bg: '#FFEBEB', active: '#FF3030' },
    pink: { color: '#C620AB', bg: '#FFECFC', active: '#EA04C4' }
}

const sideTabs = [
    { icon: 'building', title: 'Organization Information', desc: 'Provide your company', stage: onboardType.INFO },
    { icon: 'map', title: 'Organization Address', desc: 'Start collaborating with your team', stage: onboardType.ADDRESS },
    { icon: 'users', title: 'Invite a team member', desc: 'Start collaborating with your team', stage: onboardType.MEMBER },
    { icon: 'check', title: 'Success', desc: 'You have successfully onboarded your business', stage: onboardType.SUCCESS },
]

const orgSize = [
    { name: '< 100', value: '< 100' },
    { name: '100 - 500', value: '100 - 500' },
    { name: '500 - 10,000', value: '500 - 10,000' },
    { name: '> 10,000', value: '> 10,000' },
]

const roles = [
    { name: 'Make Outbound Calls', value: 'Make Outbound Calls' },
    { name: 'Handle Calls', value: 'Handle Calls' },
    { name: 'Lead Generation', value: 'Lead Generation' },
    { name: 'Appointment Booking (multiple checklist)', value: 'Appointment Booking (multiple checklist)' },
]

const calenderSystem = [
    { name: 'Google Calendar', value: 'Google Calendar' },
    { name: 'Zoho Calendar', value: 'Zoho Calendar' }
]

const crm = [
    { name: 'Hubspot', value: 'Hubspot' },
    { name: 'Salesforce', value: 'Salesforce' },
    { name: 'Freshbooks', value: 'Freshbooks' },
    { name: 'Monday', value: 'Monday' },
]

const phoneProvider = [
    { name: 'VoIP', value: 'VoIP' },
    { name: 'Cell Phone', value: 'Cell Phone' },
]

const communicationTool = [
    { name: 'Slack', value: 'Slack' },
    { name: 'Discord', value: 'Discord' },
    { name: 'WhatsApp', value: 'WhatsApp' },
]

const timezones = [
    { name: "International Date Line West", value: "Etc/GMT+12" },
    { name: "Coordinated Universal Time-11", value: "Etc/GMT+11" },
    { name: "Hawaii", value: "Pacific/Honolulu" },
    { name: "Alaska", value: "America/Anchorage" },
    { name: "Pacific Time (US & Canada)", value: "America/Los_Angeles" },
    { name: "Mountain Time (US & Canada)", value: "America/Denver" },
    { name: "Central Time (US & Canada)", value: "America/Chicago" },
    { name: "Eastern Time (US & Canada)", value: "America/New_York" },
    { name: "Atlantic Time (Canada)", value: "America/Halifax" },
    { name: "Newfoundland", value: "America/St_Johns" },
    { name: "Greenland", value: "America/Godthab" },
    { name: "Buenos Aires", value: "America/Argentina/Buenos_Aires" },
    { name: "Brasilia", value: "America/Sao_Paulo" },
    { name: "Azores", value: "Atlantic/Azores" },
    { name: "Cape Verde", value: "Atlantic/Cape_Verde" },
    { name: "UTC", value: "Etc/UTC" },
    { name: "Dublin, Edinburgh, Lisbon, London", value: "Europe/London" },
    { name: "Amsterdam, Berlin, Rome, Paris", value: "Europe/Berlin" },
    { name: "Athens, Bucharest, Istanbul", value: "Europe/Istanbul" },
    { name: "Moscow, St. Petersburg, Volgograd", value: "Europe/Moscow" },
    { name: "Abu Dhabi, Muscat", value: "Asia/Dubai" },
    { name: "Kabul", value: "Asia/Kabul" },
    { name: "Islamabad, Karachi", value: "Asia/Karachi" },
    { name: "Calcutta, Chennai, Mumbai, New Delhi", value: "Asia/Kolkata" },
    { name: "Kathmandu", value: "Asia/Kathmandu" },
    { name: "Dhaka", value: "Asia/Dhaka" },
    { name: "Yangon (Rangoon)", value: "Asia/Yangon" },
    { name: "Bangkok, Hanoi, Jakarta", value: "Asia/Bangkok" },
    { name: "Beijing, Chongqing, Hong Kong", value: "Asia/Shanghai" },
    { name: "Tokyo, Osaka, Sapporo", value: "Asia/Tokyo" },
    { name: "Seoul", value: "Asia/Seoul" },
    { name: "Adelaide", value: "Australia/Adelaide" },
    { name: "Sydney, Melbourne, Canberra", value: "Australia/Sydney" },
    { name: "Brisbane", value: "Australia/Brisbane" },
    { name: "Darwin", value: "Australia/Darwin" },
    { name: "Perth", value: "Australia/Perth" },
    { name: "Auckland, Wellington", value: "Pacific/Auckland" },
    { name: "Fiji", value: "Pacific/Fiji" },
    { name: "Magadan, Solomon Islands, New Caledonia", value: "Asia/Magadan" },
    { name: "Tonga", value: "Pacific/Tongatapu" },
    { name: "Nuku'alofa", value: "Pacific/Tongatapu" },
    { name: "Pago Pago", value: "Pacific/Pago_Pago" },
    { name: "Midway Island, Samoa", value: "Pacific/Midway" },
    { name: "Chatham Islands", value: "Pacific/Chatham" },
    { name: "Kamchatka", value: "Asia/Kamchatka" },
    { name: "Yekaterinburg", value: "Asia/Yekaterinburg" },
    { name: "Tbilisi", value: "Asia/Tbilisi" },
    { name: "Tehran", value: "Asia/Tehran" },
    { name: "Baghdad", value: "Asia/Baghdad" },
    { name: "Jerusalem", value: "Asia/Jerusalem" },
    { name: "Cairo", value: "Africa/Cairo" },
    { name: "Nairobi", value: "Africa/Nairobi" },
    { name: "Harare, Pretoria", value: "Africa/Harare" },
    { name: "West Central Africa", value: "Africa/Lagos" },
    { name: "Casablanca", value: "Africa/Casablanca" },
    { name: "Reykjavik", value: "Atlantic/Reykjavik" },
    { name: "Canary Islands", value: "Atlantic/Canary" },
    { name: "Madeira Islands", value: "Atlantic/Madeira" },
    { name: "Kuwait, Riyadh", value: "Asia/Riyadh" },
    { name: "Doha", value: "Asia/Qatar" },
    { name: "Manila", value: "Asia/Manila" },
    { name: "Singapore", value: "Asia/Singapore" },
    { name: "Jakarta", value: "Asia/Jakarta" },
    { name: "Taipei", value: "Asia/Taipei" },
    { name: "Kuala Lumpur", value: "Asia/Kuala_Lumpur" },
    { name: "Hanoi", value: "Asia/Ho_Chi_Minh" },
    { name: "Ulaanbaatar", value: "Asia/Ulaanbaatar" },
    { name: "Colombo", value: "Asia/Colombo" },
    { name: "Thimphu", value: "Asia/Thimphu" },
    { name: "Baku", value: "Asia/Baku" },
    { name: "Yerevan", value: "Asia/Yerevan" },
    { name: "Tashkent", value: "Asia/Tashkent" },
    { name: "Almaty", value: "Asia/Almaty" },
    { name: "Kathmandu", value: "Asia/Kathmandu" },
    { name: "Thimphu", value: "Asia/Thimphu" },
    { name: "Port Moresby", value: "Pacific/Port_Moresby" },
    { name: "Noumea", value: "Pacific/Noumea" },
    { name: "Honiara", value: "Pacific/Guadalcanal" },
    { name: "Apia", value: "Pacific/Apia" },
    { name: "Funafuti", value: "Pacific/Funafuti" },
    { name: "Tarawa", value: "Pacific/Tarawa" },
    { name: "Majuro", value: "Pacific/Majuro" }

]

export {
    toast,
    onboard,
    sideTabs,
    orgSize,
    roles,
    calenderSystem,
    crm,
    phoneProvider,
    communicationTool,
    timezones,
};