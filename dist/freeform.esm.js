import { Pragma, _p, _e, util } from 'pragmajs';

var styles = "@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;700&family=IBM+Plex+Sans:wght@300;400;700&display=swap);body{background-color:#161616}body h1{font-family:'IBM Plex Mono',monospace;color:whitesmoke;font-size:32px;font-weight:400}.parent{height:100vh;width:70%;margin:auto}.quetion{width:fit-content}.quetion .answers{width:80%;font-family:'IBM Plex Sans',sans-serif;color:whitesmoke}.quetion .answer{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;align-content:stretch;font-size:22px;border-radius:4px;height:fit-content;padding:10px 10px;margin:15px 0;background:#262626;cursor:pointer;transition:all 160ms ease}.quetion .answer:hover{background:#393939}.quetion .answer.selected{background-color:#2b6cce}.quetion .answer .icon>svg{height:18px;margin-right:11px;opacity:.7}.end-message{color:whitesmoke}";
var styles$1 = {
	styles: styles
};

var chess = "<svg width=\"20\" height=\"28\" viewBox=\"0 0 20 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.9999 20.9995H16.8684L17.8319 19.5542C17.9414 19.3899 17.9998 19.1969 17.9999 18.9995V10C17.9999 0.1142 10.0799 0 9.9999 0C9.73477 -3.31412e-08 9.48049 0.105288 9.29297 0.292717C9.10544 0.480145 9.00003 0.73437 8.9999 0.9995L8.9994 2.9995H7.9999C7.79148 2.99932 7.58827 3.06455 7.4189 3.186L0.418897 8.186C0.244841 8.31028 0.115215 8.4871 0.0490525 8.69048C-0.0171099 8.89386 -0.0163229 9.1131 0.0512974 9.316L1.0513 12.316C1.12502 12.5383 1.27464 12.7276 1.47393 12.8508C1.67322 12.9739 1.90947 13.0229 2.1413 12.9893L7.0113 12.2935L3.1518 18.4695C3.04978 18.6327 2.99703 18.8219 2.99988 19.0144C3.00274 19.2068 3.06108 19.3944 3.1679 19.5545L4.1314 20.9995H3.9999C3.20452 21.0004 2.44196 21.3167 1.87954 21.8791C1.31712 22.4416 1.00077 23.2041 0.999897 23.9995V27.9995H19.9999V23.9995C19.999 23.2041 19.6827 22.4416 19.1203 21.8791C18.5578 21.3167 17.7953 21.0004 16.9999 20.9995V20.9995ZM9.848 11.5295C9.94906 11.3679 10.0018 11.1807 10 10.9901C9.99828 10.7995 9.94207 10.6133 9.83803 10.4536C9.73399 10.2939 9.58647 10.1672 9.41283 10.0885C9.2392 10.0098 9.04669 9.98241 8.858 10.0095L2.6842 10.8914L2.1817 9.3836L8.3199 5H9.9989C10.264 5 10.5183 4.89471 10.7058 4.70728C10.8933 4.51986 10.9988 4.26563 10.9989 4.0005L10.9999 2.1284C12.5012 2.4631 15.2166 3.6695 15.8599 7.9995H12.9999V9.9995H15.9999V11.9995H12.9999V13.9995H15.9999V15.9995H12.9999V17.9995H15.9999V18.6968L14.4647 20.9995H6.5347L5.1899 18.9819L9.848 11.5295ZM17.9999 25.9995H2.9999V23.9995C3.00014 23.7344 3.10557 23.4801 3.29305 23.2927C3.48054 23.1052 3.73475 22.9997 3.9999 22.9995H16.9999C17.2651 22.9997 17.5193 23.1051 17.7068 23.2926C17.8943 23.4801 17.9997 23.7343 17.9999 23.9995V25.9995Z\" fill=\"white\"/>\n</svg>\n";
var law = "<svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M28 26H0V28H28V26Z\" fill=\"white\"/>\n<path d=\"M25 8.99957C25.2652 8.99957 25.5196 8.89422 25.7071 8.70668C25.8946 8.51915 26 8.26479 26 7.99957V4.99957C25.9999 4.79406 25.9365 4.59356 25.8184 4.42537C25.7003 4.25717 25.5333 4.12945 25.34 4.05957L14.34 0.0595746C14.1203 -0.0198582 13.8797 -0.0198582 13.66 0.0595746L2.66 4.05957C2.46673 4.12945 2.29968 4.25717 2.18159 4.42537C2.06349 4.59356 2.00009 4.79406 2 4.99957V7.99957C2 8.26479 2.10536 8.51915 2.29289 8.70668C2.48043 8.89422 2.73478 8.99957 3 8.99957H4V21.9996H2V23.9996H26V21.9996H24V8.99957H25ZM4 5.69957L14 2.05957L24 5.69957V6.99957H4V5.69957ZM16 21.9996H12V8.99957H16V21.9996ZM6 8.99957H10V21.9996H6V8.99957ZM22 21.9996H18V8.99957H22V21.9996Z\" fill=\"white\"/>\n</svg>\n";
var comprehension = "<svg width=\"28\" height=\"22\" viewBox=\"0 0 28 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M24 5H17V7H24V5Z\" fill=\"white\"/>\n<path d=\"M24 10H17V12H24V10Z\" fill=\"white\"/>\n<path d=\"M24 15H17V17H24V15Z\" fill=\"white\"/>\n<path d=\"M11 5H4V7H11V5Z\" fill=\"white\"/>\n<path d=\"M11 10H4V12H11V10Z\" fill=\"white\"/>\n<path d=\"M11 15H4V17H11V15Z\" fill=\"white\"/>\n<path d=\"M26 0H2C1.46973 0.000529477 0.961329 0.211413 0.586371 0.586371C0.211413 0.961329 0.000529477 1.46973 0 2V20C0.000529477 20.5303 0.211413 21.0387 0.586371 21.4136C0.961329 21.7886 1.46973 21.9995 2 22H26C26.5303 21.9995 27.0387 21.7886 27.4136 21.4136C27.7886 21.0387 27.9995 20.5303 28 20V2C27.9995 1.46973 27.7886 0.961329 27.4136 0.586371C27.0387 0.211413 26.5303 0.000529477 26 0ZM2 2H13V20H2V2ZM15 20V2H26V20H15Z\" fill=\"white\"/>\n</svg>\n";
var bigbrain = "<svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M28 11C28 9.55546 27.7155 8.12506 27.1627 6.79048C26.6099 5.4559 25.7996 4.24327 24.7782 3.22183C23.7567 2.20038 22.5441 1.39013 21.2095 0.837325C19.8749 0.284523 18.4445 0 17 0H9C6.61305 0 4.32387 0.948211 2.63604 2.63604C0.948211 4.32387 0 6.61305 0 9V12C0 13.3261 0.526784 14.5979 1.46447 15.5355C2.40215 16.4732 3.67392 17 5 17H6.1C6.33053 18.1294 6.94418 19.1444 7.8371 19.8733C8.73001 20.6022 9.84735 21.0002 11 21H12.38L16.38 28L18.11 27L14.11 20.11C13.9491 19.7857 13.7032 19.5112 13.3985 19.3157C13.0938 19.1203 12.7418 19.0111 12.38 19H11C10.2044 19 9.44129 18.6839 8.87868 18.1213C8.31607 17.5587 8 16.7956 8 16C8 15.2044 8.31607 14.4413 8.87868 13.8787C9.44129 13.3161 10.2044 13 11 13H12V11H11C9.84735 10.9998 8.73001 11.3978 7.8371 12.1267C6.94418 12.8556 6.33053 13.8706 6.1 15H5C4.20435 15 3.44129 14.6839 2.87868 14.1213C2.31607 13.5587 2 12.7956 2 12V10H4C4.79565 10 5.55871 9.68393 6.12132 9.12132C6.68393 8.55871 7 7.79565 7 7V6H5V7C5 7.26522 4.89464 7.51957 4.70711 7.70711C4.51957 7.89464 4.26522 8 4 8H2.08C2.32026 6.3354 3.15181 4.81295 4.42253 3.71118C5.69324 2.60941 7.31815 2.00197 9 2H15V4C15 4.26522 14.8946 4.51957 14.7071 4.70711C14.5196 4.89464 14.2652 5 14 5H12V7H14C14.7956 7 15.5587 6.68393 16.1213 6.12132C16.6839 5.55871 17 4.79565 17 4V2C18.6741 2.00228 20.3143 2.47142 21.7364 3.3547C23.1584 4.23797 24.306 5.50037 25.05 7H24C23.2044 7 22.4413 7.31607 21.8787 7.87868C21.3161 8.44129 21 9.20435 21 10V11H23V10C23 9.73478 23.1054 9.48043 23.2929 9.29289C23.4804 9.10536 23.7348 9 24 9H25.77C25.9233 9.65561 26.0004 10.3267 26 11V12C26 13.3261 25.4732 14.5979 24.5355 15.5355C23.5979 16.4732 22.3261 17 21 17H18V19H21C22.038 18.9986 23.0628 18.7663 24 18.32V19C24 19.7956 23.6839 20.5587 23.1213 21.1213C22.5587 21.6839 21.7956 22 21 22H20V24H21C22.3261 24 23.5979 23.4732 24.5355 22.5355C25.4732 21.5979 26 20.3261 26 19V16.89C27.2798 15.5838 27.9977 13.8287 28 12V11Z\" fill=\"white\"/>\n</svg>\n";
var time = "<svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14 28C11.2311 28 8.52431 27.1789 6.22202 25.6406C3.91973 24.1022 2.12532 21.9157 1.06569 19.3576C0.00606596 16.7994 -0.271181 13.9845 0.269012 11.2687C0.809205 8.55301 2.14258 6.05845 4.10051 4.10051C6.05845 2.14258 8.55301 0.809205 11.2687 0.269012C13.9845 -0.271181 16.7994 0.00606596 19.3576 1.06569C21.9157 2.12532 24.1022 3.91973 25.6406 6.22202C27.1789 8.52431 28 11.2311 28 14C28 17.713 26.525 21.274 23.8995 23.8995C21.274 26.525 17.713 28 14 28ZM14 2.00001C11.6266 2.00001 9.30655 2.70379 7.33316 4.02237C5.35977 5.34095 3.8217 7.21509 2.91345 9.40781C2.0052 11.6005 1.76756 14.0133 2.23058 16.3411C2.69361 18.6689 3.83649 20.8071 5.51472 22.4853C7.19296 24.1635 9.33115 25.3064 11.6589 25.7694C13.9867 26.2325 16.3995 25.9948 18.5922 25.0866C20.7849 24.1783 22.6591 22.6402 23.9776 20.6668C25.2962 18.6935 26 16.3734 26 14C26 10.8174 24.7357 7.76516 22.4853 5.51472C20.2348 3.26429 17.1826 2.00001 14 2.00001Z\" fill=\"white\"/>\n<path d=\"M18.59 20L13 14.41V5H15V13.58L20 18.59L18.59 20Z\" fill=\"white\"/>\n</svg>\n";
var work = "<svg width=\"28\" height=\"24\" viewBox=\"0 0 28 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M26 6H20V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H10C9.46957 0 8.96086 0.210714 8.58579 0.585786C8.21071 0.960859 8 1.46957 8 2V6H2C1.46957 6 0.960859 6.21071 0.585786 6.58579C0.210714 6.96086 0 7.46957 0 8V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H26C26.5304 24 27.0391 23.7893 27.4142 23.4142C27.7893 23.0391 28 22.5304 28 22V8C28 7.46957 27.7893 6.96086 27.4142 6.58579C27.0391 6.21071 26.5304 6 26 6ZM10 2H18V6H10V2ZM2 22V8H26V22H2Z\" fill=\"white\"/>\n</svg>\n";
var focus = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 24C9.62663 24 7.30655 23.2962 5.33316 21.9776C3.35977 20.6591 1.8217 18.7849 0.913451 16.5922C0.00519943 14.3995 -0.232441 11.9867 0.230582 9.65892C0.693605 7.33115 1.83649 5.19295 3.51472 3.51472C5.19295 1.83649 7.33115 0.693605 9.65892 0.230582C11.9867 -0.232441 14.3995 0.00519943 16.5922 0.913451C18.7849 1.8217 20.6591 3.35977 21.9776 5.33316C23.2962 7.30655 24 9.62663 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24ZM12 2.00001C10.0222 2.00001 8.08879 2.58649 6.4443 3.68531C4.79981 4.78412 3.51809 6.34591 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92894C17.1957 3.05357 14.6522 2.00001 12 2.00001Z\" fill=\"white\"/>\n<path d=\"M12 18C10.8133 18 9.65328 17.6481 8.66658 16.9888C7.67989 16.3295 6.91085 15.3925 6.45673 14.2961C6.0026 13.1997 5.88378 11.9933 6.11529 10.8295C6.3468 9.66557 6.91825 8.59648 7.75736 7.75736C8.59648 6.91825 9.66557 6.3468 10.8295 6.11529C11.9933 5.88378 13.1997 6.0026 14.2961 6.45673C15.3925 6.91085 16.3295 7.67989 16.9888 8.66658C17.6481 9.65328 18 10.8133 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM12 8C11.2089 8 10.4355 8.2346 9.77772 8.67412C9.11993 9.11365 8.60723 9.73836 8.30448 10.4693C8.00173 11.2002 7.92252 12.0044 8.07686 12.7804C8.2312 13.5563 8.61216 14.269 9.17158 14.8284C9.73099 15.3878 10.4437 15.7688 11.2196 15.9231C11.9956 16.0775 12.7998 15.9983 13.5307 15.6955C14.2616 15.3928 14.8864 14.8801 15.3259 14.2223C15.7654 13.5645 16 12.7911 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17158C14.0783 8.42143 13.0609 8 12 8Z\" fill=\"white\"/>\n<path d=\"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z\" fill=\"white\"/>\n</svg>\n";
var social = "<svg width=\"30\" height=\"28\" viewBox=\"0 0 30 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M25 12H23V14H25C25.7954 14.0009 26.5579 14.3172 27.1204 14.8796C27.6828 15.4421 27.9991 16.2046 28 17V21H30V17C29.9985 15.6744 29.4712 14.4035 28.5338 13.4662C27.5965 12.5288 26.3256 12.0015 25 12Z\" fill=\"white\"/>\n<path d=\"M23 2C23.5933 2 24.1734 2.17595 24.6667 2.50559C25.1601 2.83524 25.5446 3.30377 25.7716 3.85195C25.9987 4.40013 26.0581 5.00333 25.9424 5.58527C25.8266 6.16721 25.5409 6.70176 25.1213 7.12132C24.7018 7.54088 24.1672 7.8266 23.5853 7.94236C23.0033 8.05811 22.4001 7.9987 21.852 7.77164C21.3038 7.54458 20.8352 7.16006 20.5056 6.66671C20.1759 6.17336 20 5.59334 20 5C20 4.20435 20.3161 3.44129 20.8787 2.87868C21.4413 2.31607 22.2044 2 23 2ZM23 0C22.0111 0 21.0444 0.293245 20.2222 0.842652C19.3999 1.39206 18.759 2.17295 18.3806 3.08658C18.0022 4.00021 17.9031 5.00555 18.0961 5.97545C18.289 6.94536 18.7652 7.83627 19.4645 8.53553C20.1637 9.2348 21.0546 9.711 22.0246 9.90393C22.9945 10.0969 23.9998 9.99784 24.9134 9.6194C25.8271 9.24096 26.6079 8.6001 27.1574 7.77785C27.7068 6.95561 28 5.98891 28 5C28 3.67392 27.4732 2.40215 26.5355 1.46447C25.5979 0.526784 24.3261 0 23 0Z\" fill=\"white\"/>\n<path d=\"M22 28H20V26C19.9991 25.2046 19.6828 24.4421 19.1204 23.8796C18.5579 23.3172 17.7954 23.0009 17 23H13C12.2046 23.0009 11.4421 23.3172 10.8796 23.8796C10.3172 24.4421 10.0009 25.2046 10 26V28H8V26C8.00156 24.6744 8.52885 23.4035 9.46619 22.4662C10.4035 21.5288 11.6744 21.0016 13 21H17C18.3256 21.0016 19.5965 21.5288 20.5338 22.4662C21.4712 23.4035 21.9984 24.6744 22 26V28Z\" fill=\"white\"/>\n<path d=\"M15 11C15.5933 11 16.1734 11.1759 16.6667 11.5056C17.1601 11.8352 17.5446 12.3038 17.7716 12.8519C17.9987 13.4001 18.0581 14.0033 17.9424 14.5853C17.8266 15.1672 17.5409 15.7018 17.1213 16.1213C16.7018 16.5409 16.1672 16.8266 15.5853 16.9424C15.0033 17.0581 14.4001 16.9987 13.852 16.7716C13.3038 16.5446 12.8352 16.1601 12.5056 15.6667C12.1759 15.1734 12 14.5933 12 14C12 13.2044 12.3161 12.4413 12.8787 11.8787C13.4413 11.3161 14.2044 11 15 11ZM15 9C14.0111 9 13.0444 9.29325 12.2222 9.84265C11.3999 10.3921 10.759 11.173 10.3806 12.0866C10.0022 13.0002 9.90315 14.0055 10.0961 14.9755C10.289 15.9454 10.7652 16.8363 11.4645 17.5355C12.1637 18.2348 13.0546 18.711 14.0246 18.9039C14.9945 19.0969 15.9998 18.9978 16.9134 18.6194C17.8271 18.241 18.6079 17.6001 19.1574 16.7779C19.7068 15.9556 20 14.9889 20 14C20 12.6739 19.4732 11.4021 18.5355 10.4645C17.5979 9.52678 16.3261 9 15 9Z\" fill=\"white\"/>\n<path d=\"M7 12H5C3.6744 12.0016 2.40353 12.5288 1.46619 13.4662C0.528847 14.4035 0.00156145 15.6744 0 17V21H2V17C2.00087 16.2046 2.31722 15.4421 2.87964 14.8796C3.44206 14.3172 4.20462 14.0009 5 14H7V12Z\" fill=\"white\"/>\n<path d=\"M7 2C7.59335 2 8.17337 2.17595 8.66671 2.50559C9.16006 2.83524 9.54458 3.30377 9.77164 3.85195C9.9987 4.40013 10.0581 5.00333 9.94236 5.58527C9.8266 6.16721 9.54088 6.70176 9.12132 7.12132C8.70177 7.54088 8.16722 7.8266 7.58527 7.94236C7.00333 8.05811 6.40013 7.9987 5.85195 7.77164C5.30377 7.54458 4.83524 7.16006 4.50559 6.66671C4.17595 6.17336 4 5.59334 4 5C4 4.20435 4.31607 3.44129 4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2ZM7 0C6.0111 0 5.0444 0.293245 4.22215 0.842652C3.39991 1.39206 2.75904 2.17295 2.3806 3.08658C2.00217 4.00021 1.90315 5.00555 2.09608 5.97545C2.289 6.94536 2.76521 7.83627 3.46447 8.53553C4.16373 9.2348 5.05465 9.711 6.02455 9.90393C6.99446 10.0969 7.99979 9.99784 8.91342 9.6194C9.82705 9.24096 10.6079 8.6001 11.1573 7.77785C11.7068 6.95561 12 5.98891 12 5C12 3.67392 11.4732 2.40215 10.5355 1.46447C9.59785 0.526784 8.32609 0 7 0Z\" fill=\"white\"/>\n</svg>\n";
var word = "<svg width=\"24\" height=\"28\" viewBox=\"0 0 24 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M22.3 18L21.391 26.611L20 18H18L16.609 26.611L15.7 18H14L15.36 28H17.64L19 19.626L20.36 28H22.64L24 18H22.3Z\" fill=\"white\"/>\n<path d=\"M19.707 7.293L12.707 0.293C12.5195 0.105451 12.2652 5.66374e-05 12 0H2C1.46973 0.000529477 0.961329 0.211413 0.586371 0.586371C0.211413 0.961329 0.000529477 1.46973 0 2V26C0.000608734 26.5302 0.211518 27.0386 0.586459 27.4135C0.9614 27.7885 1.46975 27.9994 2 28H10V26H2V2H10V8C10.0005 8.53027 10.2114 9.03867 10.5864 9.41363C10.9613 9.78859 11.4697 9.99947 12 10H18V14H20V8C19.9999 7.73481 19.8946 7.48049 19.707 7.293ZM12 2.4141L17.5859 8H12V2.4141Z\" fill=\"white\"/>\n</svg>\n";
var article = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10 20H0V22H10V20Z\" fill=\"white\"/>\n<path d=\"M10 14H0V16H10V14Z\" fill=\"white\"/>\n<path d=\"M22 10H2C1.46957 10 0.960859 9.78929 0.585786 9.41421C0.210714 9.03914 0 8.53043 0 8V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H22C22.5304 0 23.0391 0.210714 23.4142 0.585786C23.7893 0.960859 24 1.46957 24 2V8C24 8.53043 23.7893 9.03914 23.4142 9.41421C23.0391 9.78929 22.5304 10 22 10ZM2 2V8H22V2H2Z\" fill=\"white\"/>\n<path d=\"M22 24H16C15.4696 24 14.9609 23.7893 14.5858 23.4142C14.2107 23.0391 14 22.5304 14 22V16C14 15.4696 14.2107 14.9609 14.5858 14.5858C14.9609 14.2107 15.4696 14 16 14H22C22.5304 14 23.0391 14.2107 23.4142 14.5858C23.7893 14.9609 24 15.4696 24 16V22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24ZM16 16V22H22V16H16Z\" fill=\"white\"/>\n</svg>\n";
var google = "<svg width=\"26\" height=\"25\" viewBox=\"0 0 26 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M25.0013 12.598C25.0013 11.5846 24.9162 10.845 24.732 10.0781H12.7578V14.6523H19.7864C19.6448 15.789 18.8796 17.5009 17.179 18.6512L17.1552 18.8044L20.9412 21.6389L21.2035 21.6642C23.6125 19.5141 25.0013 16.3505 25.0013 12.598\" fill=\"white\"/>\n<path d=\"M12.7526 24.6535C16.1961 24.6535 19.0869 23.5579 21.1984 21.668L17.1739 18.655C16.0969 19.3808 14.6515 19.8875 12.7526 19.8875C9.38004 19.8875 6.51758 17.7375 5.49719 14.7656L5.34763 14.7779L1.41086 17.7224L1.35938 17.8607C3.45662 21.887 7.76452 24.6535 12.7526 24.6535Z\" fill=\"white\"/>\n<path d=\"M5.49817 14.765C5.22894 13.9981 5.07312 13.1763 5.07312 12.3272C5.07312 11.4781 5.22894 10.6564 5.48401 9.88947L5.47688 9.72614L1.49077 6.73438L1.36035 6.79433C0.49598 8.46516 0 10.3414 0 12.3272C0 14.313 0.49598 16.1892 1.36035 17.86L5.49817 14.765\" fill=\"white\"/>\n<path d=\"M12.7526 4.76588C15.1475 4.76588 16.7629 5.76562 17.684 6.60109L21.2834 3.20467C19.0728 1.21887 16.1961 0 12.7526 0C7.76452 0 3.45662 2.7664 1.35938 6.79275L5.48303 9.88789C6.51758 6.91605 9.38004 4.76588 12.7526 4.76588\" fill=\"white\"/>\n</svg>\n";
var art = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 12.0117C9.10457 12.0117 10 11.1163 10 10.0117C10 8.90715 9.10457 8.01172 8 8.01172C6.89543 8.01172 6 8.90715 6 10.0117C6 11.1163 6.89543 12.0117 8 12.0117Z\" fill=\"white\"/>\n<path d=\"M14 9.01172C15.1046 9.01172 16 8.11629 16 7.01172C16 5.90715 15.1046 5.01172 14 5.01172C12.8954 5.01172 12 5.90715 12 7.01172C12 8.11629 12.8954 9.01172 14 9.01172Z\" fill=\"white\"/>\n<path d=\"M20 12.0117C21.1046 12.0117 22 11.1163 22 10.0117C22 8.90715 21.1046 8.01172 20 8.01172C18.8954 8.01172 18 8.90715 18 10.0117C18 11.1163 18.8954 12.0117 20 12.0117Z\" fill=\"white\"/>\n<path d=\"M21 18.0117C22.1046 18.0117 23 17.1163 23 16.0117C23 14.9071 22.1046 14.0117 21 14.0117C19.8954 14.0117 19 14.9071 19 16.0117C19 17.1163 19.8954 18.0117 21 18.0117Z\" fill=\"white\"/>\n<path d=\"M17 23.0117C18.1046 23.0117 19 22.1163 19 21.0117C19 19.9071 18.1046 19.0117 17 19.0117C15.8954 19.0117 15 19.9071 15 21.0117C15 22.1163 15.8954 23.0117 17 23.0117Z\" fill=\"white\"/>\n<path d=\"M14.54 0.0104189C12.6566 -0.0622827 10.7778 0.246081 9.01645 0.917024C7.25507 1.58797 5.64731 2.60767 4.28955 3.915C2.93179 5.22234 1.852 6.79038 1.11491 8.52512C0.377813 10.2599 -0.00139876 12.1256 3.87686e-06 14.0104C-4.57387e-05 14.7517 0.170901 15.4831 0.499549 16.1476C0.828198 16.8121 1.30569 17.3918 1.8949 17.8417C2.4841 18.2916 3.16914 18.5995 3.89674 18.7415C4.62433 18.8835 5.37488 18.8557 6.09 18.6604L7.21 18.3504C7.65555 18.2288 8.12316 18.2117 8.5764 18.3004C9.02964 18.3892 9.45627 18.5813 9.82306 18.862C10.1898 19.1426 10.4869 19.5042 10.691 19.9185C10.8952 20.3328 11.0009 20.7886 11 21.2504V25.0104C11 25.8061 11.3161 26.5691 11.8787 27.1317C12.4413 27.6943 13.2044 28.0104 14 28.0104C15.8848 28.0118 17.7506 27.6326 19.4853 26.8955C21.22 26.1584 22.7881 25.0786 24.0954 23.7209C25.4028 22.3631 26.4225 20.7553 27.0934 18.994C27.7643 17.2326 28.0727 15.3539 28 13.4704C27.8549 9.94709 26.3902 6.60715 23.8968 4.11367C21.4033 1.62019 18.0633 0.155513 14.54 0.0104189ZM22.65 22.3204C21.5334 23.4895 20.1909 24.4194 18.7039 25.0537C17.217 25.688 15.6166 26.0135 14 26.0104C13.7348 26.0104 13.4804 25.9051 13.2929 25.7175C13.1054 25.53 13 25.2756 13 25.0104V21.2504C13 19.9243 12.4732 18.6526 11.5355 17.7149C10.5979 16.7772 9.32609 16.2504 8 16.2504C7.55065 16.2512 7.1034 16.3117 6.67 16.4304L5.55 16.7404C5.13168 16.8525 4.69316 16.8668 4.26844 16.7821C3.84373 16.6974 3.44422 16.516 3.10092 16.252C2.75761 15.988 2.47972 15.6484 2.2888 15.2597C2.09788 14.871 1.99906 14.4435 2 14.0104C1.99876 12.3942 2.32402 10.7944 2.95625 9.307C3.58848 7.81959 4.51467 6.47522 5.67923 5.35455C6.8438 4.23387 8.22274 3.36 9.73334 2.78535C11.2439 2.2107 12.855 1.94712 14.47 2.01042C17.4772 2.16704 20.3198 3.43209 22.4491 5.56137C24.5783 7.69066 25.8434 10.5332 26 13.5404C26.0688 15.1564 25.8072 16.7694 25.2312 18.2808C24.6552 19.7922 23.7769 21.1702 22.65 22.3304V22.3204Z\" fill=\"white\"/>\n</svg>\n";
var epub = "<svg width=\"27\" height=\"26\" viewBox=\"0 0 27 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.7694 21.1701L5.59922 12.9994L13.7694 4.82979L16.493 7.55292L11.0458 12.9994L13.7692 15.7229L21.9394 7.55335L14.8221 0.436262C14.241 -0.145421 13.2983 -0.145421 12.7166 0.436262L1.2054 11.9476C0.624243 12.5287 0.624243 13.4714 1.2054 14.053L12.7166 25.5639C13.2983 26.1454 14.241 26.1454 14.8221 25.5639L26.3334 14.053C26.9146 13.4714 26.9146 12.5287 26.3334 11.9476L24.6624 10.277L13.7694 21.1701Z\" fill=\"white\"/>\n</svg>\n";
var pdf = "<svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M28 16V14H22V24H24V20H27V18H24V16H28Z\" fill=\"white\"/>\n<path d=\"M17 24H13V14H17C17.7954 14.0009 18.5579 14.3172 19.1204 14.8796C19.6828 15.4421 19.9991 16.2046 20 17V21C19.9991 21.7954 19.6828 22.5579 19.1204 23.1204C18.5579 23.6828 17.7954 23.9991 17 24ZM15 22H17C17.2651 21.9997 17.5193 21.8943 17.7068 21.7068C17.8943 21.5193 17.9997 21.2651 18 21V17C17.9997 16.7349 17.8943 16.4807 17.7068 16.2932C17.5193 16.1057 17.2651 16.0003 17 16H15V22Z\" fill=\"white\"/>\n<path d=\"M9 14H4V24H6V21H9C9.53021 20.9993 10.0385 20.7883 10.4134 20.4134C10.7883 20.0385 10.9993 19.5302 11 19V16C10.9994 15.4698 10.7885 14.9614 10.4135 14.5865C10.0386 14.2115 9.53025 14.0006 9 14V14ZM6 19V16H9L9.001 19H6Z\" fill=\"white\"/>\n<path d=\"M20 12.0003V8.00034C20.0036 7.86891 19.9786 7.73827 19.9268 7.61742C19.875 7.49657 19.7976 7.38839 19.7 7.30034L12.7 0.300344C12.612 0.202672 12.5038 0.125268 12.3829 0.0734729C12.2621 0.0216783 12.1314 -0.00327225 12 0.000343724H2C1.47005 0.00190021 0.962242 0.213114 0.587506 0.58785C0.21277 0.962585 0.00155649 1.47039 0 2.00034V26.0003C0 26.5308 0.210714 27.0395 0.585786 27.4146C0.960859 27.7896 1.46957 28.0003 2 28.0003H18V26.0003H2V2.00034H10V8.00034C10.0016 8.5303 10.2128 9.0381 10.5875 9.41284C10.9622 9.78757 11.47 9.99879 12 10.0003H18V12.0003H20ZM12 8.00034V2.40034L17.6 8.00034H12Z\" fill=\"white\"/>\n</svg>\n";
var money = "<svg width=\"28\" height=\"24\" viewBox=\"0 0 28 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M28 18H0V20H28V18Z\" fill=\"white\"/>\n<path d=\"M28 22H0V24H28V22Z\" fill=\"white\"/>\n<path d=\"M22 6C21.6044 6 21.2178 6.1173 20.8889 6.33706C20.56 6.55682 20.3036 6.86918 20.1522 7.23463C20.0009 7.60009 19.9613 8.00222 20.0384 8.39018C20.1156 8.77814 20.3061 9.13451 20.5858 9.41421C20.8655 9.69392 21.2219 9.8844 21.6098 9.96157C21.9978 10.0387 22.3999 9.99913 22.7654 9.84776C23.1308 9.69638 23.4432 9.44004 23.6629 9.11114C23.8827 8.78224 24 8.39556 24 8C24 7.46957 23.7893 6.96086 23.4142 6.58579C23.0391 6.21071 22.5304 6 22 6Z\" fill=\"white\"/>\n<path d=\"M14 12C13.2089 12 12.4355 11.7654 11.7777 11.3259C11.1199 10.8864 10.6072 10.2616 10.3045 9.53074C10.0017 8.79983 9.92252 7.99556 10.0769 7.21964C10.2312 6.44372 10.6122 5.73098 11.1716 5.17157C11.731 4.61216 12.4437 4.2312 13.2196 4.07686C13.9956 3.92252 14.7998 4.00173 15.5307 4.30448C16.2616 4.60723 16.8864 5.11993 17.3259 5.77772C17.7654 6.43552 18 7.20888 18 8C17.9988 9.0605 17.577 10.0772 16.8271 10.8271C16.0772 11.577 15.0605 11.9988 14 12ZM14 6C13.6044 6 13.2178 6.1173 12.8889 6.33706C12.56 6.55683 12.3036 6.86918 12.1522 7.23464C12.0009 7.60009 11.9613 8.00222 12.0384 8.39018C12.1156 8.77814 12.3061 9.13451 12.5858 9.41422C12.8655 9.69392 13.2219 9.8844 13.6098 9.96157C13.9978 10.0387 14.3999 9.99914 14.7654 9.84776C15.1308 9.69639 15.4432 9.44004 15.6629 9.11114C15.8827 8.78224 16 8.39557 16 8C15.9995 7.46973 15.7886 6.96133 15.4136 6.58637C15.0387 6.21142 14.5303 6.00053 14 6Z\" fill=\"white\"/>\n<path d=\"M6 6C5.60444 6 5.21776 6.1173 4.88886 6.33706C4.55996 6.55682 4.30362 6.86918 4.15224 7.23463C4.00087 7.60009 3.96126 8.00222 4.03843 8.39018C4.1156 8.77814 4.30608 9.13451 4.58579 9.41421C4.86549 9.69392 5.22186 9.8844 5.60982 9.96157C5.99778 10.0387 6.39992 9.99913 6.76537 9.84776C7.13082 9.69638 7.44318 9.44004 7.66294 9.11114C7.8827 8.78224 8 8.39556 8 8C8 7.46957 7.78929 6.96086 7.41421 6.58579C7.03914 6.21071 6.53043 6 6 6Z\" fill=\"white\"/>\n<path d=\"M26 16H2C1.46998 15.9987 0.962055 15.7875 0.587274 15.4127C0.212493 15.0379 0.00134641 14.53 0 14V2C0.00134641 1.46998 0.212493 0.962055 0.587274 0.587274C0.962055 0.212492 1.46998 0.00134641 2 0H26C26.53 0.00134641 27.0379 0.212492 27.4127 0.587274C27.7875 0.962055 27.9987 1.46998 28 2V14C27.9993 14.5302 27.7883 15.0385 27.4134 15.4134C27.0385 15.7883 26.5302 15.9993 26 16ZM26 2H2V14H26V2Z\" fill=\"white\"/>\n</svg>\n";
var university = "<svg width=\"24\" height=\"28\" viewBox=\"0 0 24 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M22 28H20V25C19.9984 23.6744 19.4712 22.4035 18.5338 21.4662C17.5965 20.5288 16.3256 20.0016 15 20H9C7.6744 20.0016 6.40353 20.5288 5.46619 21.4662C4.52885 22.4035 4.00156 23.6744 4 25V28H2V25C2.00217 23.1442 2.74037 21.3649 4.05265 20.0526C5.36493 18.7404 7.14415 18.0022 9 18H15C16.8558 18.0022 18.6351 18.7404 19.9474 20.0526C21.2596 21.3649 21.9978 23.1442 22 25V28Z\" fill=\"white\"/>\n<path d=\"M1 4C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5V14H2V5C2 4.73478 1.89464 4.48043 1.70711 4.29289C1.51957 4.10536 1.26522 4 1 4Z\" fill=\"white\"/>\n<path d=\"M0 0V2H5V9C5 10.8565 5.7375 12.637 7.05025 13.9497C8.36301 15.2625 10.1435 16 12 16C13.8565 16 15.637 15.2625 16.9497 13.9497C18.2625 12.637 19 10.8565 19 9V2H24V0H0ZM7 2H17V5H7V2ZM12 14C10.6739 14 9.40215 13.4732 8.46447 12.5355C7.52678 11.5979 7 10.3261 7 9V7H17V9C17 10.3261 16.4732 11.5979 15.5355 12.5355C14.5979 13.4732 13.3261 14 12 14Z\" fill=\"white\"/>\n</svg>\n";
var mountain = "<svg width=\"28\" height=\"24\" viewBox=\"0 0 28 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M25.6343 21.9999L15.7888 1.10542C15.6218 0.771466 15.3646 0.490937 15.0464 0.295583C14.7282 0.100228 14.3617 -0.00215111 13.9883 3.42686e-05C13.6149 0.00221964 13.2496 0.108882 12.9337 0.307948C12.6178 0.507014 12.364 0.790534 12.2009 1.12642L2.3657 21.9999H0V23.9999H28V21.9999H25.6343ZM13.99 1.97892L18.9473 12.4999L17 13.7978L14 11.7978L11 13.7978L9.0449 12.4945L13.99 1.97892ZM8.1846 14.3246L11 16.202L14 14.202L17 16.202L19.8091 14.329L23.4233 21.9999H4.5752L8.1846 14.3246Z\" fill=\"white\"/>\n</svg>\n";
var other = "<svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 24.0078C9.82441 24.0078 7.69767 23.3627 5.88873 22.154C4.07979 20.9453 2.66989 19.2273 1.83733 17.2173C1.00477 15.2073 0.786929 12.9956 1.21137 10.8618C1.6358 8.72803 2.68345 6.76802 4.22183 5.22964C5.76021 3.69127 7.72022 2.64362 9.85401 2.21918C11.9878 1.79474 14.1995 2.01258 16.2095 2.84514C18.2195 3.67771 19.9375 5.0876 21.1462 6.89654C22.3549 8.70549 23 10.8322 23 13.0078C23 15.9252 21.8411 18.7231 19.7782 20.786C17.7153 22.8489 14.9174 24.0078 12 24.0078ZM12 4.00782C10.22 4.00782 8.47991 4.53566 6.99987 5.52459C5.51983 6.51352 4.36628 7.91913 3.68509 9.56367C3.0039 11.2082 2.82567 13.0178 3.17294 14.7636C3.5202 16.5095 4.37737 18.1131 5.63604 19.3718C6.89472 20.6305 8.49836 21.4876 10.2442 21.8349C11.99 22.1822 13.7996 22.0039 15.4442 21.3227C17.0887 20.6415 18.4943 19.488 19.4832 18.0079C20.4722 16.5279 21 14.7878 21 13.0078C21 10.6209 20.0518 8.33168 18.364 6.64386C16.6761 4.95603 14.387 4.00782 12 4.00782Z\" fill=\"white\"/>\n<path d=\"M14.59 17.0078L11 13.4178V7.00781H13V12.5878L16 15.5978L14.59 17.0078Z\" fill=\"white\"/>\n<path d=\"M3.58127 0.012779L0 3.60156L1.41569 5.01429L4.99697 1.42551L3.58127 0.012779Z\" fill=\"white\"/>\n<path d=\"M20.4157 0.00133073L19 1.41406L22.5813 5.00285L23.997 3.59011L20.4157 0.00133073Z\" fill=\"white\"/>\n</svg>\n";
var stem = "<svg width=\"24\" height=\"28\" viewBox=\"0 0 24 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16 8H14V10H16V8Z\" fill=\"white\"/>\n<path d=\"M10 8H8V10H10V8Z\" fill=\"white\"/>\n<path d=\"M22 18H17V16H18C18.5302 15.9994 19.0386 15.7885 19.4135 15.4135C19.7885 15.0386 19.9994 14.5302 20 14V10H22V8H20V6C19.9994 5.46975 19.7885 4.9614 19.4135 4.58646C19.0386 4.21152 18.5302 4.00061 18 4H16V0H14V4H10V0H8V4H6C5.46975 4.00061 4.9614 4.21152 4.58646 4.58646C4.21152 4.9614 4.00061 5.46975 4 6V8H2V10H4V14C4.00061 14.5302 4.21152 15.0386 4.58646 15.4135C4.9614 15.7885 5.46975 15.9994 6 16H7V18H2C1.46975 18.0006 0.9614 18.2115 0.586459 18.5865C0.211518 18.9614 0.000608734 19.4698 0 20V28H2V20H22V28H24V20C23.9994 19.4698 23.7885 18.9614 23.4135 18.5865C23.0386 18.2115 22.5302 18.0006 22 18ZM6 6H18V14H6V6ZM9 16H15V18H9V16Z\" fill=\"white\"/>\n</svg>\n";
var icons = {
	chess: chess,
	law: law,
	comprehension: comprehension,
	bigbrain: bigbrain,
	time: time,
	work: work,
	focus: focus,
	social: social,
	word: word,
	article: article,
	google: google,
	art: art,
	epub: epub,
	pdf: pdf,
	money: money,
	university: university,
	mountain: mountain,
	other: other,
	stem: stem,
	"palm-tree": "<svg width=\"28\" height=\"26\" viewBox=\"0 0 28 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.57 24C15.897 22.7251 14 18.2261 14 8V7.8687L15.1172 8.6133C16.0048 9.20369 16.7325 10.0045 17.2355 10.9444C17.7385 11.8843 18.0011 12.934 18 14H20C20.0015 12.6047 19.6577 11.2306 18.9994 10.0004C18.341 8.77017 17.3884 7.72195 16.2266 6.9492L14.8027 6H16.3335C17.8476 6.00287 19.3205 6.49382 20.5335 7.4L22.4 8.8L23.6 7.2L21.7334 5.8C20.1735 4.63546 18.28 4.0043 16.3334 4H15.1172C16.4234 2.72469 18.1745 2.00746 20 2H22V0H20C18.6565 0.00503422 17.331 0.309637 16.1201 0.891628C14.9091 1.47362 13.8432 2.31835 13 3.3643C12.1568 2.31835 11.0909 1.47362 9.87994 0.891628C8.669 0.309637 7.34352 0.00503422 6 0H4V2H6C7.82553 2.00746 9.57658 2.72469 10.8828 4H9.6665C7.71987 4.0043 5.82638 4.63546 4.2665 5.8L2.4 7.2L3.6 8.8L5.4668 7.4C6.67982 6.49382 8.15267 6.00287 9.6668 6H11.1976L9.7737 6.9492C8.61183 7.72192 7.65922 8.77012 7.00077 10.0004C6.34233 11.2306 5.99852 12.6046 6 14H8C7.99887 12.934 8.26151 11.8843 8.7645 10.9444C9.26749 10.0045 9.99522 9.20369 10.8828 8.6133L12 7.8687V8C12 16.9438 13.4116 21.7646 14.3611 24H0V26H28V24H16.57Z\" fill=\"white\"/>\n</svg>\n"
};

function parseTag(content, decorator){
            if (content[0]!= decorator) return {
                content: content,
                tag: null
            }

            return {
                tag: content.substring(0, content.indexOf(" ")),
                content: content.substring(content.indexOf(" ")+1, content.length)     
            }

        }
        
function parseAnswerContent(content){
    const data = parseTag(content, "$");
    console.log('parsed', data);

    this.content = data.content;
    this.icon = data.tag?.substring(1);
}
const Answer = (content,subQ) => _p()
                                    .run(function(){
                                        parseAnswerContent.bind(this)(content);


                                        console.log(this);
                                        this.key = this.content;

                                        this.as(_e(`<div class="answer">
                                            <div id='content'>${this.content}</div>
                                        </div>`.trim()));

                                        if (this.icon){
                                            let icon = icons[this.icon];
                                            icon && this.prepend(_e("div.icon#").html(icon));
                                        }
                                    })
                                    .run(function() {
                                        this.subQ = subQ;
                                    });

const Template = (pragma) => `
    <div class="quetion" id="${pragma.key}">
        <h1>${pragma.title}</h1>
        <div class="answers">
        </div>
    </div>
`.trim();

class Question extends Pragma {
    constructor(title, ...answers){
        super();
        this.title;
        this.answers = []; 
        this.codeName;
        this.answerLimit = 1; // TODO implement
        this.parseTitle(title);

        this.createEvent('answer');
        this.createAnswers(answers);
        this.as(Template(this))
            .run(()=> {
                this.element.find('.answers').append(...this.answers);
            });

    }

    parseTitle(title){
        const data = parseTag(title, '@');
        if (!data.tag) return this.title=title

        this.codeName =  data.tag;
        this.title = data.content;
    }

    createAnswers(answerList){

        const userAnswers = [];
        answerList.forEach(element => {
            let content = element;
            let subQ;
            if (Array.isArray(content)){
                content = content[0];
                subQ = element[1];
            }

            self = this;
            let answer = Answer(content, subQ);
                            answer.listenTo('click', function(){
                                userAnswers.push(answer);
                                if (userAnswers.length <= self.answerLimit){
                                    answer.addClass('selected');
                                    self.triggerEvent('answer', answer);
                                }

                            });

            this.answers.push(answer);

        });

        console.log(answerList);
    }

    get answerList(){
        return this.answers.map(e => e.html()).join('\n')
    }

}

function createForm(...params){
    let results = [];
    console.log(params);
    let form = _p('formPragma')
                    .as(_e('div.form#'))
                    .appendTo('body')
                    .createEvents('done', 'update', 'start');

    let index = 0;
    let currentQuestion = null;
    function createQ(question){
        
        // remove previous question
        if (currentQuestion) currentQuestion.element.hide();
        
        setTimeout(() => {
            
        }, 3000);

        currentQuestion = new Question(...question).appendTo(form).on('answer', (ans) => {
            if (index == 0) {form.triggerEvent('started', ans);}
            results.push({[currentQuestion.codeName ?? question[0]]: ans.key});
            form.triggerEvent('update', results);
            console.log("RESUKTS",results);
            if (index == params.length-1){
                form.triggerEvent('done', results);
                return 
            }

            if (ans.subQ){
                return createQ(ans.subQ)

            }

           

            console.log('NEXTQ',ans.nextQ);
            index++;

            console.log(ans);
            createQ(params[index]); 

        });


        currentQuestion.element.show();
    }

    createQ(params[0]);
    return form
}

function injectStyles(){
    util.addStyles(styles$1['styles']);

}

export { createForm, injectStyles };
