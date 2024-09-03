import video2 from './Pics/video2.mp4';
import React, { useState, useEffect } from 'react';
import './Ecommmerce.css';
import img1 from './Pics/img1.webp';
import img2 from './Pics/img2.webp';
import img3 from './Pics/img3.webp';
import img4 from './Pics/img4.webp';
import img5 from './Pics/img5.webp';
import img6 from './Pics/img6.webp';
import popular1 from './Pics/popular1.webp';
import popular2 from './Pics/popular2.webp';
import popular3 from './Pics/popular3.webp';
import popular4 from './Pics/popular4.webp';
import popular5 from './Pics/popular5.webp';
import popular7 from './Pics/popular7.webp';
import popular8 from './Pics/popular8.webp';
import popular9 from './Pics/popular9.webp';
import popular10 from './Pics/popular10.webp';
import popular11 from './Pics/popular11.webp';
import gif1 from './Pics/gif1.gif';
import sale1 from './Pics/sale1.webp';
import sale2 from './Pics/sale2.webp';
import sale3 from './Pics/sale3.webp';
import sale4 from './Pics/sale4.webp';
import sale5 from './Pics/sale5.webp';
import shop1 from './Pics/shop1.webp';
import shop2 from './Pics/shop2.webp';
import shop3 from './Pics/shop3.webp';
import shop4 from './Pics/shop4.webp';
import shop5 from './Pics/shop5.webp';
import shop6 from './Pics/shop6.webp';
import main1 from './Pics/main1.webp';
import spotlight1 from './Pics/spotlight1.webp';
import spotlight2 from './Pics/spotlight2.webp';
import spotlight3 from './Pics/spotlight3.webp';
import spotlight4 from './Pics/spotlight4.webp';
import spotlight5 from './Pics/spotlight5.webp';
import spotlight6 from './Pics/spotlight6.webp';
import slide1 from './Pics/slide1.webp';
import slide2 from './Pics/slide2.webp';
import slide3 from './Pics/slide3.webp';
import slide4 from './Pics/slide4.webp';
import explore1 from './Pics/explore1.webp';
import explore2 from './Pics/explore2.webp';
import explore3 from './Pics/explore3.webp';
import explore4 from './Pics/explore4.webp';
import explore5 from './Pics/explore5.webp';
import explore6 from './Pics/explore6.webp';
import brand1 from './Pics/brand1.webp';
import brand2 from './Pics/brand2.webp';
import brand3 from './Pics/brand3.webp';
import brand4 from './Pics/brand4.webp';
import brand5 from './Pics/brand5.webp';
import brand6 from './Pics/brand6.webp';
import brand7 from './Pics/brand7.webp';
import brand8 from './Pics/brand8.webp';
import brand9 from './Pics/brand9.webp';
import brand10 from './Pics/brand10.webp';
import brand11 from './Pics/brand11.webp';
import brand12 from './Pics/brand12.webp';
import logo from './Pics/whitelogo.png';
import {Link} from 'react-router-dom'

function FirstSection(){
  return (
    <section className="firstsec">
      <Link to='/'>
      <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="icons1">
        {/* <a href="">
          <svg style={{ margin: '4px' }} width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_0_1" fill="white">
            </mask>
              <path d="M9.57372 0.000383932C9.683 0.00107673 9.79227 0.00176954 9.90486 0.00248333C10.7582 0.0195964 11.4654 0.128099 12.2528 0.44931C12.3466 0.484781 12.4405 0.520253 12.5371 0.556799C14.1806 1.24128 15.4046 2.54917 16.0606 4.0913C16.3458 4.86939 16.4355 5.57993 16.421 6.39916C16.4214 6.50003 16.4217 6.6009 16.4221 6.70483C16.418 7.22133 16.3907 7.65507 16.1694 8.13795C16.2358 8.13636 16.3022 8.13477 16.3705 8.13313C16.6729 8.1268 16.9753 8.12287 17.2778 8.11898C17.3822 8.11644 17.4866 8.1139 17.5942 8.11128C18.5868 8.1017 18.5868 8.1017 18.9981 8.44145C19.0946 8.71047 19.1265 8.89474 19.1413 9.17293C19.1482 9.2947 19.1482 9.2947 19.1552 9.41893C19.1594 9.50324 19.1637 9.58755 19.1681 9.67442C19.1728 9.7599 19.1775 9.84538 19.1824 9.93346C19.1939 10.1443 19.2048 10.3551 19.2157 10.5659C19.3275 10.5881 19.4393 10.6103 19.5544 10.6331C21.678 11.0757 22.9315 11.9977 24.0977 13.6953C24.3018 13.9998 24.503 14.3058 24.7031 14.6126C24.7723 14.7173 24.8415 14.822 24.9128 14.9299C24.9781 15.0297 25.0434 15.1295 25.1106 15.2322C25.1696 15.3222 25.2286 15.4122 25.2893 15.5049C25.417 15.7254 25.417 15.7254 25.417 15.9278C25.4776 15.9292 25.5382 15.9306 25.6006 15.9321C26.2803 15.9716 26.7517 16.1153 27.2666 16.5348C27.9252 17.2795 28.0141 17.9562 27.9984 18.896C27.9986 19.0847 27.9986 19.0847 27.9987 19.2773C27.9982 19.5415 27.9961 19.8056 27.9925 20.0698C27.989 20.3407 27.987 20.611 27.988 20.8819C27.9894 21.2738 27.9877 21.6655 27.9848 22.0574C27.985 22.1788 27.9852 22.3002 27.9854 22.4253C27.9833 22.5374 27.9812 22.6496 27.9791 22.7652C27.9781 22.8639 27.9771 22.9626 27.9761 23.0643C27.9193 23.3129 27.9193 23.3129 27.7235 23.4963C27.4335 23.6418 27.1747 23.6538 26.849 23.6686C26.135 23.6815 26.135 23.6815 25.5556 24.0088C25.4534 24.2418 25.4534 24.2418 25.3839 24.4882C25.235 24.9626 24.8767 25.309 24.4315 25.5674C23.5084 26.0068 22.5192 26.084 21.5042 25.8776C20.5863 25.5699 20.0256 25.0103 19.6105 24.2029C19.5421 24.0211 19.5421 24.0211 19.5421 23.7176C16.0237 23.7176 12.5052 23.7176 8.88015 23.7176C8.8263 24.018 8.8263 24.018 8.77135 24.3246C8.35439 25.023 7.69545 25.6353 6.87083 25.8919C5.87704 26.0772 4.84802 26.0631 3.98436 25.5386C3.27393 25.0929 2.94609 24.5643 2.67881 23.8187C2.54376 23.815 2.4087 23.8112 2.26955 23.8073C2.09092 23.8006 1.91228 23.7939 1.73365 23.7871C1.64481 23.7848 1.55596 23.7826 1.46443 23.7802C0.903193 23.757 0.484304 23.7003 0.0677223 23.3129C0.0560295 23.1231 0.0520429 22.9329 0.0509786 22.7427C0.050043 22.6189 0.0491073 22.4951 0.0481432 22.3675C0.0476606 22.229 0.047193 22.0905 0.0467388 21.952C0.0458796 21.8071 0.0449799 21.6622 0.0440428 21.5173C0.0411859 21.0403 0.0395243 20.5633 0.0379735 20.0863C0.0373906 19.9223 0.036806 19.7583 0.0362188 19.5943C0.0338651 18.9122 0.0318259 18.2302 0.0306019 17.5481C0.0288345 16.5696 0.0252245 15.5911 0.0190261 14.6125C0.0148199 13.9251 0.012691 13.2377 0.0121152 12.5503C0.0117171 12.1394 0.0104033 11.7286 0.00688178 11.3177C0.00361619 10.9312 0.00292028 10.5447 0.00420406 10.1581C0.00422814 10.0162 0.00331918 9.87426 0.00141263 9.73235C-0.00104758 9.53869 0.000168826 9.345 0.00157449 9.15134C0.00121436 9.04292 0.000854022 8.9345 0.00048298 8.8228C0.0677221 8.54262 0.0677225 8.54262 0.326877 8.30511C0.642383 8.11994 0.796299 8.09003 1.1646 8.09843C1.26593 8.09974 1.36725 8.10104 1.47165 8.10239C1.57606 8.10578 1.68047 8.10917 1.78805 8.11266C1.89456 8.11449 2.00108 8.11631 2.11082 8.11819C2.37279 8.12295 2.63454 8.12959 2.8964 8.13795C2.87343 8.04216 2.87343 8.04216 2.85 7.94444C2.44936 6.19664 2.64774 4.50606 3.6449 2.94834C4.98218 1.05868 7.15231 -0.0233974 9.57372 0.000383932ZM5.37575 3.53923C5.04505 3.96155 4.831 4.41235 4.63713 4.90063C4.61034 4.96805 4.58356 5.03547 4.55596 5.10494C3.93884 6.98476 5.00232 8.89416 5.91138 10.5285C6.23447 11.0816 6.61662 11.5856 7.03063 12.0834C7.11001 12.1831 7.18938 12.2827 7.27117 12.3854C7.84177 13.0742 8.46711 13.6671 9.34763 13.9985C9.93628 14.0127 10.4284 13.6878 10.8606 13.3377C10.9727 13.2374 11.0832 13.1353 11.1921 13.0319C11.2518 12.9754 11.3116 12.919 11.3732 12.8609C13.0245 11.2427 14.6603 8.70354 14.7691 6.42129C14.7082 5.08908 14.1867 3.79735 13.1232 2.8773C11.8324 1.86726 10.4612 1.5091 8.80169 1.63431C7.36627 1.80219 6.2938 2.54101 5.37575 3.53923ZM1.69965 9.75661C1.69965 13.8296 1.69965 17.9025 1.69965 22.0989C2.70977 22.2162 2.70977 22.2162 3.0137 21.8954C3.07681 21.7614 3.07681 21.7614 3.14119 21.6247C3.51855 20.9268 3.9612 20.5884 4.74592 20.2779C5.72711 19.9991 6.66709 20.1875 7.5746 20.5814C8.17535 20.9214 8.55133 21.4851 8.77135 22.0989C11.6076 22.0989 14.4439 22.0989 17.3662 22.0989C17.3662 18.026 17.3662 13.953 17.3662 9.75661C16.7558 9.75661 16.1455 9.75661 15.5167 9.75661C15.382 10.0049 15.2474 10.2532 15.1087 10.509C14.0572 12.3839 12.515 14.6365 10.2945 15.4219C9.47177 15.607 8.81058 15.4621 8.07098 15.084C5.97238 13.805 4.69464 11.7714 3.54918 9.75661C2.93883 9.75661 2.32849 9.75661 1.69965 9.75661ZM19.1069 12.2858C19.1069 15.5241 19.1069 18.7624 19.1069 22.0989C19.2864 22.0989 19.4659 22.0989 19.6509 22.0989C19.676 22.0464 19.7011 21.9938 19.727 21.9396C20.1365 21.1253 20.7197 20.5805 21.6364 20.2526C22.6951 20.0557 23.6251 20.1758 24.5548 20.7114C25.0707 21.085 25.3538 21.5573 25.6346 22.0989C25.8501 22.0989 26.0655 22.0989 26.2874 22.0989C26.2928 21.5751 26.2967 21.0513 26.2994 20.5274C26.3005 20.3493 26.3019 20.1713 26.3038 19.9932C26.3065 19.7368 26.3077 19.4804 26.3087 19.224C26.3098 19.1447 26.3109 19.0654 26.3121 18.9838C26.3122 18.4769 26.2781 18.0868 25.9266 17.6871C25.6997 17.5128 25.587 17.5078 25.2956 17.5059C25.2059 17.5045 25.1162 17.5032 25.0237 17.5018C24.9272 17.5018 24.8306 17.5018 24.7311 17.5018C24.6315 17.5004 24.5318 17.4991 24.4291 17.4977C24.1102 17.4936 23.7913 17.4914 23.4723 17.4895C23.1542 17.4871 22.836 17.4843 22.5179 17.4802C22.3199 17.4778 22.1219 17.4763 21.924 17.4758C21.4448 17.4704 21.0659 17.4519 20.6301 17.2429C20.5077 16.4842 20.5077 16.4842 20.6301 16.0289C21.9764 15.9788 21.9764 15.9788 23.3499 15.9278C22.7334 14.4944 21.8193 13.1646 20.2841 12.4842C19.8589 12.3245 19.5742 12.2858 19.1069 12.2858ZM4.85472 21.9977C4.51871 22.3431 4.39078 22.6085 4.37194 23.0663C4.39327 23.4596 4.46469 23.7145 4.74592 24.0211C5.09408 24.2596 5.40094 24.3963 5.83388 24.4257C6.40122 24.3048 6.82848 24.0783 7.17342 23.6354C7.2847 23.3061 7.28643 23.0494 7.24822 22.7059C6.88102 22.0903 6.88102 22.0903 6.26354 21.733C5.69889 21.6731 5.33525 21.6756 4.85472 21.9977ZM21.2828 22.4024C21.1516 22.7686 21.1389 23.0289 21.174 23.4141C21.4691 23.9236 21.7527 24.2402 22.3504 24.4131C22.9075 24.4334 23.3008 24.2498 23.7171 23.9136C24.0355 23.5606 24.0399 23.2875 24.0329 22.8395C23.9855 22.471 23.8321 22.2696 23.5675 21.9977C22.6913 21.4664 21.939 21.6638 21.2828 22.4024Z"></path>
              <path d="M8.62723 5.9582L8.6158 5.96969L8.60859 5.98419C8.45623 6.29063 8.47045 6.50913 8.50106 6.82315L8.50348 6.84794L8.51724 6.8687C8.69345 7.1345 8.83097 7.33549 9.14094 7.49134L9.15685 7.49934L9.17455 7.50135C9.38693 7.52553 9.55501 7.54088 9.71549 7.5114C9.88014 7.48115 10.0283 7.40577 10.2099 7.26684L10.2208 7.25848L10.2291 7.24749C10.3343 7.10744 10.4181 6.99497 10.4731 6.87074C10.5298 6.7426 10.554 6.60735 10.554 6.42108V6.40227L10.5471 6.38475C10.4719 6.19185 10.4084 6.04322 10.3164 5.91323C10.2229 5.78121 10.1038 5.6736 9.92436 5.55329L9.90407 5.53968L9.87978 5.53697C9.6076 5.50656 9.39343 5.50664 9.19506 5.57079C8.9956 5.6353 8.82357 5.76076 8.62723 5.9582ZM7.60545 5.01277C8.42277 4.12269 9.53091 3.83694 10.6573 4.36393C11.2247 4.69706 11.5807 5.13886 11.8208 5.76244C11.9848 6.57876 11.9051 7.19752 11.4797 7.90533C11.1202 8.41714 10.6584 8.75559 10.0493 8.87242C9.24535 8.95487 8.6361 8.86784 7.9803 8.40276C7.49944 7.9711 7.18768 7.4708 7.10527 6.82847C7.07146 6.11765 7.1957 5.58826 7.60545 5.01277Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> 
          </svg>
        </a> */}
        <a href="">
          <svg style={{ margin: '4px' }} width="21" height="21" viewBox="0 0 22 24" fill="none" xmlns="https://www.w3.org/2000/svg">
            <path d="M20.9993 17.4768V20.7852C21.0005 21.0926 20.9431 21.397 20.8309 21.6786C20.7187 21.9603 20.5541 22.2131 20.3477 22.4208C20.1413 22.6285 19.8976 22.7865 19.6323 22.8846C19.367 22.9828 19.086 23.0189 18.8072 22.9907C15.7131 22.6203 12.7412 21.4578 10.1305 19.5966C7.70092 17.9011 5.64116 15.6387 4.09754 12.9701C2.39715 10.0895 1.33852 6.80939 1.00746 3.39558C0.983467 3.09069 1.0175 2.78365 1.1074 2.49399C1.1973 2.20433 1.3411 1.93839 1.52965 1.71309C1.7182 1.48778 1.94737 1.30804 2.20259 1.18529C2.45781 1.06254 2.7335 0.999475 3.01211 1.0001H6.02411C6.51186 0.994954 6.98463 1.18499 7.35415 1.53471C7.72367 1.88444 7.96465 2.36994 8.03211 2.90056C8.16015 3.96107 8.39704 5.00226 8.73825 6.00426C8.87356 6.39913 8.90292 6.82835 8.82284 7.241C8.74276 7.65365 8.5566 8.03241 8.28645 8.33235L7.0136 9.73532C8.44491 12.5003 10.5292 14.7897 13.0465 16.3618L14.3238 14.9588C14.5969 14.6621 14.9417 14.4576 15.3174 14.3697C15.6931 14.2817 16.0839 14.3139 16.4434 14.4626C17.3556 14.8374 18.3036 15.0975 19.2691 15.2382C19.758 15.313 20.2047 15.583 20.5238 15.9966C20.843 16.4102 21.0123 16.9385 20.9993 17.4805V17.4768Z" fill="white" stroke="white" stroke-width="0.5" stroke-miterlimit="10"></path>
          </svg>
        </a>
        <Link to='/sign'>
          <svg style={{ margin: '4px' }} width="21" height="21" viewBox="0 0 22 21" fill="none" xmlns="https://www.w3.org/2000/svg">
            <path d="M20.9937 20.0001H1.25374C1.08374 20.0001 1.02374 19.9401 1.00374 19.7901C0.998755 19.7269 0.998755 19.6633 1.00374 19.6001C1.00374 18.8101 1.00374 18.0201 1.06374 17.2301C1.12356 16.4634 1.39726 15.7289 1.85374 15.1101C2.76259 13.8485 4.06929 12.9293 5.56374 12.5001C6.50291 12.2161 7.48363 12.0944 8.46374 12.1401C8.52069 12.144 8.57416 12.169 8.61374 12.2101C9.0658 12.5325 9.58005 12.7573 10.1237 12.8701C10.662 12.9957 11.22 13.0118 11.7646 12.9173C12.3092 12.8228 12.8293 12.6197 13.2937 12.3201C13.4985 12.1787 13.7456 12.1117 13.9937 12.1301C14.8564 12.1298 15.7148 12.251 16.5437 12.4901C17.677 12.8435 18.7068 13.4682 19.5437 14.3101C20.2418 14.9717 20.7376 15.8178 20.9737 16.7501C20.9786 16.7966 20.9786 16.8436 20.9737 16.8901L20.9937 20.0001ZM20.5837 19.5801C20.5837 19.0101 20.5837 18.4501 20.5837 17.8901C20.5823 17.5208 20.5455 17.1524 20.4737 16.7901C20.2066 15.7668 19.5958 14.8665 18.7437 14.2401C17.3741 13.1199 15.6417 12.5401 13.8737 12.6101C13.7609 12.6189 13.6515 12.653 13.5537 12.7101C12.877 13.1198 12.1128 13.3632 11.3237 13.4201C10.3039 13.4932 9.28745 13.2373 8.42374 12.6901C8.30388 12.617 8.16333 12.5854 8.02374 12.6001C6.75527 12.5787 5.50235 12.8816 4.38374 13.4801C3.39839 13.995 2.58245 14.7832 2.03374 15.7501C1.70136 16.2844 1.52473 16.9009 1.52374 17.5301C1.52374 17.9401 1.52374 18.3501 1.52374 18.7701C1.52374 19.0401 1.52374 19.3101 1.52374 19.5901L20.5837 19.5801Z" fill="white" stroke="white" stroke-width="0.5" stroke-miterlimit="10"></path>
            <path d="M11.0138 1.01009C11.9092 0.951935 12.803 1.14594 13.5938 1.57009C14.1965 1.85736 14.7159 2.29382 15.1027 2.83809C15.4894 3.38236 15.7308 4.0164 15.8038 4.68009C15.9476 5.59831 15.8869 6.53696 15.6259 7.42896C15.3648 8.32097 14.91 9.14429 14.2938 9.84009C13.67 10.6324 12.7832 11.1752 11.7938 11.3701C11.2421 11.4851 10.6717 11.4766 10.1237 11.3452C9.57559 11.2138 9.0634 10.9628 8.62379 10.6101C7.42179 9.69171 6.60529 8.35823 6.33379 6.87009C6.11985 5.93526 6.14738 4.96135 6.41379 4.04009C6.61733 3.36215 6.99049 2.74735 7.49796 2.25388C8.00543 1.76041 8.63042 1.40459 9.31379 1.22009C9.8631 1.04787 10.4391 0.97672 11.0138 1.01009V1.01009ZM11.0138 1.46009C10.5371 1.44274 10.0608 1.50354 9.60379 1.64009C9.02589 1.77174 8.48807 2.04029 8.03561 2.42315C7.58314 2.806 7.22928 3.29195 7.00379 3.84009C6.64342 4.71348 6.55286 5.67478 6.74379 6.60009C6.97156 7.94001 7.65722 9.15937 8.68379 10.0501C9.07404 10.4113 9.54229 10.6776 10.0522 10.8285C10.562 10.9794 11.0998 11.0107 11.6238 10.9201C12.4425 10.7812 13.1898 10.3687 13.7438 9.75009C14.362 9.10904 14.8257 8.33531 15.0995 7.48787C15.3733 6.64044 15.45 5.74168 15.3238 4.86009C15.2654 4.20425 15.0273 3.57721 14.6356 3.04793C14.244 2.51865 13.7139 2.10763 13.1038 1.86009C12.4459 1.57174 11.7316 1.43504 11.0138 1.46009V1.46009Z" fill="white" stroke="white" stroke-width="0.5" stroke-miterlimit="10"></path>
          </svg>
        </Link>
        <Link to="/cart">
          <svg style={{ margin: '4px' }} width="21" height="21" viewBox="0 0 23 22" fill="none" xmlns="https://www.w3.org/2000/svg">
            <path d="M9.57224 20.1282C9.57224 20.3171 9.51644 20.5018 9.41189 20.6589C9.30734 20.8159 9.15874 20.9383 8.98489 21.0106C8.81103 21.0829 8.61972 21.1018 8.43515 21.065C8.25059 21.0281 8.08105 20.9372 7.94799 20.8036C7.81493 20.67 7.72431 20.4998 7.68759 20.3145C7.65088 20.1293 7.66972 19.9372 7.74174 19.7627C7.81375 19.5882 7.9357 19.439 8.09217 19.334C8.24864 19.2291 8.43259 19.1731 8.62078 19.1731C8.87312 19.1731 9.11513 19.2737 9.29356 19.4528C9.472 19.6319 9.57224 19.8749 9.57224 20.1282V20.1282Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M20.0526 20.1282C20.0526 20.3171 19.9968 20.5018 19.8922 20.6589C19.7877 20.8159 19.6391 20.9383 19.4652 21.0106C19.2914 21.0829 19.1001 21.1018 18.9155 21.065C18.7309 21.0281 18.5614 20.9372 18.4283 20.8036C18.2953 20.67 18.2047 20.4998 18.1679 20.3145C18.1312 20.1293 18.1501 19.9372 18.2221 19.7627C18.2941 19.5882 18.416 19.439 18.5725 19.334C18.729 19.2291 18.9129 19.1731 19.1011 19.1731C19.3535 19.1731 19.5955 19.2737 19.7739 19.4528C19.9523 19.6319 20.0526 19.8749 20.0526 20.1282V20.1282Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M1 1H4.81114L7.36529 13.8074C7.45186 14.2475 7.68998 14.643 8.03792 14.9246C8.38585 15.2061 8.8214 15.3558 9.26822 15.3473H18.5291C18.976 15.3558 19.4115 15.2061 19.7594 14.9246C20.1074 14.643 20.3455 14.2475 20.4321 13.8074L21.9565 5.78207H5.76472" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </Link>
      </div>

      <div className="search-container">
        <input type="text1" id="search-input" placeholder="Search..." />
        <button id="search-button">Search</button>
      </div>
    </section>
  );
};


function FooterSection (){
  return (
    <section className="d">
      <div className="BigDiv">
        <div className="SmallDiv">
          <center style={{ background: '#0D1321', fontWeight: 'bold' }}>RESOURCES</center><br />
          <p>FAQs</p>
          <p>Mobile</p>
          <p>Partnership</p>
          <p>News Center</p>
          <p>For developers</p>
          <p>Contact Us</p>
        </div>
        <div className="SmallDiv">
          <center style={{ background: '#0D1321', fontWeight: 'bold' }}>ADOPT OR GET INVOLVED</center><br /><br />
          <p>All Adopt or Get Involved</p>
          <p>Adopting Pets</p>
          <p>Animal Shelters & Rescues</p>
          <p>Other Types of Pets</p>
        </div>
        <div className="SmallDiv">
          <center style={{ background: '#0D1321', fontWeight: 'bold' }}>ABOUT DOGS & PUPPIES</center><br /><br />
          <p>All About Dogs & Puppies</p>
          <p>Dog Adoption</p>
          <p>Dog Breeds</p>
          <p>Feeding Your Dog</p>
          <p>Dog Behavior</p>
          <p>Dog Health & Wellness</p>
          <p>Dog Training</p>
          <p>Other Dog Information</p>
        </div>
        <div className="SmallDiv">
          <center style={{ background: '#0D1321', fontWeight: 'bold' }}>ABOUT CATS & KITTENS</center><br /><br />
          <p>All About Cats & Kittens</p>
          <p>Cat Adoption</p>
          <p>Cat Breeds</p>
          <p>Feeding Your Cat</p>
          <p>Cat Behavior</p>
          <p>Cat Health & Wellness</p>
          <p>Cat Training</p>
          <p>Other Cat Information</p>
        </div>
      </div>
    </section>
  );
};



function NinthSection (){
  return (
    <section className="ninthsec">
      <div className="heading4">
        <center><b><p>Have You Explored?</p></b></center>
      </div>
      <div className="photo-grid3">
        <div className="photo-item3">
          <a href="">
            <img src={explore1} alt="Photo 1" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={explore2} alt="Photo 2" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={explore3} alt="Photo 3" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={explore4} alt="Photo 4" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={explore5} alt="Photo 5" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={explore6} alt="Photo 6" />
          </a>
        </div>
        {/* Add more photo items as needed */}
      </div>
    </section>
  );
};

function TenthSection (){
  return (
    <section className="tenthsec">
      <div className="heading4">
        <center><b><p>Shop By Brand</p></b></center>
      </div>
      <div className="photo-grid3">
        <div className="photo-item3">
          <a href="">
            <img src={brand1} alt="Photo 1" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={brand2} alt="Photo 2" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={brand3} alt="Photo 3" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={brand4} alt="Photo 4" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={brand5} alt="Photo 5" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={brand6} alt="Photo 6" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={brand7} alt="Photo 1" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={brand8} alt="Photo 2" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={brand9} alt="Photo 3" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={brand10} alt="Photo 4" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={brand11} alt="Photo 5" />
          </a>
        </div>
        <div className="photo-item3">
          <a href="">
            <img src={brand12} alt="Photo 6" />
          </a>
        </div>
        {/* Add more photo items as needed */}
      </div>
    </section>
  );
};

function EighthSection (){
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);

  return (
    <section className="eightsec">
      <div className="slider">
        <center>
          <div className="my-slides">
            {[slide1, slide2, slide3, slide4].map((imgSrc, index) => (
              <a href="" key={index}>
                <img
                  className="my-slide"
                  src={imgSrc}
                  alt={`Image #${index + 1}`}
                  style={{ width: '90%', height: 'auto', display: currentSlide === index ? 'block' : 'none' }}
                />
              </a>
            ))}
          </div>
        </center>
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};





function Seventhsection () {
  return (
    <section className="seventhsec">
      <div className="heading3">
        <center><b>In the Spotlight</b></center>
      </div>
      <div className="photo-grid2">
        <div className="photo-item2">
          <Link to="/cart">
            <img src={spotlight1} alt="Photo 1" />
          </Link>
        </div>
        <div className="photo-item2">
          <Link to="/cart">
            <img src={spotlight2} alt="Photo 2" />
          </Link>
        </div>
        <div className="photo-item2">
          <Link to="/cart">
            <img src={spotlight3} alt="Photo 3" />
          </Link>
        </div>
        <div className="photo-item2">
          <Link to="/cart">
            <img src={spotlight4} alt="Photo 4" />
          </Link>
        </div>
        <div className="photo-item2">
          <Link to="/cart">
            <img src={spotlight5} alt="Photo 5" />
          </Link>
        </div>
        <div className="photo-item2">
          <Link to="/cart">
            <img src={spotlight6} alt="Photo 6" />
          </Link>
        </div>
        {/* Add more photo items as needed */}
      </div>
    </section>
  );
};


function SixthSection () {
  return (
    <>
      <section className="sixthsec">
        <div className="heading2">
          <center><b>Shop by Pet</b></center>
        </div>
        <div className="photo-grid1">
          <div className="photo-item1">
            <a href="">
              <img src={shop1} alt="Photo 1" />
            </a>
          </div>
          <div className="photo-item1">
            <a href="">
              <img src={shop2} alt="Photo 2" />
            </a>
          </div>
          <div className="photo-item1">
            <a href="">
              <img src={shop3} alt="Photo 3" />
            </a>
          </div>
          <div className="photo-item1">
            <a href="">
              <img src={shop4} alt="Photo 4" />
            </a>
          </div>
          <div className="photo-item1">
            <a href="">
              <img src={shop5} alt="Photo 5" />
            </a>
          </div>
          <div className="photo-item1">
            <a href="">
              <img src={shop6} alt="Photo 6" />
            </a>
          </div>
          {/* Add more photo items as needed */}
        </div>
      </section>

      <section className="sixthsec">
        <a href="">
          <img src={main1} alt="main1" />
        </a>
      </section>
    </>
  );
};


function FifthSection () {
  return (
    <section className="fifthsec">
      <div className="rightside">
        <img id="gif1" src={gif1} alt="" />
      </div>
      <div className="maindiv">
        <div className="div1">
          <a href="" style={{ textDecoration: 'none' }}>
            <center><img src={sale1} alt="" /></center><br></br>
            <center><b><p style={{ color: 'black' }}>Pedigree Meat and Milk Puppy Dry Food</p></b></center>
          </a>
        </div>
        <div className="div1">
          <a href="" style={{ textDecoration: 'none' }}>
            <center><img src={sale2} alt="" /></center><br></br>
            <center><b><p style={{ color: 'black' }}>BLEP Chicken Zuke Pawer <br />Dog Wet Food (Buy 1 Get 1)</p></b></center>
          </a>
        </div>
        <div className="div1">
          <a href="" style={{ textDecoration: 'none' }}>
            <center><img src={sale3} alt="" /></center><br></br>
            <center><b><p style={{ color: 'black' }}>Pedigree Dentastix Oral Care for <br />Adult (Large Breed of 25 kg+) <br />Dog Treats</p></b></center>
          </a>
        </div>
        <div className="div1">
          <a href="" style={{ textDecoration: 'none' }}>
            <center><img src={sale4} alt="" /></center><br></br>
            <center><b><p style={{ color: 'black' }}>SKATRS Claw Tower Cat Tree <br />with Hammock and Dual Scratching <br />and Dual Scratching </p></b></center>
          </a>
        </div>
        <div className="div1">
          <a href="" style={{ textDecoration: 'none' }}>
            <center><img src={sale5} alt="" /></center><br></br>
            <center><b><p style={{ color: 'black' }}>Pedigree Dentastix Oral Care <br />Adult (Large Breed of 25 kg+) <br />Dog Treats</p></b></center>
          </a>
        </div>
      </div>
    </section>
  );
};


function FourthSection(){
  return (
    <section className="fourthsec">
      <div className="heading1">
        <center><b>Popular Categories</b></center>
      </div>

      <div className="photo-grid">
        <div className="photo-item">
          <Link to="/cart">
            <img src={popular1} alt="Photo 1" />
          </Link>
        </div>
        <div className="photo-item">
          <Link to="/cart">
            <img src={popular2} alt="Photo 2" />
          </Link>
        </div>
        <div className="photo-item">
          <Link to="/cart">
            <img src={popular3} alt="Photo 3" />
          </Link>
        </div>
        <div className="photo-item">
          <Link to="/cart">
            <img src={popular4} alt="Photo 4" />
          </Link>
        </div>
        <div className="photo-item">
          <Link to="/cart">
            <img src={popular5} alt="Photo 5" />
          </Link>
        </div>
      </div>

      <div className="photo-grid">
        <div className="photo-item">
          <Link to="/cart">
            <img src={popular7} alt="Photo 7" />
          </Link>
        </div>
        <div className="photo-item">
          <Link to="/cart">
            <img src={popular8} alt="Photo 8" />
          </Link>
        </div>
        <div className="photo-item">
          <Link to="/cart">
            <img src={popular9} alt="Photo 9" />
          </Link>
        </div>
        <div className="photo-item">
          <Link to="/cart">
            <img src={popular10} alt="Photo 10" />
          </Link>
        </div>
        <div className="photo-item">
          <Link to="/cart">
            <img src={popular11} alt="Photo 11" />
          </Link>
        </div>
      </div>
    </section>
  );
};

function VideoPlayer() {
  return (
    <section className="secondsec">
      <a href="">
        <video id="myVideo" width="100%" height="100%" autoPlay loop>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </a>
      {/* Uncomment below if you want to include fallback GIF */}
      {/* <img src="vid2.gif" alt="vid1" style={{ width: '100%', height: '100%' }} /> */}
    </section>
  );
}

function Slider (){
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 5 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 5 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);

  return (
    <section className="thirdsec">
      {/* Slider */}
      <div className="slider">
        <center>
          <div className="slides">
            {[img1, img2, img3, img4, img5, img6].map((imgSrc, index) => (
              <a href="" key={index}>
                <img
                  className="slide"
                  src={imgSrc}
                  alt={`Image #${index + 1}`}
                  style={{ width: '90%', height: 'auto', display: currentSlide === index ? 'block' : 'none' }}
                />
              </a>
            ))}
          </div>
        </center>
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};



const Ecommmerce =()=>{
    return(
        <div>
            <FirstSection/>
            <VideoPlayer/>
            <Slider/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
            <Seventhsection/>
            <EighthSection/>
            <NinthSection/>
            <TenthSection/>
            <FooterSection/>
        </div>
    );
}

export default Ecommmerce;
