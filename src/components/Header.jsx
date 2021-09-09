import React, { memo, useMemo } from 'react'

import { useWindowSize } from '../utils/useWindowSize.js'

export default memo(function Header() {
    const size = useWindowSize()
    const scalingLogo = useMemo(() => 0.5 + 0.5 * ((size.width - 320) / (1920 - 320)), [size.width])

    return (
        <header className="header">
            <nav className="nav">
                <input type="checkbox" id="menu" />
                <label htmlFor="menu" className="nav__menu-btn">
                    <svg width="29" height="6" viewBox="0 0 29 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="29" height="1" rx="0.5" fill="white" />
                        <rect y="5" width="29" height="1" rx="0.5" fill="white" />
                    </svg>
                </label>
                <label htmlFor="menu" className="close">&#10006;</label>
                <div className="nav__links">

                    <a href="#catalog" className="nav__link">Каталог</a>
                    <a href="#about" className="nav__link">О бренде</a>
                    <a href="#comments" className="nav__link">Контакты</a>
                    <a href="#contacts" className="nav__link">Отзывы</a>
                </div>
            </nav>
            <div className="logo" style={{ transform: `scale(${scalingLogo})` }}>
                <svg width="206" height="89" viewBox="0 0 206 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path d="M14.3537 62.12C14.2939 61.8657 13.9205 61.5366 13.7861 61.2823C13.9952 60.9532 14.2641 60.7887 14.3686 60.5494C14.5329 59.8015 14.5479 58.9788 14.7122 58.2309C14.742 57.9018 14.7719 57.6475 14.8167 57.3184C15.3544 56.2564 15.5486 55.2542 15.4291 54.1773C15.444 54.0127 15.7427 53.6089 15.7876 53.2648C15.8921 53.1003 16.0863 52.861 16.0265 52.6964C15.8174 52.3674 16.0265 51.9485 16.5045 51.3801C16.8032 50.9763 16.848 50.5574 17.0571 50.1536C17.7591 48.3437 18.2222 46.5337 18.9092 44.7986C18.5209 41.6425 26.5715 30.9176 20.4626 32.4882C20.1041 32.7275 19.5814 32.8921 19.1482 32.9669C12.7406 35.6892 13.2932 35.2853 10.9632 41.0292C10.7839 41.8519 10.53 42.5998 10.2761 43.4225C10.1566 43.7516 10.2014 44.0806 9.99231 44.4845C8.67793 47.1919 8.21491 49.9142 6.22839 52.7114C6.04916 52.7862 6.04916 52.8759 5.94461 53.0405C4.13733 55 4.39124 54.9252 2.31511 54.8055C1.98651 54.8055 1.67285 54.626 1.404 54.7905C0.463022 54.9551 0.0149362 54.4465 0 53.8631C0.0149362 53.0405 0.104553 52.2178 0.373405 51.3053C1.55336 47.521 3.09179 43.5721 4.68997 39.6979C6.61673 35.9136 2.67358 38.3517 2.77813 35.1956C2.74826 34.702 2.64371 34.1186 2.86775 33.625C3.22622 32.6378 3.33077 31.7253 3.68924 30.8279C3.92822 30.1697 3.98796 29.6761 3.76392 29.4218C4.48086 28.285 5.09324 27.223 5.82512 25.9815C6.93039 26.49 8.25972 25.9366 9.9475 25.7122C11.0677 25.4729 12.3074 24.007 12.5912 23.0198C13.9803 19.5645 15.2797 17.6798 17.2662 14.2395C18.5209 12.0257 20.1937 9.7371 21.7172 7.43357C22.1205 6.86517 22.5537 6.70063 23.1212 6.79038C23.7784 6.88013 24.2713 6.96988 24.9285 7.05962C25.7351 7.31391 25.7649 7.82248 25.4214 8.55542C24.7791 9.87172 23.9726 11.0085 23.5096 12.1603C22.8673 13.4766 22.2251 14.6284 21.5828 15.8549C15.8622 23.5433 21.0899 23.1245 27.617 20.9107C27.8261 20.5068 28.095 20.3423 28.2145 20.0132C29.2301 17.62 30.0666 16.2289 31.3361 13.7758C31.5751 13.1176 32.1726 12.2949 32.2472 11.6368C32.3667 10.5598 33.2181 9.66231 33.8305 8.67509C34.2338 8.01693 34.5624 7.35878 34.7416 6.53609C34.8013 5.95273 35.3241 5.13004 35.6378 4.48685C36.6385 3.00601 37.7288 1.54013 38.7296 -0.0155029C39.8946 -0.000544947 41.0596 0.014413 42.1499 0.044329C43.8975 0.074245 45.4359 0.508027 46.6905 1.27088C47.8705 1.95895 48.4231 2.96114 47.9153 4.51677C47.3925 5.50399 47.1984 6.49122 46.4217 7.3887C44.4053 10.5 42.8669 13.701 41.433 16.8272C39.6855 20.447 44.0767 19.2653 46.3022 18.8016C46.7354 18.7269 47.2432 18.6521 47.3477 19.1457C45.7346 19.37 43.9423 19.759 42.4785 20.0731C41.6272 20.2226 41.0148 20.462 40.3128 20.7911C39.3419 21.2697 38.8341 22.0924 38.4607 23.0796C38.8789 23.0796 39.5361 23.1843 40.029 23.1843C40.2829 23.1843 40.7011 23.1095 40.97 22.945C41.9856 22.8852 43.0162 22.6458 43.9871 22.8253C44.3904 22.9151 45.3164 22.8403 45.9288 22.6907C46.6009 22.6159 47.1834 22.6309 47.9452 22.6309C47.7361 22.2121 47.527 21.883 47.4075 21.4642C47.3776 21.0453 47.6763 20.5517 47.9153 19.8936C48.0796 19.8936 48.3335 19.9085 48.4978 19.9085C48.5874 19.8337 48.5874 19.8337 48.6771 19.744C48.468 19.4149 48.0796 19.0709 47.9601 18.7418C49.0803 19.1756 49.9168 19.9235 50.1109 21.0902L50.1707 20.9406C49.9914 21.1052 49.8122 21.18 49.4836 21.18C48.7517 22.4963 49.7525 22.5112 50.8428 22.5262C49.5732 23.4237 48.8862 22.8253 47.9601 22.9001C48.5128 23.2442 48.8115 23.4984 49.2745 23.8275C48.6771 23.9921 48.0199 23.8874 47.5718 24.7998C47.9751 24.8895 48.4829 24.8895 49.1401 24.9793C48.5426 25.1438 48.0945 25.3832 47.751 25.4579C47.4075 25.5327 46.9743 25.6075 46.586 26.1011C46.9146 26.1011 47.2282 26.2806 47.6465 26.3704C45.5853 26.9238 43.5091 27.4623 41.4181 28.2551C40.029 28.644 38.4906 29.0329 37.0119 29.5116C35.8021 29.8257 35.0552 30.5586 34.6072 31.5458C33.7707 33.0267 33.3525 34.5075 32.9343 35.9884C32.5609 37.0653 32.2771 38.1274 31.7394 39.2043C30.9478 41.0142 30.664 42.8242 29.962 44.5593C29.4392 46.2047 28.9165 47.85 28.2294 49.4954C28.2145 49.66 27.9456 49.8245 27.7514 50.0638C27.7365 50.2284 27.5423 50.4677 27.617 50.5574C27.9904 51.7242 27.2436 53.1153 26.7657 54.3568C26.7358 54.611 26.6312 54.8504 26.6014 55.0149C26.7209 56.1816 25.9292 57.2437 25.3915 58.3057C25.2571 58.7993 24.4506 59.2779 23.883 59.8613C23.4648 59.8613 23.0465 59.9361 22.7777 60.0109C22.5238 60.0109 22.2699 59.9959 22.1056 60.0857C20.9107 61.0579 19.6859 60.7887 18.491 61.761C18.0429 62.0003 18.2819 61.3421 17.9234 61.5815C17.6396 61.8208 17.4455 62.0751 17.3708 62.0751C17.0422 62.0751 16.8928 61.8956 16.5642 61.8208C16.385 61.9853 16.0116 62.3144 15.8174 62.479C14.6823 62.9426 14.6076 62.8679 14.3537 62.12ZM8.93184 26.52C7.90125 26.7593 7.61746 27.0884 7.07976 28.1504C7.49797 28.1504 7.97593 28.3299 8.48376 28.3299C8.97665 28.4196 9.02146 28.6739 9.14095 29.0778C8.34933 29.3919 7.60252 29.3919 6.84078 30.1996C7.85644 30.05 8.63312 29.9005 9.48448 29.6611C10.1118 28.5094 10.6495 27.4474 11.3067 26.1311C10.3657 26.3853 9.78321 26.4601 8.93184 26.52ZM19.0436 24.366C18.5358 24.4408 18.1027 24.6053 18.0429 25.099C18.2968 25.099 18.4462 25.1887 18.5508 25.099C19.9548 24.5455 21.1048 23.9771 22.4043 23.4984C23.0017 23.4237 23.4946 23.4237 24.0771 23.4386C24.0921 23.3638 24.2713 23.1993 24.2863 23.1095C23.6141 23.1843 23.0017 23.4237 22.4043 23.4984C21.2691 23.8126 20.1639 24.0519 19.0436 24.366ZM19.9398 26.0263C19.432 26.1011 18.9092 26.2657 18.3865 26.505C18.8644 26.6845 19.4619 26.6097 19.9398 26.0263ZM25.3915 25.787C24.57 25.6973 23.6141 25.9216 22.4939 26.2358C21.8815 26.4751 21.2841 26.6247 20.6119 26.6247C20.0294 26.6097 19.5067 26.7742 18.969 27.1781C21.06 27.1183 23.181 26.8341 25.7649 26.2058C25.6156 26.0413 25.5409 25.9516 25.3915 25.787ZM25.1675 27.1033C24.585 27.0136 24.1369 26.5947 23.0316 27.4922C23.9726 27.3426 24.4356 27.6717 25.1675 27.1033Z" fill="white" />
                        <path d="M50.9923 29.243C50.9923 29.243 50.9923 29.243 51.0819 29.1682C51.3657 28.8391 51.5449 28.7644 51.8138 28.5998C52.7548 28.4502 55.0101 26.9993 55.7868 27.5079C55.9959 27.837 56.7875 28.2707 57.0863 28.5998C57.3701 29.0186 57.385 29.602 57.0564 30.4247C56.4291 31.4867 55.742 32.4739 54.9205 33.7902C54.6965 34.2838 54.4874 34.7027 54.3679 35.0168C53.9497 35.7497 53.5016 36.737 53.0087 37.4849C52.5606 38.4721 54.4127 35.3608 54.1588 36.1835C54.1289 36.4228 53.9347 36.6771 53.8302 36.8417C52.9788 38.487 53.0087 38.158 52.7548 39.6388C52.6652 40.4615 51.8586 44.6796 51.8586 45.4275C51.8735 46.0109 52.1723 46.34 52.3814 46.6691C52.695 46.8486 53.0834 47.1776 53.5613 47.3422C53.9347 47.6712 54.3828 47.5217 54.8906 47.4469C62.0899 45.0686 59.7001 44.1262 64.166 39.9679C65.0323 38.9059 66.0629 37.9336 66.6305 36.6173C66.6454 36.5425 66.6454 36.5425 66.9292 36.1237C67.2578 36.9613 66.2123 38.0981 67.3474 38.3674C65.2414 41.4786 63.479 46.0109 60.4469 47.6114C59.491 48.6734 53.2626 53.5348 49.7526 52.0838C48.5428 52.4877 47.5868 51.306 46.392 50.7975C45.6003 50.4534 44.8386 49.7803 44.1814 48.9427C43.8827 47.8657 43.5989 46.699 43.7184 45.622C43.6138 45.1284 43.6736 44.545 43.7184 44.1262C44.0768 43.139 44.1217 41.2393 44.5399 40.5812C44.6743 40.1623 44.8834 39.7585 44.9431 39.2649C45.1224 39.1901 45.0029 38.7712 45.5854 38.6965C45.675 38.6965 45.7945 38.3674 45.8841 38.2926C46.3621 37.7242 46.5114 37.2306 46.9894 36.6472C46.9894 36.6472 45.0477 38.3524 46.2277 36.722C47.079 35.0766 48.7817 33.2817 49.424 32.1299C49.4389 31.9654 49.6331 31.726 49.6331 31.726C49.9468 31.2324 50.2306 30.9033 50.126 30.32C50.0812 29.9909 50.2007 29.6618 50.5143 29.1682C50.6637 29.2281 50.7384 29.3178 50.9923 29.243ZM59.6852 20.343C59.491 20.5823 59.3118 20.7469 59.1773 21.076C59.1624 21.1657 59.1475 21.3302 58.9682 21.4948C58.6844 21.7341 58.4007 22.0632 58.0272 22.467C57.8331 22.7064 57.1311 23.0354 56.6979 23.1102C56.5486 23.0205 56.2648 23.185 56.0855 23.3496C55.5478 23.6637 55.2192 23.5889 54.9056 23.4094C54.6815 23.2449 54.5023 23.2299 54.2633 23.2299C53.9347 23.2299 53.6808 23.2149 53.3522 23.1402C53.4418 23.0654 53.5464 22.9008 53.636 22.8111C53.6659 22.5568 53.86 22.3175 53.9795 21.9884C54.1886 21.5696 54.3828 21.3302 54.6815 20.9264C54.6965 20.7618 54.9653 20.5973 54.9803 20.5225C55.04 20.0289 55.503 19.625 55.8018 19.1314C55.9959 18.8921 56.1901 18.6378 56.3843 18.3985C56.5635 18.2339 56.7577 18.0694 56.922 18.0694C57.1012 17.9946 57.2655 17.9946 57.3402 18.0694C57.3252 18.2339 57.4895 18.2339 57.6688 18.1591C57.848 18.0844 57.9376 17.9946 58.0123 18.0844C58.326 18.2639 58.7292 18.3386 59.0578 18.4284C59.6105 18.6827 59.9839 19.1015 60.2527 19.6849C59.9839 19.9391 59.8644 20.1785 59.6852 20.343Z" fill="white" />
                        <path d="M92.0966 39.6239C91.9473 41.6881 92.6941 40.9551 95.8456 40.5064C96.8613 40.3568 98.4146 39.9679 100.087 38.502C100.924 37.7691 101.73 38.6965 102.104 39.1153C102.074 39.4444 100.789 41.0748 100.61 41.2394C96.8762 43.2587 95.039 43.2288 92.4252 43.513C90.2893 43.9767 89.9906 45.0536 89.0646 46.6841L88.6613 47.3422C88.3028 48.3294 87.6307 49.0624 87.1229 49.7953C86.9436 49.9599 86.7495 50.1992 86.5702 50.2889L85.6292 51.2612C85.226 51.8296 84.6584 52.4878 84.0311 52.8916L83.3739 53.5498L82.4628 54.2827C82.2089 54.3575 81.9549 54.3575 81.716 54.2678C81.4919 54.1032 81.1783 53.8489 80.9393 53.7592C80.8795 53.5049 80.9094 53.2656 80.9393 53.0113C80.8497 52.2634 80.6854 51.6052 79.9386 51.5005C79.6249 51.336 79.4158 50.992 79.1917 50.7377C78.908 50.2291 78.6839 50.0646 78.2956 49.8103C77.6085 49.3017 77.5786 47.9854 78.3703 46.9084C78.7885 46.1755 79.2515 45.7567 79.7892 45.4425C80.3418 45.0387 80.9542 44.7096 81.5666 44.4703C82.642 43.8271 83.5531 43.842 84.7032 43.3634C85.3305 43.0493 85.8085 42.4659 86.2416 41.5684C87.0631 39.4294 88.0937 36.3032 88.5866 34.0745L88.9003 31.2624C88.9152 31.0978 88.9301 30.9333 88.8704 30.7688C88.8405 30.3499 88.4372 30.1854 88.1535 30.5145C87.9742 30.5893 87.8846 30.679 87.7801 30.9183C87.093 31.8158 86.4059 32.7133 85.8832 33.7005C84.3597 36.0788 82.9109 38.6217 81.3874 40.9103C80.2671 42.6304 79.2664 44.1861 78.3105 45.996C76.7273 48.9427 73.5459 51.8894 72.097 55.0904C71.7834 55.6588 71.5444 56.2422 71.0067 56.5563C70.5736 56.7209 70.3346 57.379 70.2748 57.8726C70.2151 58.456 70.0508 59.1141 69.8267 59.6077C69.6176 59.9368 69.4235 60.2659 69.2293 60.4304C68.6617 60.9988 68.4526 61.4027 68.1539 61.8215C67.0934 63.8708 66.1823 65.935 65.7641 68.1488C65.5699 69.136 65.4504 70.1382 65.092 71.1254C64.9277 71.8733 64.5244 72.4417 63.912 72.681C63.4639 72.9204 63.0905 73.2494 62.7769 73.9076C62.6872 73.9824 62.4035 74.3115 62.3138 74.3115C62.0599 74.3115 61.9106 74.8799 61.7164 75.1341H61.6268C60.2676 75.3585 59.5357 74.3563 59.222 72.7857C58.8935 71.2151 58.9233 69.48 59.0279 67.8197C59.3117 63.8558 59.9838 60.0565 60.9397 56.0926C61.2832 54.522 61.806 52.8767 62.2242 51.3958C62.8515 48.838 63.7178 46.2802 64.6588 43.9019C65.9881 40.282 67.3921 36.737 68.8708 33.2967C69.2144 32.474 69.6326 31.741 69.991 30.7388C71.2756 28.2708 72.4107 25.6382 73.6952 23.0953C74.2479 21.8688 75.0843 20.4627 75.8012 19.2362C76.2493 18.9071 76.6675 18.922 77.0559 19.2511L78.9229 20.5225L78.9976 20.6123C80.073 22.123 80.6256 23.9479 80.5957 26.4309C80.6256 27.6725 80.3866 29.0785 79.8937 30.4696C79.1768 32.4441 78.3404 34.583 77.3546 36.6323C76.7123 37.9486 76.0253 39.594 75.3531 41.0748C73.5011 45.6819 76.2344 45.1434 76.9662 43.7523C77.2948 43.0941 78.7287 41.4637 79.0722 40.641L82.4628 35.0617C83.0005 33.9997 83.5083 33.2518 84.2551 32.4441C84.9123 31.7859 85.5994 30.9782 86.3312 30.32C86.8839 29.8264 87.6904 29.4375 88.2729 29.4375L89.6919 29.4525C90.4536 29.3029 91.0511 29.976 91.6635 30.5594C92.0518 30.8136 92.3057 31.4867 92.3207 32.1449C92.3356 32.803 92.4103 33.5509 92.3505 34.1343L92.4103 36.5425L92.0966 39.6239ZM81.5965 45.996C81.0737 46.2353 80.6704 46.8187 80.5509 47.8059C80.5808 48.2247 80.8048 48.5538 81.0438 48.5538C81.2231 48.3893 81.477 48.3893 81.6712 48.2397C82.1192 48.0004 82.5673 47.6713 82.866 47.2674C83.9265 46.0409 84.4045 44.7246 84.1058 45.2182C83.1498 45.6071 82.418 45.4425 81.5965 45.996Z" fill="white" />
                        <path d="M101.462 64.7682C101.133 64.7682 101.133 64.7682 100.326 65.2468C100.326 65.2468 100.341 65.0823 100.356 64.9925C100.192 64.9028 100.192 64.9028 100.132 64.7382C99.953 64.9028 99.6991 64.9028 99.5796 65.1421C99.1315 65.4712 98.6984 65.546 98.1756 65.6956C97.9964 65.7703 97.9964 65.7703 97.6081 65.6058C97.7126 65.4413 97.7126 65.3515 97.8172 65.187C97.5632 65.187 97.384 65.3515 97.1301 65.3366C97.0255 65.5011 96.8463 65.5759 96.682 65.5759C95.9651 65.9798 95.6514 65.8152 95.3975 65.1421C95.2929 64.6485 95.2631 64.1399 94.9644 63.8108C94.5312 63.1377 94.5461 62.315 94.4864 61.4026C94.5163 61.0735 94.6656 60.4902 94.8897 60.0863C95.2631 59.0093 95.8605 58.1119 96.6372 57.1396C98.1906 55.2549 99.7887 53.6245 101.536 52.2483C105.031 49.4063 104.628 48.5687 103.911 46.0707C103.627 44.1561 102.955 42.75 102.283 41.2542C102.238 40.9251 102.014 40.6708 101.969 40.3418C101.342 39.2498 100.431 33.1919 100.61 31.711C100.789 31.5465 100.73 31.3819 100.939 31.0529C100.909 30.5593 101.133 30.0656 101.521 29.572C101.641 29.3327 101.94 28.8391 101.73 28.4203C102.029 28.0164 102.179 27.433 102.477 27.0292C102.686 26.6253 102.881 26.371 103.105 25.8774C103.299 25.6381 103.418 25.3838 103.687 25.1445C104.001 24.6508 104.299 24.1572 104.613 23.6636C105.016 23.0055 105.584 22.5119 105.972 21.9435C106.077 21.7789 106.152 21.7789 106.331 21.7041C106.6 21.5396 106.689 21.4648 106.898 21.1357C107.182 20.8066 107.376 20.6421 107.526 20.8216C108.078 21.0759 108.467 21.3302 108.915 21.8387C108.915 21.8387 109.004 21.8387 109.079 21.9285C109.796 22.2725 110.782 25.3539 110.737 26.4159C110.707 26.6702 110.677 26.9095 110.827 27.074C110.767 27.5677 110.707 28.0613 110.483 28.5549C110.244 29.213 109.99 30.0357 109.572 30.6939C109.363 31.023 109.258 31.2623 108.915 31.352C108.646 31.5166 108.362 31.8456 108.153 32.1747C108.048 32.414 107.675 32.6683 107.72 33.0722C107.72 33.0722 107.705 33.2367 107.615 33.3115C107.317 33.7303 107.018 34.209 106.794 34.6278C106.361 35.4505 106.196 36.9314 106.376 37.6045C106.495 38.0233 106.868 38.4421 107.093 38.6964C108.078 39.6238 108.631 42.7799 109.452 43.6924C109.826 44.0214 109.736 44.9339 110.02 45.2779C110.573 47.1028 113.485 44.9189 115.726 44.3655C117.085 43.468 118.429 42.5855 119.803 41.6132C120.789 40.97 121.805 40.2371 122.716 39.5041C123.358 39.0255 123.926 38.4421 124.493 37.8737C124.956 37.4698 125.434 36.9762 125.897 36.4826C126.032 36.8117 126.076 37.066 126.136 37.3053C126.241 37.7989 126.271 38.3075 125.882 38.7861C125.778 39.0255 125.584 39.19 125.554 39.4443C125.315 40.0127 125.016 40.5063 124.628 40.9999C124.15 41.4935 123.836 42.1517 123.358 42.6303C122.91 42.9594 122.537 43.2885 122.163 43.6026C121.521 44.0962 120.879 44.5749 120.236 45.0685C120.147 45.1433 119.953 45.3078 119.863 45.3976C118.892 45.8762 117.966 46.6989 116.965 47.3421C116.682 47.5814 116.323 47.8357 115.965 48.075C114.157 49.2866 111.648 49.2567 111.409 51.4855C111.558 53.1458 111.588 52.8167 110.871 54.7912C110.931 55.0455 110.737 55.21 110.797 55.4493C110.603 55.6887 110.677 55.7784 110.677 55.7784C110.289 56.272 110.349 57.1845 110.125 57.6781C110.02 57.8426 109.841 58.0072 109.662 58.0819C109.572 58.1567 109.482 58.1567 109.393 58.2465C109.004 58.7401 108.526 59.2187 108.213 59.8021C107.69 60.6996 105.181 62.9882 104.434 63.6314C104.15 63.9604 103.956 64.1998 103.672 64.4391C103.284 64.9327 102.507 65.172 101.969 65.4114C101.88 65.4861 101.79 65.4861 101.79 65.5759C101.223 66.1443 100.61 66.3836 100.102 66.4584C99.9232 66.5332 99.9232 66.623 99.7439 66.6977C100.326 65.9798 100.879 65.4114 101.462 64.7682ZM98.9822 57.8576C98.4594 58.0221 97.9068 58.5008 97.5931 59.0841C97.2795 59.5777 96.9957 59.9068 96.6372 60.1461C96.2638 60.4752 95.8904 60.8043 95.6813 61.2082C95.5469 61.7018 95.5021 62.1206 95.278 62.5245C95.054 63.0181 95.0988 63.3472 95.3228 63.6014C95.6066 64.0203 95.9053 64.3493 96.1891 64.7682C96.4281 64.9327 96.7418 65.0224 97.1152 64.7083C97.4736 64.469 97.7574 64.2147 98.2055 63.9006C98.5789 63.5715 98.9523 63.1677 99.3257 62.8386C100.147 62.2702 100.804 61.627 101.417 60.6398C101.596 60.4752 101.716 60.2359 101.82 60.0714C102.313 59.4132 102.731 58.6803 103.06 57.9324C103.568 57.1994 103.568 56.3618 104.001 55.5391C104.09 55.5391 104.105 55.3745 104.105 55.2998C104.404 52.6522 100.969 56.4066 99.8634 57.3789C99.5946 57.6182 99.3257 57.7828 98.9822 57.8576Z" fill="white" />
                        <path d="M150.811 37.6942C150.751 38.1878 150.497 38.1878 150.542 38.6066C150.587 38.9357 149.407 41.314 149.197 41.6431C148.54 42.9594 147.808 44.2757 147.166 45.577C146.24 47.0579 145.344 48.3592 144.433 49.7503C144.03 50.3187 139.549 55.2249 139.101 55.539C137.936 56.272 135.859 58.3811 134.784 59.0392C134.067 59.4431 131.468 60.3106 130.871 60.3854C129.78 60.4453 128.6 60.52 127.63 60.2508C125.912 59.9816 123.612 57.3789 122.97 55.7036C122.641 54.9557 122.208 54.2826 122.058 53.4599C121.849 52.3829 121.79 50.6478 121.849 49.4063C122.626 42.4658 123.582 41.4935 126.33 34.8222C126.569 34.2538 126.704 33.7602 126.928 33.1769C127.077 32.5935 127.391 32.0251 127.615 31.5315C127.973 30.619 128.317 29.7216 128.66 28.8989C129.288 27.089 131.812 23.9777 129.855 23.5439C129.288 23.4542 128.765 23.529 128.317 23.1101C127.854 22.7811 127.376 22.5118 126.913 22.1827C126.763 22.0182 126.539 21.8537 126.494 21.4348C126.674 21.36 126.853 21.2703 126.928 21.2703C128.122 21.0459 129.228 20.8066 130.438 20.5822C131.214 20.4327 132.051 20.3579 132.887 20.2831C133.231 20.2083 133.589 20.0437 133.798 19.6399C134.127 18.9817 134.605 18.4133 134.859 17.6654C135.874 16.1098 136.636 14.4644 137.726 12.9985C138.712 11.6822 139.668 10.5454 140.878 9.57315C141.072 9.33383 141.356 9.07954 141.535 8.915C141.894 8.67568 142.252 8.51114 142.655 8.60089C143.133 8.78038 143.671 8.54105 144.254 8.54105C144.343 8.54105 144.343 8.54105 144.433 8.46626C145.628 8.24189 145.986 8.73551 146.225 9.64794C146.554 10.4856 146.628 11.3083 146.509 12.2955C146.449 12.7891 146.494 13.2079 146.524 13.6268C146.569 13.9558 146.524 14.3747 146.389 14.7785C146.255 15.1824 146.136 15.6012 145.986 16.0948C145.747 16.753 145.508 17.4111 145.269 18.0693C145.239 18.3236 145.224 18.4881 145.105 18.7274C145.344 18.892 145.583 18.9069 145.926 18.9069C146.942 18.8321 148.032 18.7723 149.033 18.7125C150.452 18.7274 151.961 18.7574 153.365 18.7723C153.858 18.7873 154.35 18.9518 154.918 19.0416C154.724 19.2809 154.619 19.4454 154.53 19.5352C154.35 19.6997 154.082 19.8642 153.902 19.939C153.29 20.1784 152.588 20.4925 151.976 20.7318C151.961 20.8066 151.886 20.8066 151.886 20.8066C150.96 20.8664 149.914 21.2703 148.914 21.1806C148.331 21.1656 147.734 21.2404 147.136 21.4049C146.778 21.5695 146.36 21.5545 146.016 21.6293C145.344 21.7041 144.746 21.7789 144.074 21.8537C143.731 21.9284 143.537 22.1678 143.328 22.5118C143.238 22.5866 143.223 22.6763 143.133 22.7511C141.819 25.5483 140.191 28.1659 138.787 30.8733C138.578 31.2024 138.384 31.5315 138.264 31.7708C137.756 32.5935 137.338 33.3264 136.98 34.2389C136.651 34.9718 136.143 35.7197 135.65 36.3629C135.247 36.9313 135.247 37.6792 134.769 38.2626C133.619 40.3118 131.827 46.5792 131.632 49.7204C131.573 51.0367 131.767 52.2932 132.036 53.5347C132.155 53.9535 132.469 54.2078 132.678 54.5369C132.768 54.5369 132.827 54.6266 133.007 54.6266C133.753 54.6416 135.247 54.7463 136.054 54.2527C136.591 53.9236 139.31 51.979 139.862 51.5752C141.251 50.3486 144.433 47.3421 145.448 45.6967C146.36 44.3056 146.987 42.4957 147.883 41.1794C148.316 40.3567 149.347 38.5468 149.87 37.6493C150.288 37.769 150.915 37.4548 150.811 37.6942ZM139.265 25.279C140.325 23.2298 140.773 21.5844 137.816 23.2747C136.591 25.9821 136.039 27.8817 135.008 30.4395C132.394 37.2753 135.65 32.1896 137.159 29.1532C137.906 27.5676 138.339 26.7599 139.265 25.279ZM142.909 15.8106C143.029 15.4816 143.163 15.0627 143.283 14.6589C143.447 14.0007 143.686 13.3426 143.835 12.6844C144 11.9365 144 11.2036 144 10.4557C143.955 10.1266 143.716 10.0369 143.522 10.2014C143.163 10.4407 142.894 10.6053 142.685 11.0241C142.282 11.6822 141.864 12.4152 141.61 13.1631C141.505 13.4024 141.311 13.6567 141.192 13.896C141.012 14.2101 140.803 14.5392 140.594 14.958C140.34 15.7807 140.071 16.6782 139.713 17.5906C139.13 19.7296 141.461 19.8493 142.133 18.3684C142.387 17.5458 142.64 16.7231 142.909 15.8106Z" fill="white" />
                        <path d="M158.369 38.0682C158.354 38.2327 158.16 38.3973 157.995 38.472C157.906 38.5468 157.726 38.6366 157.697 38.8759C157.577 39.205 157.487 39.2947 157.219 39.3695C157.039 39.4443 157.039 39.5341 156.89 40.0277C157.054 40.0277 157.144 40.0277 157.219 40.1174C157.219 40.1174 157.219 40.1174 157.204 40.1922C157.039 40.1922 156.875 40.1922 156.621 40.1773C156.726 39.9379 156.756 39.6836 156.785 39.5191C156.696 39.5191 156.621 39.5191 156.621 39.5191C156.472 40.0875 156.322 40.6709 156.173 41.2542C156.337 41.344 156.412 41.4188 156.487 41.4188C156.502 42.0021 156.442 42.4957 156.382 43.0791C156.322 43.6625 156.427 44.1561 156.546 44.5749C156.756 44.904 157.219 46.7438 157.428 47.0729C158.458 48.2396 159.713 49.7504 161.042 49.8551C161.445 49.9448 163.91 49.5709 164.343 49.4961C166.404 48.9426 168.451 47.8956 170.437 46.5194C171.976 45.4724 173.454 44.2458 174.993 43.109C175.082 43.0342 175.172 42.9445 175.276 42.8697C175.844 42.3013 176.397 41.8077 176.964 41.2393C177.98 40.3418 178.921 39.4443 179.787 38.3823C180.086 37.9635 180.385 37.5596 180.892 37.41C180.639 38.1579 180.4 38.8161 179.996 39.4742C179.892 39.7136 179.698 39.9678 179.503 40.1324C178.936 40.7008 178.458 41.1944 178.055 41.8526C177.771 42.1816 177.397 42.5107 177.114 42.8248C177.024 42.8996 176.919 43.0641 176.725 43.3184C176.979 43.2436 177.158 43.1539 177.412 43.0791C177.278 43.5727 176.845 43.6475 176.71 44.0663C176.785 44.1411 176.77 44.2309 176.934 44.3206C176.636 44.7245 176.352 44.9788 175.993 45.2929C175.441 45.6968 174.888 46.1904 174.41 46.669C173.559 47.4768 172.663 48.1349 171.751 48.7781C171.303 49.1072 170.93 49.4213 170.482 49.6756C170.123 49.9149 169.765 50.0794 169.406 50.3188C168.884 50.5581 168.346 50.7974 167.808 51.1265C166.912 51.6052 165.956 52.009 165.015 52.1586C164.761 52.2334 164.492 52.3231 164.239 52.3979C163.208 52.712 162.177 52.8616 161.177 52.9364C159.997 53.086 155.172 52.0988 154.127 51.665C151.334 50.4684 150.915 49.0473 149.706 47.8657C149.243 47.4468 148.914 46.7737 148.735 46.1156C148.436 45.0386 148.481 43.8719 148.541 42.6453C148.824 40.0875 149.78 37.6194 151.125 35.3159C151.423 34.8223 151.423 34.8223 151.438 34.0744C150.99 34.3137 150.721 34.4783 150.497 34.9719C150.169 35.7048 149.75 36.363 149.258 37.1109C149.347 36.363 149.736 35.8843 150.049 35.301C150.886 33.8201 151.797 32.429 152.857 31.1277C153.933 29.7366 155.068 28.51 156.367 27.3732C157.682 26.1467 159.056 25.0996 160.475 24.2919C160.818 24.1273 161.087 24.0526 161.356 23.888C161.789 23.7235 162.222 23.6487 162.416 24.0675C162.64 24.3218 162.984 24.247 163.133 24.4115C163.357 24.5761 163.417 24.9052 163.566 25.0847C164.358 25.5184 167.435 26.386 168.122 26.8946C168.346 27.0591 168.48 27.4031 168.615 27.7322C168.943 28.4801 169.182 29.3178 169.72 29.8114C169.87 29.9759 169.914 30.305 169.974 30.5593C170.034 31.5465 170.004 32.4589 169.645 33.5359C169.347 34.6877 168.719 35.7497 168.032 36.7369C167.629 37.3053 167.241 37.7989 166.912 38.4571C166.688 39.0255 166.285 39.5191 165.896 40.1025C165.493 40.7606 164.851 41.1645 164.254 41.3141C163.731 41.5534 163.133 41.6282 162.64 41.5384C162.401 41.4487 162.148 41.5384 162.013 41.1944C162.028 41.1196 161.938 41.1047 161.938 41.1047C161.266 41.1794 160.923 40.4315 160.46 40.1773C160.385 40.0875 160.325 39.8482 160.34 39.7584C160.549 39.4294 160.4 39.2648 160.34 39.0105C160.086 38.3374 159.832 37.5895 159.489 36.9314C159.429 36.6771 159.19 36.6023 158.906 36.8416C158.802 37.2455 158.428 37.5746 158.369 38.0682ZM149.601 45.3826C149.661 45.6369 149.721 45.8015 149.78 46.0408C149.75 46.2951 149.989 46.4596 149.78 46.7887C149.706 46.6989 149.631 46.6989 149.631 46.6242C149.302 45.7865 149.258 44.7095 149.213 43.6326C149.138 43.5428 149.228 43.468 149.243 43.3783C149.377 42.1368 149.511 40.985 149.989 39.7435C150.094 39.5042 150.213 39.2499 150.243 39.0105C150.258 38.846 150.273 38.7563 150.303 38.4272C150.004 38.9208 149.795 39.2499 149.676 39.5789C149.541 39.9978 149.422 40.3268 149.302 40.7307C148.72 42.8697 148.585 44.8591 149.302 46.6092C149.437 46.9383 149.661 47.1926 149.87 47.5216C150.019 47.6862 150.169 47.7759 150.423 47.8657C150.408 47.9405 150.512 47.8657 150.676 47.8657C150.467 47.4468 150.258 47.1178 150.139 46.6989C149.945 46.2053 150.004 45.6968 149.795 45.2929C149.706 45.2929 149.601 45.3826 149.601 45.3826ZM150.199 40.0875C149.631 41.4038 149.571 42.6453 149.601 43.8868C149.586 43.9616 149.676 43.9616 149.75 44.0514C149.93 43.1389 150.109 42.3163 150.288 41.4936C150.438 40.9102 150.587 40.3418 150.393 39.8332C150.303 39.923 150.213 40.0127 150.199 40.0875ZM155.889 42.2415C155.874 42.3163 155.874 42.3163 155.874 42.406C155.874 42.3312 155.874 42.3312 155.889 42.2415ZM161.46 33.6406C161.266 33.8799 160.982 34.209 160.773 34.5381C160.37 35.1065 160.415 35.5253 160.803 35.7796C161.042 35.9442 161.356 36.1236 161.49 36.363C161.923 36.9463 162.596 36.8715 163.283 36.8117C163.88 36.6472 164.373 36.0788 164.761 35.5104C165.508 34.1193 165.867 33.865 166.524 32.4739C168.212 29.3477 165.463 30.0507 164.104 31.0379C163.103 31.6811 162.312 32.7431 161.46 33.6406Z" fill="white" />
                        <path d="M189.854 41.1945C190.332 39.953 193.902 34.1343 194.604 33.1471C195.186 32.4142 195.769 31.6812 196.276 30.8585C196.844 30.2004 197.442 29.4674 197.845 28.8093C198.248 28.2409 198.786 27.9118 199.294 27.837C199.876 27.852 200.384 27.7772 200.892 27.7772C201.892 27.7921 202.4 28.54 202.774 29.632C202.759 29.7068 202.759 29.7965 202.729 29.9611C202.774 31.038 202.893 32.2048 202.923 33.3565C202.968 34.4335 202.759 35.5853 202.639 36.6622C202.55 37.4101 202.55 38.158 202.385 38.891C202.774 39.1453 202.654 39.4743 202.744 39.3995C202.923 39.235 203.491 39.4893 203.67 39.3397C203.774 39.1752 203.954 39.1004 204.043 38.9358C204.402 38.6965 204.76 38.4572 205.149 38.0384C205.447 37.6345 205.701 37.6345 205.985 38.0533C205.955 38.3076 205.851 38.5469 205.582 38.7115C205.492 38.7863 205.388 38.9508 205.283 39.1153C205.178 39.3696 204.969 39.609 204.715 39.6837C204.626 39.7585 204.536 39.8483 204.432 39.9231C204.342 39.9979 204.163 40.0876 204.148 40.1624C204.058 40.2372 203.969 40.2372 203.879 40.3269C203.506 40.656 203.252 40.7308 202.908 40.7308C202.819 40.7308 202.475 40.8056 202.117 41.0449C201.848 41.2095 201.594 41.2095 201.444 41.03C200.892 40.6859 200.324 40.5962 199.772 40.3419C198.801 40.0726 198.144 39.1602 197.86 37.9935C197.531 36.4977 197.71 34.8523 198.144 33.2817C198.397 32.5338 198.472 31.8757 198.621 31.2175C198.756 30.7239 198.905 30.2303 199.04 29.7367C199.249 29.4076 199.279 29.1683 199.219 28.8242C199.129 28.8242 198.98 28.7345 198.965 28.899C198.875 28.9738 198.681 29.1384 198.592 29.3029C198.188 29.9611 197.695 30.6192 197.188 31.3521C196.889 31.756 196.665 32.2496 196.515 32.833C196.56 33.1621 196.276 33.4014 196.172 33.6557C195.261 35.0468 194.439 36.3631 193.767 37.9187C193.215 39.0705 192.527 40.0577 191.9 41.1945C190.959 42.9147 189.854 44.4703 189.062 46.2802C188.823 46.8486 188.42 47.5068 188.091 48.1649C187.867 48.6585 185.328 52.5925 184.791 52.9963C184.776 53.1609 184.507 53.2357 184.328 53.4002C183.163 54.7913 182.012 54.6866 180.713 54.3426C180.534 54.5071 180.384 54.3426 180.235 54.1631C178.936 53.819 178.413 52.5626 178.263 50.9022C178.174 49.4962 178.338 48.0004 178.502 46.5943C178.831 44.4404 179.16 42.3014 179.563 40.1624C180.25 37.7691 179.891 37.9337 180.818 35.7199C181.773 32.5039 181.37 32.9975 182.909 29.7965C183.058 29.2132 183.431 28.8093 183.67 28.2409C184.417 26.76 185.074 25.4437 185.881 24.1424C186.344 23.0804 186.687 22.9158 187.509 23.0953C188.091 23.1103 188.823 23.2748 189.555 23.4543C190.048 23.5441 190.526 23.7236 191.138 24.3069C191.601 25.3839 192.348 26.1468 193.08 27.149C193.678 28.4802 193.737 29.4824 193.065 31.038C192.468 32.6834 192.438 31.4419 191.825 33.177C190.347 36.6323 188.047 39.3248 186.762 42.451C185.074 46.4148 189.361 42.5856 189.854 41.1945Z" fill="white" />
                        <path d="M73.569 83.0768C73.3599 83.0768 73.1807 83.1366 73.0313 83.2563C72.8969 83.376 72.8222 83.5405 72.8222 83.7499C72.8222 83.9593 72.882 84.1388 73.0164 84.2735C73.1508 84.4081 73.3151 84.5128 73.5242 84.5726C73.7333 84.6474 73.9574 84.7072 74.2113 84.7671C74.4652 84.8269 74.7191 84.9166 74.9581 85.0064C75.212 85.0961 75.4361 85.2158 75.6452 85.3504C75.8543 85.4851 76.0186 85.6795 76.153 85.9188C76.2725 86.1582 76.3472 86.4573 76.3472 86.8013C76.3472 87.3997 76.1082 87.9232 75.6153 88.342C75.1224 88.7758 74.4801 88.9852 73.6885 88.9852C72.882 88.9852 72.2397 88.7908 71.7618 88.4018C71.2689 88.0129 71.0299 87.4745 71.0299 86.7565H72.867C72.9118 87.3249 73.2106 87.6091 73.7333 87.6091C73.9872 87.6091 74.1814 87.5492 74.3158 87.4146C74.4503 87.28 74.5249 87.1155 74.5249 86.921C74.5249 86.7116 74.4652 86.5471 74.3308 86.4274C74.1964 86.2928 74.0321 86.203 73.8229 86.1282C73.6138 86.0535 73.3898 85.9787 73.1359 85.9188C72.882 85.859 72.628 85.7692 72.3891 85.6795C72.1352 85.5898 71.9111 85.4701 71.702 85.3355C71.4929 85.2008 71.3286 85.0213 71.1942 84.7671C71.0598 84.5277 71 84.2286 71 83.8846C71 83.2264 71.239 82.6879 71.7319 82.299C72.2248 81.8951 72.8521 81.7007 73.6138 81.7007C74.3756 81.7007 75.0029 81.8802 75.4659 82.2242C75.9439 82.5682 76.1829 83.1217 76.1978 83.8696H74.3158C74.286 83.6153 74.2113 83.4208 74.0619 83.2713C73.9574 83.1366 73.7781 83.0768 73.569 83.0768Z" fill="white" />
                        <path d="M81.8586 83.1218V81.8055H87.4597V83.1218H85.518V88.9256H83.7854V83.1218H81.8586Z" fill="white" />
                        <path d="M93.1057 86.0536V81.8055H94.8382V86.0536C94.8382 86.4874 94.9428 86.8015 95.1519 87.0408C95.361 87.2652 95.6747 87.3849 96.078 87.3849C96.4812 87.3849 96.7949 87.2652 97.004 87.0408C97.2131 86.8165 97.3326 86.4874 97.3326 86.0536V81.8055H99.0652V86.0536C99.0652 86.6819 98.9158 87.2203 98.632 87.684C98.3333 88.1328 97.9749 88.4768 97.5118 88.6862C97.0637 88.8956 96.5709 89.0003 96.0481 89.0003C95.2266 89.0003 94.5246 88.7461 93.957 88.2225C93.3894 87.714 93.1057 86.981 93.1057 86.0536Z" fill="white" />
                        <path d="M107.668 81.8055C108.803 81.8055 109.729 82.1346 110.461 82.7927C111.193 83.4509 111.552 84.3035 111.552 85.3505C111.552 86.3976 111.193 87.2652 110.461 87.9233C109.729 88.5815 108.803 88.9105 107.668 88.9105H105.174V81.7905H107.668V81.8055ZM106.891 87.6092H107.668C108.325 87.6092 108.848 87.4147 109.222 86.9959C109.595 86.592 109.789 86.0536 109.789 85.3655C109.789 84.6774 109.595 84.1389 109.222 83.7351C108.848 83.3312 108.325 83.1218 107.668 83.1218H106.891V87.6092Z" fill="white" />
                        <path d="M117.287 88.9256V81.8055H119.02V88.9256H117.287Z" fill="white" />
                        <path d="M125.816 87.9681C125.114 87.2801 124.755 86.4125 124.755 85.3505C124.755 84.3034 125.114 83.4209 125.816 82.7478C126.518 82.0597 127.384 81.7157 128.4 81.7157C129.415 81.7157 130.282 82.0597 130.984 82.7478C131.686 83.4359 132.029 84.3034 132.029 85.3505C132.029 86.4125 131.671 87.2801 130.969 87.9681C130.267 88.6562 129.401 89.0002 128.385 89.0002C127.384 89.0002 126.518 88.6562 125.816 87.9681ZM129.759 86.8313C130.103 86.4574 130.267 85.9638 130.267 85.3355C130.267 84.7222 130.103 84.2137 129.759 83.8397C129.415 83.4658 128.967 83.2863 128.385 83.2863C127.817 83.2863 127.354 83.4658 127.026 83.8397C126.682 84.2137 126.518 84.7073 126.518 85.3355C126.518 85.9638 126.682 86.4574 127.026 86.8313C127.369 87.2053 127.817 87.3848 128.385 87.3848C128.967 87.3848 129.415 87.2053 129.759 86.8313Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="206" height="89" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
            <div className="cart">
                <div className="cart__icon">
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7916 21.8674C21.1808 21.8674 19.875 23.1732 19.875 24.784C19.875 26.3948 21.1808 27.7007 22.7916 27.7007C24.4025 27.7007 25.7083 26.3948 25.7083 24.784C25.7083 23.1732 24.4025 21.8674 22.7916 21.8674ZM22.7916 21.8674H8.74393C8.01819 21.8674 7.40289 21.3337 7.30026 20.6153L6.85413 17.4924M0.916626 1.45068H4.56246L4.97913 4.36735M4.97913 4.36735H5.29163H28.625L24.25 17.4924H7.47913H6.85413M4.97913 4.36735L6.85413 17.4924M14.0416 24.784C14.0416 26.3948 12.7358 27.7007 11.125 27.7007C9.51413 27.7007 8.20829 26.3948 8.20829 24.784C8.20829 23.1732 9.51413 21.8674 11.125 21.8674C12.7358 21.8674 14.0416 23.1732 14.0416 24.784Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="cart__badge">0</div>
                </div>

            </div>
        </header>
    )
})


