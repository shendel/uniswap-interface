// ESLint reports `fill` is missing, whereas it exists on an SVGProps type
export type SVGProps = React.SVGProps<SVGSVGElement> & {
  fill?: string
  clickable?: boolean
}

export const UniIcon = (props: SVGProps) => (
  <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.3526 19.9242C20.2928 20.1549 20.1885 20.3715 20.0455 20.5618C19.7793 20.9088 19.427 21.1794 19.0239 21.3466C18.6614 21.5035 18.2774 21.605 17.8849 21.6475C17.8042 21.6578 17.7206 21.6641 17.6395 21.6703L17.6263 21.6713C17.3777 21.6808 17.1387 21.77 16.9442 21.9258C16.7497 22.0817 16.61 22.296 16.5455 22.5373C16.516 22.6574 16.494 22.7792 16.4798 22.9021C16.4572 23.0874 16.4456 23.2771 16.433 23.4823C16.424 23.6295 16.4144 23.7848 16.4 23.9521C16.3156 24.6337 16.1193 25.2965 15.8192 25.9136C15.7579 26.0433 15.6954 26.1691 15.6339 26.2926C15.3049 26.9546 15.0076 27.5526 15.0929 28.3535C15.1597 28.9706 15.4744 29.3841 15.8925 29.8106C16.0911 30.0146 16.3544 30.1889 16.6277 30.3699C17.3927 30.8763 18.2361 31.4347 17.9582 32.8415C17.7308 33.9814 15.8494 35.1776 13.205 35.5954C13.4615 35.5563 12.8965 34.5879 12.8338 34.4804L12.83 34.4739C12.7571 34.3592 12.6824 34.2462 12.6079 34.1334L12.6079 34.1334L12.6078 34.1334C12.3926 33.8076 12.1783 33.4835 12.0111 33.1241C11.5693 32.1856 11.3645 31.0998 11.5455 30.0714C11.7095 29.1407 12.3221 28.3972 12.9118 27.6813L12.9118 27.6813C13.008 27.5646 13.1035 27.4487 13.1964 27.3328C13.9852 26.3488 14.8128 25.0595 14.9959 23.7822C15.0114 23.6712 15.0252 23.5502 15.0397 23.4229L15.0397 23.4229L15.0397 23.4229C15.0657 23.195 15.0939 22.9469 15.1382 22.6997C15.2039 22.2728 15.3371 21.8591 15.5326 21.4743C15.666 21.222 15.8417 20.9946 16.052 20.8021C16.1616 20.6999 16.2339 20.5637 16.2574 20.4153C16.2808 20.267 16.254 20.115 16.1813 19.9837L11.9658 12.3673L18.0207 19.8733C18.0897 19.9603 18.1768 20.031 18.276 20.0803C18.3752 20.1296 18.484 20.1564 18.5946 20.1588C18.7053 20.1612 18.8151 20.1391 18.9163 20.094C19.0175 20.049 19.1076 19.9821 19.1802 19.8982C19.2569 19.8084 19.3004 19.6947 19.3033 19.5763C19.3063 19.458 19.2685 19.3423 19.1963 19.2487C18.9148 18.8873 18.6218 18.521 18.3302 18.1563L18.33 18.156C18.212 18.0085 18.0943 17.8613 17.9776 17.7148L16.4539 15.8205L13.3957 12.0382L10 8L13.788 11.6994L17.0433 15.3149L18.6673 17.127C18.8165 17.2958 18.9657 17.4631 19.1148 17.6303C19.5044 18.0671 19.894 18.5039 20.2836 18.9673L20.372 19.0755L20.3914 19.2433C20.4176 19.4708 20.4045 19.7012 20.3526 19.9242ZM35.9247 22.4697L35.9311 22.4795C35.93 21.6719 35.4322 20.3394 34.4247 19.0577L34.401 19.0263C34.0906 18.641 33.7524 18.2792 33.3891 17.9438C33.3212 17.8778 33.248 17.8128 33.1736 17.7479C32.7081 17.3401 32.1993 16.985 31.6564 16.6892L31.6176 16.6697C29.9118 15.7366 27.692 15.256 24.9549 15.7972C24.5873 15.3489 24.1914 14.9248 23.7696 14.5275C23.1236 13.9091 22.3632 13.4241 21.5315 13.0997C20.7072 12.7966 19.8244 12.6884 18.9517 12.7836C19.7929 12.8597 20.6123 13.0947 21.3666 13.4764C22.0951 13.8685 22.7512 14.3833 23.3062 14.9984C23.8688 15.6263 24.3976 16.2839 24.8903 16.9685L25.0139 17.1302C25.496 17.7609 25.9868 18.403 26.5982 18.9744C26.9348 19.2925 27.3103 19.5664 27.7157 19.7895C27.8234 19.8447 27.9323 19.8966 28.039 19.9421C28.1456 19.9876 28.2458 20.0298 28.3536 20.0688C28.5616 20.1499 28.7771 20.2171 28.9926 20.2788C29.8547 20.5256 30.7372 20.6143 31.5993 20.662C31.7192 20.6683 31.8389 20.6742 31.9581 20.6801L31.9583 20.6801C32.2662 20.6954 32.5713 20.7105 32.8719 20.7323C33.2837 20.7569 33.6922 20.8214 34.0917 20.925C34.6918 21.0822 35.2201 21.4413 35.5885 21.9425C35.7137 22.1095 35.8261 22.2857 35.9247 22.4697ZM33.4013 17.9451C33.358 17.9049 33.3139 17.8651 33.27 17.8254L33.27 17.8254C33.2418 17.7999 33.2136 17.7745 33.1858 17.7491C33.2073 17.7688 33.2288 17.7887 33.2503 17.8087C33.3009 17.8556 33.3514 17.9025 33.4013 17.9451ZM32.3238 25.9172C29.5516 24.7872 26.6518 23.6051 27.0835 20.2875C28.0091 21.2802 29.462 21.4884 31.0422 21.7149C32.4757 21.9203 34.0139 22.1407 35.3583 22.9753C38.5306 24.9433 38.0673 28.7666 36.9897 30.1739C37.0869 27.8587 34.7544 26.908 32.3238 25.9172ZM21.1551 24.2567C21.8868 24.1863 23.4461 23.8042 22.7489 22.5712C22.5989 22.3204 22.3815 22.1172 22.1217 21.9848C21.8619 21.8525 21.5702 21.7965 21.2801 21.8232C20.9858 21.855 20.7082 21.9769 20.4852 22.1725C20.2622 22.3681 20.1044 22.6278 20.0334 22.9165C19.8168 23.723 20.0463 24.3649 21.1551 24.2567ZM20.9448 14.5014C20.4858 13.9688 19.7735 13.6895 19.0752 13.5878C19.0491 13.7625 19.0326 13.9385 19.0257 14.115C18.9944 15.5687 19.5084 17.1654 20.503 18.275C20.8212 18.6337 21.2049 18.9276 21.6334 19.141C21.8812 19.2622 22.5386 19.5631 22.7821 19.2925C22.8006 19.2677 22.8123 19.2384 22.8159 19.2076C22.8195 19.1768 22.8149 19.1456 22.8026 19.1172C22.7622 19.0013 22.6843 18.8961 22.6069 18.7917C22.552 18.7177 22.4974 18.6441 22.4567 18.5672C22.4155 18.4898 22.3714 18.4142 22.3274 18.3388L22.3274 18.3388C22.2447 18.197 22.1622 18.0555 22.0989 17.9015C21.9319 17.4984 21.845 17.0698 21.7583 16.6425L21.7583 16.6424L21.7583 16.6424L21.7583 16.6423L21.7582 16.6422L21.7582 16.6421L21.7582 16.642C21.7409 16.5566 21.7236 16.4712 21.7056 16.386C21.5731 15.7268 21.4039 15.034 20.9448 14.5014ZM30.7524 26.098C30.0403 28.0943 31.1888 29.7804 32.3306 31.4566C33.6077 33.3315 34.8764 35.194 33.5228 37.4642C36.1532 36.3731 37.4021 33.0769 36.3105 30.4616C35.6227 28.8074 33.9649 27.9106 32.4261 27.0783L32.4261 27.0783L32.426 27.0782C31.829 26.7553 31.2499 26.4421 30.7524 26.098ZM23.0552 30.8633C22.5785 31.0587 22.129 31.3152 21.7179 31.6265C22.6527 31.2859 23.6339 31.0914 24.6274 31.0495C24.8074 31.0388 24.9887 31.0304 25.1715 31.0219L25.1717 31.0219L25.172 31.0219C25.4878 31.0073 25.8085 30.9925 26.136 30.9651C26.6729 30.9285 27.2025 30.8192 27.7103 30.6403C28.2425 30.4533 28.7268 30.1501 29.1284 29.7527C29.5342 29.3424 29.8188 28.8272 29.9506 28.2642C30.0666 27.7324 30.0503 27.1801 29.9032 26.6562C29.756 26.1322 29.4825 25.6528 29.1069 25.2603C29.2881 25.7221 29.3996 26.2084 29.4377 26.7033C29.4705 27.164 29.4081 27.6265 29.2545 28.0618C29.1045 28.4744 28.8593 28.8454 28.539 29.1443C28.2081 29.4462 27.825 29.6846 27.4086 29.8479C26.8299 30.0821 26.1755 30.1779 25.4939 30.2777C25.183 30.3232 24.8664 30.3696 24.5487 30.4303C24.0378 30.5243 23.5374 30.6694 23.0552 30.8633ZM31.3187 39.1046L31.273 39.1415L31.273 39.1416C31.1525 39.2389 31.0301 39.3379 30.8982 39.4268C30.7301 39.538 30.554 39.6365 30.3713 39.7212C29.9908 39.9077 29.5726 40.0029 29.1493 39.9994C28.0028 39.9778 27.1924 39.1205 26.7183 38.1516C26.594 37.8977 26.4845 37.6359 26.375 37.3741L26.375 37.3741C26.1997 36.9551 26.0244 36.5361 25.7883 36.149C25.2399 35.2495 24.3013 34.5253 23.2022 34.6595C22.7539 34.7158 22.3336 34.9182 22.0847 35.309C21.4295 36.3298 22.3703 37.7598 23.5696 37.5573C23.6716 37.5417 23.7714 37.5141 23.867 37.4751C23.9623 37.4343 24.0512 37.38 24.131 37.3138C24.2986 37.1736 24.4248 36.9903 24.4963 36.7834C24.5751 36.5676 24.5926 36.3341 24.547 36.109C24.4978 35.8736 24.3594 35.6668 24.1612 35.532C24.3917 35.6404 24.5713 35.8345 24.6623 36.0732C24.7566 36.319 24.7809 36.5862 24.7323 36.8451C24.6852 37.1147 24.5669 37.3667 24.3896 37.5747C24.2955 37.6816 24.1866 37.7746 24.0664 37.8507C23.9472 37.9259 23.8195 37.9866 23.686 38.0315C23.4153 38.1244 23.1272 38.1544 22.8433 38.1192C22.4447 38.0621 22.0688 37.8983 21.755 37.645C21.697 37.599 21.6414 37.5508 21.5875 37.5008C21.374 37.3158 21.1802 37.1087 21.0093 36.8829C20.9326 36.7981 20.8547 36.7144 20.7733 36.634C20.3891 36.229 19.9358 35.8965 19.4349 35.6522C19.0895 35.4998 18.728 35.3872 18.3574 35.3166C18.1709 35.2776 17.9824 35.2495 17.7938 35.2257C17.7733 35.2236 17.734 35.2167 17.685 35.2082L17.6847 35.2081L17.6846 35.2081L17.6846 35.2081L17.6846 35.2081L17.6845 35.2081C17.5271 35.1806 17.2711 35.136 17.2259 35.178C17.8088 34.639 18.4441 34.1603 19.1224 33.7491C19.8189 33.334 20.5667 33.0126 21.3466 32.7933C22.1551 32.5647 23.0009 32.4995 23.8347 32.6017C24.2639 32.6535 24.6843 32.7627 25.0847 32.9264C25.5042 33.0948 25.8914 33.3351 26.2291 33.6366C26.5632 33.9528 26.8333 34.3311 27.0243 34.7504C27.1968 35.1431 27.3254 35.5537 27.4079 35.9747C27.4521 36.2013 27.4855 36.4502 27.5199 36.7079L27.52 36.7079L27.52 36.708L27.52 36.708C27.6771 37.8823 27.8585 39.2372 29.2043 39.4733C29.2898 39.49 29.3761 39.5023 29.4629 39.5102L29.7312 39.5166C29.9157 39.5034 30.099 39.477 30.2797 39.4376C30.6541 39.3492 31.019 39.2241 31.3691 39.0642L31.3187 39.1046ZM21.0801 36.9619C21.1123 36.9989 21.1449 37.0355 21.1779 37.0718C21.1644 37.0567 21.151 37.0415 21.1375 37.0264L21.1375 37.0264L21.1375 37.0264L21.1375 37.0264C21.1184 37.0049 21.0993 36.9834 21.0801 36.9619Z"
      fill="currentColor"
    />
  </svg>
)
