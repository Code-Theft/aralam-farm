import { IconProps } from "@lib/types";
import React from "react";

const AralamLogo: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="102"
      height="36"
      viewBox="0 0 102 36"
      {...props}
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.1667 12.6667C11.1667 15.3333 8.36669 23.56 5.59335 30.4533L8.11335 31.3333L9.38002 28.2667C10.02 28.4933 10.6867 28.6667 11.1667 28.6667C25.8334 28.6667 29.8334 6 29.8334 6C28.5 8.66667 19.1667 9 12.5 10.3333C5.83335 11.6667 3.16669 17.3333 3.16669 20C3.16669 22.6667 5.50002 25 5.50002 25C9.83335 12.6667 23.1667 12.6667 23.1667 12.6667Z"
        fill="#212529"
      />
      <path
        d="M45.142 15.5H42.892L46.9886 3.86364H49.5909L53.6932 15.5H51.4432L48.3352 6.25H48.2443L45.142 15.5ZM45.2159 10.9375H51.3523V12.6307H45.2159V10.9375ZM56.6863 15.6761C56.1333 15.6761 55.6352 15.5777 55.192 15.3807C54.7526 15.1799 54.4041 14.8845 54.1465 14.4943C53.8927 14.1042 53.7659 13.6231 53.7659 13.0511C53.7659 12.5587 53.8568 12.1515 54.0386 11.8295C54.2204 11.5076 54.4685 11.25 54.7829 11.0568C55.0973 10.8636 55.4515 10.7178 55.8454 10.6193C56.2431 10.517 56.6541 10.4432 57.0784 10.3977C57.5897 10.3447 58.0045 10.2973 58.3227 10.2557C58.6409 10.2102 58.8719 10.142 59.0159 10.0511C59.1636 9.95644 59.2374 9.81061 59.2374 9.61364V9.57955C59.2374 9.15152 59.1105 8.82008 58.8568 8.58523C58.603 8.35038 58.2374 8.23295 57.7602 8.23295C57.2564 8.23295 56.8568 8.3428 56.5613 8.5625C56.2696 8.7822 56.0727 9.04167 55.9704 9.34091L54.0499 9.06818C54.2015 8.53788 54.4515 8.0947 54.7999 7.73864C55.1484 7.37879 55.5746 7.10985 56.0784 6.93182C56.5821 6.75 57.139 6.65909 57.7488 6.65909C58.1693 6.65909 58.5878 6.70833 59.0045 6.80682C59.4212 6.9053 59.8018 7.06818 60.1465 7.29545C60.4912 7.51894 60.7677 7.82386 60.9761 8.21023C61.1882 8.59659 61.2943 9.07955 61.2943 9.65909V15.5H59.317V14.3011H59.2488C59.1238 14.5436 58.9477 14.7708 58.7204 14.983C58.4969 15.1913 58.2147 15.3598 57.8738 15.4886C57.5367 15.6136 57.1409 15.6761 56.6863 15.6761ZM57.2204 14.1648C57.6333 14.1648 57.9912 14.0833 58.2943 13.9205C58.5973 13.7538 58.8302 13.5341 58.9931 13.2614C59.1598 12.9886 59.2431 12.6913 59.2431 12.3693V11.3409C59.1787 11.3939 59.0689 11.4432 58.9136 11.4886C58.7621 11.5341 58.5916 11.5739 58.4022 11.608C58.2128 11.642 58.0253 11.6723 57.8397 11.6989C57.6541 11.7254 57.4931 11.7481 57.3568 11.767C57.0499 11.8087 56.7753 11.8769 56.5329 11.9716C56.2905 12.0663 56.0992 12.1989 55.959 12.3693C55.8189 12.536 55.7488 12.7519 55.7488 13.017C55.7488 13.3958 55.8871 13.6818 56.1636 13.875C56.4401 14.0682 56.7924 14.1648 57.2204 14.1648ZM62.4024 15.5V6.77273H64.3968V8.22727H64.4877C64.6468 7.72348 64.9195 7.33523 65.3059 7.0625C65.696 6.78598 66.1411 6.64773 66.6411 6.64773C66.7547 6.64773 66.8816 6.65341 67.0218 6.66477C67.1657 6.67235 67.285 6.68561 67.3797 6.70455V8.59659C67.2926 8.56629 67.1543 8.53977 66.9649 8.51705C66.7793 8.49053 66.5994 8.47727 66.4252 8.47727C66.0502 8.47727 65.713 8.55871 65.4138 8.72159C65.1184 8.88068 64.8854 9.10227 64.7149 9.38636C64.5445 9.67045 64.4593 9.99811 64.4593 10.3693V15.5H62.4024ZM70.1413 15.6761C69.5883 15.6761 69.0902 15.5777 68.647 15.3807C68.2076 15.1799 67.8591 14.8845 67.6015 14.4943C67.3477 14.1042 67.2209 13.6231 67.2209 13.0511C67.2209 12.5587 67.3118 12.1515 67.4936 11.8295C67.6754 11.5076 67.9235 11.25 68.2379 11.0568C68.5523 10.8636 68.9065 10.7178 69.3004 10.6193C69.6981 10.517 70.1091 10.4432 70.5334 10.3977C71.0447 10.3447 71.4595 10.2973 71.7777 10.2557C72.0959 10.2102 72.3269 10.142 72.4709 10.0511C72.6186 9.95644 72.6924 9.81061 72.6924 9.61364V9.57955C72.6924 9.15152 72.5656 8.82008 72.3118 8.58523C72.058 8.35038 71.6924 8.23295 71.2152 8.23295C70.7114 8.23295 70.3118 8.3428 70.0163 8.5625C69.7246 8.7822 69.5277 9.04167 69.4254 9.34091L67.5049 9.06818C67.6565 8.53788 67.9065 8.0947 68.2549 7.73864C68.6034 7.37879 69.0296 7.10985 69.5334 6.93182C70.0371 6.75 70.594 6.65909 71.2038 6.65909C71.6243 6.65909 72.0428 6.70833 72.4595 6.80682C72.8762 6.9053 73.2568 7.06818 73.6015 7.29545C73.9462 7.51894 74.2227 7.82386 74.4311 8.21023C74.6432 8.59659 74.7493 9.07955 74.7493 9.65909V15.5H72.772V14.3011H72.7038C72.5788 14.5436 72.4027 14.7708 72.1754 14.983C71.9519 15.1913 71.6697 15.3598 71.3288 15.4886C70.9917 15.6136 70.5959 15.6761 70.1413 15.6761ZM70.6754 14.1648C71.0883 14.1648 71.4462 14.0833 71.7493 13.9205C72.0523 13.7538 72.2852 13.5341 72.4481 13.2614C72.6148 12.9886 72.6981 12.6913 72.6981 12.3693V11.3409C72.6337 11.3939 72.5239 11.4432 72.3686 11.4886C72.2171 11.5341 72.0466 11.5739 71.8572 11.608C71.6678 11.642 71.4803 11.6723 71.2947 11.6989C71.1091 11.7254 70.9481 11.7481 70.8118 11.767C70.5049 11.8087 70.2303 11.8769 69.9879 11.9716C69.7455 12.0663 69.5542 12.1989 69.414 12.3693C69.2739 12.536 69.2038 12.7519 69.2038 13.017C69.2038 13.3958 69.3421 13.6818 69.6186 13.875C69.8951 14.0682 70.2474 14.1648 70.6754 14.1648ZM77.9143 3.86364V15.5H75.8574V3.86364H77.9143ZM81.5807 15.6761C81.0277 15.6761 80.5295 15.5777 80.0864 15.3807C79.647 15.1799 79.2985 14.8845 79.0409 14.4943C78.7871 14.1042 78.6602 13.6231 78.6602 13.0511C78.6602 12.5587 78.7511 12.1515 78.933 11.8295C79.1148 11.5076 79.3629 11.25 79.6773 11.0568C79.9917 10.8636 80.3458 10.7178 80.7398 10.6193C81.1375 10.517 81.5485 10.4432 81.9727 10.3977C82.4841 10.3447 82.8989 10.2973 83.217 10.2557C83.5352 10.2102 83.7663 10.142 83.9102 10.0511C84.058 9.95644 84.1318 9.81061 84.1318 9.61364V9.57955C84.1318 9.15152 84.0049 8.82008 83.7511 8.58523C83.4973 8.35038 83.1318 8.23295 82.6545 8.23295C82.1508 8.23295 81.7511 8.3428 81.4557 8.5625C81.164 8.7822 80.967 9.04167 80.8648 9.34091L78.9443 9.06818C79.0958 8.53788 79.3458 8.0947 79.6943 7.73864C80.0428 7.37879 80.4689 7.10985 80.9727 6.93182C81.4765 6.75 82.0333 6.65909 82.6432 6.65909C83.0636 6.65909 83.4822 6.70833 83.8989 6.80682C84.3155 6.9053 84.6962 7.06818 85.0409 7.29545C85.3856 7.51894 85.6621 7.82386 85.8705 8.21023C86.0826 8.59659 86.1886 9.07955 86.1886 9.65909V15.5H84.2114V14.3011H84.1432C84.0182 14.5436 83.842 14.7708 83.6148 14.983C83.3913 15.1913 83.1091 15.3598 82.7682 15.4886C82.4311 15.6136 82.0352 15.6761 81.5807 15.6761ZM82.1148 14.1648C82.5277 14.1648 82.8856 14.0833 83.1886 13.9205C83.4917 13.7538 83.7246 13.5341 83.8875 13.2614C84.0542 12.9886 84.1375 12.6913 84.1375 12.3693V11.3409C84.0731 11.3939 83.9633 11.4432 83.808 11.4886C83.6564 11.5341 83.486 11.5739 83.2966 11.608C83.1072 11.642 82.9197 11.6723 82.7341 11.6989C82.5485 11.7254 82.3875 11.7481 82.2511 11.767C81.9443 11.8087 81.6697 11.8769 81.4273 11.9716C81.1848 12.0663 80.9936 12.1989 80.8534 12.3693C80.7133 12.536 80.6432 12.7519 80.6432 13.017C80.6432 13.3958 80.7814 13.6818 81.058 13.875C81.3345 14.0682 81.6867 14.1648 82.1148 14.1648ZM87.2968 15.5V6.77273H89.2627V8.25568H89.365C89.5468 7.75568 89.848 7.36553 90.2684 7.08523C90.6889 6.80114 91.1908 6.65909 91.7741 6.65909C92.365 6.65909 92.8631 6.80303 93.2684 7.09091C93.6775 7.375 93.9654 7.76326 94.132 8.25568H94.223C94.4161 7.77083 94.7419 7.38447 95.2002 7.09659C95.6624 6.80492 96.2097 6.65909 96.8423 6.65909C97.6453 6.65909 98.3006 6.91288 98.8082 7.42045C99.3158 7.92803 99.5695 8.66856 99.5695 9.64205V15.5H97.507V9.96023C97.507 9.41856 97.3631 9.02273 97.0752 8.77273C96.7874 8.51894 96.4351 8.39205 96.0184 8.39205C95.5222 8.39205 95.1339 8.54735 94.8536 8.85795C94.5771 9.16477 94.4389 9.56439 94.4389 10.0568V15.5H92.4218V9.875C92.4218 9.42424 92.2855 9.06439 92.0127 8.79545C91.7438 8.52651 91.3915 8.39205 90.9559 8.39205C90.6605 8.39205 90.3915 8.4678 90.1491 8.61932C89.9067 8.76705 89.7135 8.97727 89.5695 9.25C89.4256 9.51894 89.3536 9.83333 89.3536 10.1932V15.5H87.2968Z"
        fill="#212529"
      />
      <path
        d="M43.6477 31.5V19.8636H51.1023V21.6307H45.7557V24.7898H50.5909V26.5568H45.7557V31.5H43.6477ZM54.4051 31.6761C53.852 31.6761 53.3539 31.5777 52.9107 31.3807C52.4713 31.1799 52.1229 30.8845 51.8653 30.4943C51.6115 30.1042 51.4846 29.6231 51.4846 29.0511C51.4846 28.5587 51.5755 28.1515 51.7573 27.8295C51.9391 27.5076 52.1873 27.25 52.5016 27.0568C52.816 26.8636 53.1702 26.7178 53.5641 26.6193C53.9619 26.517 54.3729 26.4432 54.7971 26.3977C55.3085 26.3447 55.7232 26.2973 56.0414 26.2557C56.3596 26.2102 56.5907 26.142 56.7346 26.0511C56.8823 25.9564 56.9562 25.8106 56.9562 25.6136V25.5795C56.9562 25.1515 56.8293 24.8201 56.5755 24.5852C56.3217 24.3504 55.9562 24.233 55.4789 24.233C54.9751 24.233 54.5755 24.3428 54.2801 24.5625C53.9884 24.7822 53.7914 25.0417 53.6891 25.3409L51.7687 25.0682C51.9202 24.5379 52.1702 24.0947 52.5187 23.7386C52.8672 23.3788 53.2933 23.1098 53.7971 22.9318C54.3009 22.75 54.8577 22.6591 55.4676 22.6591C55.888 22.6591 56.3066 22.7083 56.7232 22.8068C57.1399 22.9053 57.5206 23.0682 57.8653 23.2955C58.21 23.5189 58.4865 23.8239 58.6948 24.2102C58.907 24.5966 59.013 25.0795 59.013 25.6591V31.5H57.0357V30.3011H56.9676C56.8426 30.5436 56.6664 30.7708 56.4391 30.983C56.2157 31.1913 55.9335 31.3598 55.5926 31.4886C55.2554 31.6136 54.8596 31.6761 54.4051 31.6761ZM54.9391 30.1648C55.352 30.1648 55.71 30.0833 56.013 29.9205C56.316 29.7538 56.549 29.5341 56.7119 29.2614C56.8785 28.9886 56.9619 28.6913 56.9619 28.3693V27.3409C56.8975 27.3939 56.7876 27.4432 56.6323 27.4886C56.4808 27.5341 56.3104 27.5739 56.121 27.608C55.9316 27.642 55.7441 27.6723 55.5585 27.6989C55.3729 27.7254 55.2119 27.7481 55.0755 27.767C54.7687 27.8087 54.4941 27.8769 54.2516 27.9716C54.0092 28.0663 53.8179 28.1989 53.6778 28.3693C53.5376 28.536 53.4676 28.7519 53.4676 29.017C53.4676 29.3958 53.6058 29.6818 53.8823 29.875C54.1588 30.0682 54.5111 30.1648 54.9391 30.1648ZM60.1212 31.5V22.7727H62.1155V24.2273H62.2064C62.3655 23.7235 62.6382 23.3352 63.0246 23.0625C63.4148 22.786 63.8598 22.6477 64.3598 22.6477C64.4735 22.6477 64.6004 22.6534 64.7405 22.6648C64.8845 22.6723 65.0038 22.6856 65.0985 22.7045V24.5966C65.0113 24.5663 64.8731 24.5398 64.6837 24.517C64.4981 24.4905 64.3182 24.4773 64.1439 24.4773C63.7689 24.4773 63.4318 24.5587 63.1326 24.7216C62.8371 24.8807 62.6041 25.1023 62.4337 25.3864C62.2632 25.6705 62.178 25.9981 62.178 26.3693V31.5H60.1212ZM65.5049 31.5V22.7727H67.4709V24.2557H67.5731C67.7549 23.7557 68.0561 23.3655 68.4765 23.0852C68.897 22.8011 69.3989 22.6591 69.9822 22.6591C70.5731 22.6591 71.0712 22.803 71.4765 23.0909C71.8856 23.375 72.1735 23.7633 72.3402 24.2557H72.4311C72.6243 23.7708 72.95 23.3845 73.4084 23.0966C73.8705 22.8049 74.4178 22.6591 75.0504 22.6591C75.8534 22.6591 76.5087 22.9129 77.0163 23.4205C77.5239 23.928 77.7777 24.6686 77.7777 25.642V31.5H75.7152V25.9602C75.7152 25.4186 75.5712 25.0227 75.2834 24.7727C74.9955 24.5189 74.6432 24.392 74.2265 24.392C73.7303 24.392 73.3421 24.5473 73.0618 24.858C72.7852 25.1648 72.647 25.5644 72.647 26.0568V31.5H70.6299V25.875C70.6299 25.4242 70.4936 25.0644 70.2209 24.7955C69.9519 24.5265 69.5996 24.392 69.164 24.392C68.8686 24.392 68.5996 24.4678 68.3572 24.6193C68.1148 24.767 67.9216 24.9773 67.7777 25.25C67.6337 25.5189 67.5618 25.8333 67.5618 26.1932V31.5H65.5049Z"
        fill="#212529"
      />
    </svg>
  );
};

export default AralamLogo;