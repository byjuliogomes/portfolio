import React from "react"
import { Link } from "gatsby"
import Emoji from "react-apple-emojis"
import indexStyles from "./index.module.scss"
import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/seo"
import Catalogo from "../components/catalogo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className={indexStyles.users}>
          {/* USER 01 */}
          <svg
            class="user01"
            width="98"
            height="62"
            viewBox="0 0 98 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <rect
                x="23.25"
                y="28"
                width="69"
                height="25.875"
                fill="#7B61FF"
              />
            </g>
            <path
              d="M36.6074 42.2855C36.6116 43.3977 35.7849 43.9261 35.069 43.9261C34.2807 43.9261 33.7352 43.3551 33.7352 42.4645V38.4545H32.4611V42.6179C32.4611 44.2415 33.3517 45.0852 34.6088 45.0852C35.5932 45.0852 36.2622 44.5653 36.5648 43.8665H36.6329V45H37.8858V38.4545H36.6074V42.2855ZM44.6226 40.0526C44.3584 39.0341 43.5615 38.3693 42.1468 38.3693C40.6681 38.3693 39.6198 39.1491 39.6198 40.3082C39.6198 41.2372 40.1823 41.8551 41.4095 42.1278L42.5175 42.3707C43.1482 42.5114 43.4422 42.7926 43.4422 43.2017C43.4422 43.7088 42.901 44.1051 42.0658 44.1051C41.303 44.1051 40.813 43.777 40.6595 43.1335L39.428 43.321C39.6411 44.4801 40.6041 45.1321 42.0743 45.1321C43.6553 45.1321 44.7505 44.2926 44.7505 43.108C44.7505 42.1832 44.1624 41.6122 42.9607 41.3352L41.9209 41.0966C41.2007 40.9261 40.8897 40.6832 40.8939 40.2401C40.8897 39.7372 41.4351 39.3793 42.1595 39.3793C42.9522 39.3793 43.3186 39.8182 43.4678 40.2571L44.6226 40.0526ZM50.4177 42.2855C50.4219 43.3977 49.5952 43.9261 48.8793 43.9261C48.091 43.9261 47.5455 43.3551 47.5455 42.4645V38.4545H46.2714V42.6179C46.2714 44.2415 47.162 45.0852 48.4191 45.0852C49.4035 45.0852 50.0725 44.5653 50.3751 43.8665H50.4433V45H51.6961V38.4545H50.4177V42.2855ZM55.4329 45.1449C56.5153 45.1449 57.1247 44.5952 57.3676 44.1051H57.4187V45H58.663V40.6534C58.663 38.7486 57.163 38.3693 56.1233 38.3693C54.9386 38.3693 53.8477 38.8466 53.4216 40.0398L54.619 40.3125C54.8065 39.848 55.2838 39.4006 56.1403 39.4006C56.9628 39.4006 57.3846 39.831 57.3846 40.5724V40.6023C57.3846 41.0668 56.9074 41.0582 55.7312 41.1946C54.4912 41.3395 53.2213 41.6634 53.2213 43.1506C53.2213 44.4375 54.1886 45.1449 55.4329 45.1449ZM55.7099 44.1222C54.9897 44.1222 54.4699 43.7983 54.4699 43.1676C54.4699 42.4858 55.075 42.2429 55.8122 42.1449C56.2255 42.0895 57.2057 41.9787 57.3889 41.7955V42.6392C57.3889 43.4148 56.771 44.1222 55.7099 44.1222ZM55.663 37.581H56.6815L58.0025 35.6165H56.6602L55.663 37.581ZM60.4801 45H61.7543V41.0028C61.7543 40.1463 62.4148 39.5284 63.3182 39.5284C63.5824 39.5284 63.8807 39.5753 63.983 39.6051V38.3864C63.8551 38.3693 63.6037 38.3565 63.4418 38.3565C62.6747 38.3565 62.0185 38.7912 61.7798 39.4943H61.7117V38.4545H60.4801V45ZM65.2056 45H66.4797V38.4545H65.2056V45ZM65.8491 37.4446C66.288 37.4446 66.6545 37.1037 66.6545 36.6861C66.6545 36.2685 66.288 35.9233 65.8491 35.9233C65.4059 35.9233 65.0437 36.2685 65.0437 36.6861C65.0437 37.1037 65.4059 37.4446 65.8491 37.4446ZM71.071 45.1321C72.9162 45.1321 74.1221 43.7812 74.1221 41.7571C74.1221 39.7202 72.9162 38.3693 71.071 38.3693C69.2258 38.3693 68.0198 39.7202 68.0198 41.7571C68.0198 43.7812 69.2258 45.1321 71.071 45.1321ZM71.0752 44.0625C69.8693 44.0625 69.3068 43.0099 69.3068 41.7528C69.3068 40.5 69.8693 39.4347 71.0752 39.4347C72.2727 39.4347 72.8352 40.5 72.8352 41.7528C72.8352 43.0099 72.2727 44.0625 71.0752 44.0625ZM82.2542 36.2727H80.9715L78.7939 37.696V38.9574L80.882 37.5938H80.9331V45H82.2542V36.2727Z"
              fill="white"
            />
            <g filter="url(#filter1_d)">
              <path
                d="M9.59375 23.6875L6 5L21.8125 14.3438L13.9062 16.5L9.59375 23.6875Z"
                fill="#7B61FF"
              />
              <path
                d="M8.88793 23.8232L9.24293 25.6692L10.2101 24.0573L14.374 17.1174L22.0016 15.0372L23.6418 14.5898L22.1781 13.725L6.36565 4.38121L4.99311 3.57016L5.29418 5.13573L8.88793 23.8232Z"
                stroke="white"
                stroke-width="1.4375"
                stroke-linecap="square"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="17.5"
                y="23.6875"
                width="80.5"
                height="37.375"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1.4375" />
                <feGaussianBlur stdDeviation="2.875" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d"
                x="0.986206"
                y="0.140381"
                width="27.4849"
                height="31.5106"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {/* END USER 01 */}

          {/* USER 02 */}
          <svg
            class="user02"
            width="98"
            height="62"
            viewBox="0 0 98 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <rect
                x="23.25"
                y="28"
                width="69"
                height="25.875"
                fill="#EF5533"
              />
            </g>
            <path
              d="M35.7636 42.2855C35.7679 43.3977 34.9412 43.9261 34.2253 43.9261C33.4369 43.9261 32.8915 43.3551 32.8915 42.4645V38.4545H31.6173V42.6179C31.6173 44.2415 32.5079 45.0852 33.765 45.0852C34.7494 45.0852 35.4185 44.5653 35.721 43.8665H35.7892V45H37.042V38.4545H35.7636V42.2855ZM43.7789 40.0526C43.5147 39.0341 42.7178 38.3693 41.303 38.3693C39.8243 38.3693 38.776 39.1491 38.776 40.3082C38.776 41.2372 39.3385 41.8551 40.5658 42.1278L41.6737 42.3707C42.3044 42.5114 42.5985 42.7926 42.5985 43.2017C42.5985 43.7088 42.0573 44.1051 41.222 44.1051C40.4593 44.1051 39.9692 43.777 39.8158 43.1335L38.5843 43.321C38.7973 44.4801 39.7604 45.1321 41.2306 45.1321C42.8115 45.1321 43.9067 44.2926 43.9067 43.108C43.9067 42.1832 43.3186 41.6122 42.1169 41.3352L41.0772 41.0966C40.357 40.9261 40.0459 40.6832 40.0502 40.2401C40.0459 39.7372 40.5914 39.3793 41.3158 39.3793C42.1084 39.3793 42.4749 39.8182 42.624 40.2571L43.7789 40.0526ZM49.5739 42.2855C49.5782 43.3977 48.7515 43.9261 48.0356 43.9261C47.2472 43.9261 46.7018 43.3551 46.7018 42.4645V38.4545H45.4276V42.6179C45.4276 44.2415 46.3183 45.0852 47.5754 45.0852C48.5597 45.0852 49.2288 44.5653 49.5313 43.8665H49.5995V45H50.8523V38.4545H49.5739V42.2855ZM54.5892 45.1449C55.6716 45.1449 56.2809 44.5952 56.5238 44.1051H56.575V45H57.8193V40.6534C57.8193 38.7486 56.3193 38.3693 55.2795 38.3693C54.0949 38.3693 53.0039 38.8466 52.5778 40.0398L53.7753 40.3125C53.9628 39.848 54.44 39.4006 55.2966 39.4006C56.119 39.4006 56.5409 39.831 56.5409 40.5724V40.6023C56.5409 41.0668 56.0636 41.0582 54.8875 41.1946C53.6474 41.3395 52.3775 41.6634 52.3775 43.1506C52.3775 44.4375 53.3449 45.1449 54.5892 45.1449ZM54.8662 44.1222C54.146 44.1222 53.6261 43.7983 53.6261 43.1676C53.6261 42.4858 54.2312 42.2429 54.9684 42.1449C55.3818 42.0895 56.3619 41.9787 56.5451 41.7955V42.6392C56.5451 43.4148 55.9272 44.1222 54.8662 44.1222ZM54.8193 37.581H55.8378L57.1588 35.6165H55.8164L54.8193 37.581ZM59.6364 45H60.9105V41.0028C60.9105 40.1463 61.571 39.5284 62.4744 39.5284C62.7386 39.5284 63.0369 39.5753 63.1392 39.6051V38.3864C63.0114 38.3693 62.76 38.3565 62.598 38.3565C61.831 38.3565 61.1747 38.7912 60.9361 39.4943H60.8679V38.4545H59.6364V45ZM64.3618 45H65.636V38.4545H64.3618V45ZM65.0053 37.4446C65.4442 37.4446 65.8107 37.1037 65.8107 36.6861C65.8107 36.2685 65.4442 35.9233 65.0053 35.9233C64.5621 35.9233 64.1999 36.2685 64.1999 36.6861C64.1999 37.1037 64.5621 37.4446 65.0053 37.4446ZM70.2272 45.1321C72.0724 45.1321 73.2784 43.7812 73.2784 41.7571C73.2784 39.7202 72.0724 38.3693 70.2272 38.3693C68.3821 38.3693 67.1761 39.7202 67.1761 41.7571C67.1761 43.7812 68.3821 45.1321 70.2272 45.1321ZM70.2315 44.0625C69.0255 44.0625 68.463 43.0099 68.463 41.7528C68.463 40.5 69.0255 39.4347 70.2315 39.4347C71.4289 39.4347 71.9914 40.5 71.9914 41.7528C71.9914 43.0099 71.4289 44.0625 70.2315 44.0625ZM78.0993 45H83.8436V43.8707H79.9147V43.8068L81.649 41.9915C83.2471 40.3764 83.703 39.6051 83.703 38.6293C83.703 37.2273 82.561 36.1534 80.9161 36.1534C79.284 36.1534 78.0908 37.2102 78.0908 38.804H79.3479C79.3436 37.8665 79.9488 37.2528 80.8905 37.2528C81.7769 37.2528 82.4502 37.7983 82.4502 38.6676C82.4502 39.4389 81.99 39.9929 81.0525 40.9858L78.0993 44.0455V45Z"
              fill="white"
            />
            <g filter="url(#filter1_d)">
              <path
                d="M9.59375 23.6875L6 5L21.8125 14.3438L13.9062 16.5L9.59375 23.6875Z"
                fill="#EF5533"
              />
              <path
                d="M8.88793 23.8232L9.24293 25.6692L10.2101 24.0573L14.374 17.1174L22.0016 15.0372L23.6418 14.5898L22.1781 13.725L6.36565 4.38121L4.99311 3.57016L5.29418 5.13573L8.88793 23.8232Z"
                stroke="white"
                stroke-width="1.4375"
                stroke-linecap="square"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="17.5"
                y="23.6875"
                width="80.5"
                height="37.375"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1.4375" />
                <feGaussianBlur stdDeviation="2.875" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d"
                x="0.986206"
                y="0.140381"
                width="27.4849"
                height="31.5106"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {/* FIM DO USER 02 */}

          {/* USER 03 */}
          <svg
            class="user03"
            width="98"
            height="62"
            viewBox="0 0 98 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <rect
                x="23.25"
                y="28"
                width="69"
                height="25.875"
                fill="#1BC47D"
              />
            </g>
            <path
              d="M35.5761 42.2855C35.5804 43.3977 34.7537 43.9261 34.0378 43.9261C33.2494 43.9261 32.704 43.3551 32.704 42.4645V38.4545H31.4298V42.6179C31.4298 44.2415 32.3204 45.0852 33.5775 45.0852C34.5619 45.0852 35.231 44.5653 35.5335 43.8665H35.6017V45H36.8545V38.4545H35.5761V42.2855ZM43.5914 40.0526C43.3272 39.0341 42.5303 38.3693 41.1155 38.3693C39.6368 38.3693 38.5885 39.1491 38.5885 40.3082C38.5885 41.2372 39.151 41.8551 40.3783 42.1278L41.4862 42.3707C42.1169 42.5114 42.411 42.7926 42.411 43.2017C42.411 43.7088 41.8698 44.1051 41.0345 44.1051C40.2718 44.1051 39.7817 43.777 39.6283 43.1335L38.3968 43.321C38.6098 44.4801 39.5729 45.1321 41.0431 45.1321C42.624 45.1321 43.7192 44.2926 43.7192 43.108C43.7192 42.1832 43.1311 41.6122 41.9294 41.3352L40.8897 41.0966C40.1695 40.9261 39.8584 40.6832 39.8627 40.2401C39.8584 39.7372 40.4039 39.3793 41.1283 39.3793C41.9209 39.3793 42.2874 39.8182 42.4365 40.2571L43.5914 40.0526ZM49.3864 42.2855C49.3907 43.3977 48.564 43.9261 47.8481 43.9261C47.0597 43.9261 46.5143 43.3551 46.5143 42.4645V38.4545H45.2401V42.6179C45.2401 44.2415 46.1308 45.0852 47.3879 45.0852C48.3722 45.0852 49.0413 44.5653 49.3438 43.8665H49.412V45H50.6648V38.4545H49.3864V42.2855ZM54.4017 45.1449C55.4841 45.1449 56.0934 44.5952 56.3363 44.1051H56.3875V45H57.6318V40.6534C57.6318 38.7486 56.1318 38.3693 55.092 38.3693C53.9074 38.3693 52.8164 38.8466 52.3903 40.0398L53.5878 40.3125C53.7753 39.848 54.2525 39.4006 55.1091 39.4006C55.9315 39.4006 56.3534 39.831 56.3534 40.5724V40.6023C56.3534 41.0668 55.8761 41.0582 54.7 41.1946C53.4599 41.3395 52.19 41.6634 52.19 43.1506C52.19 44.4375 53.1574 45.1449 54.4017 45.1449ZM54.6787 44.1222C53.9585 44.1222 53.4386 43.7983 53.4386 43.1676C53.4386 42.4858 54.0437 42.2429 54.7809 42.1449C55.1943 42.0895 56.1744 41.9787 56.3576 41.7955V42.6392C56.3576 43.4148 55.7397 44.1222 54.6787 44.1222ZM54.6318 37.581H55.6503L56.9713 35.6165H55.6289L54.6318 37.581ZM59.4489 45H60.723V41.0028C60.723 40.1463 61.3835 39.5284 62.2869 39.5284C62.5511 39.5284 62.8494 39.5753 62.9517 39.6051V38.3864C62.8239 38.3693 62.5725 38.3565 62.4105 38.3565C61.6435 38.3565 60.9872 38.7912 60.7486 39.4943H60.6804V38.4545H59.4489V45ZM64.1743 45H65.4485V38.4545H64.1743V45ZM64.8178 37.4446C65.2567 37.4446 65.6232 37.1037 65.6232 36.6861C65.6232 36.2685 65.2567 35.9233 64.8178 35.9233C64.3746 35.9233 64.0124 36.2685 64.0124 36.6861C64.0124 37.1037 64.3746 37.4446 64.8178 37.4446ZM70.0397 45.1321C71.8849 45.1321 73.0909 43.7812 73.0909 41.7571C73.0909 39.7202 71.8849 38.3693 70.0397 38.3693C68.1946 38.3693 66.9886 39.7202 66.9886 41.7571C66.9886 43.7812 68.1946 45.1321 70.0397 45.1321ZM70.044 44.0625C68.838 44.0625 68.2755 43.0099 68.2755 41.7528C68.2755 40.5 68.838 39.4347 70.044 39.4347C71.2414 39.4347 71.8039 40.5 71.8039 41.7528C71.8039 43.0099 71.2414 44.0625 70.044 44.0625ZM80.9502 45.1193C82.7314 45.1193 84.0397 44.054 84.0354 42.6051C84.0397 41.5014 83.3706 40.7088 82.2115 40.5298V40.4616C83.1235 40.2273 83.7158 39.5114 83.7115 38.5312C83.7158 37.2486 82.6633 36.1534 80.9843 36.1534C79.382 36.1534 78.0951 37.1207 78.0525 38.5398H79.3266C79.3564 37.7386 80.1107 37.2528 80.9672 37.2528C81.8579 37.2528 82.4417 37.794 82.4374 38.5994C82.4417 39.4432 81.7641 39.9972 80.7968 39.9972H80.0596V41.071H80.7968C82.007 41.071 82.7059 41.6847 82.7059 42.5625C82.7059 43.4105 81.9686 43.9858 80.9417 43.9858C79.9956 43.9858 79.2584 43.5 79.2073 42.7244H77.8692C77.9246 44.1477 79.186 45.1193 80.9502 45.1193Z"
              fill="white"
            />
            <g filter="url(#filter1_d)">
              <path
                d="M9.59375 23.6875L6 5L21.8125 14.3438L13.9062 16.5L9.59375 23.6875Z"
                fill="#1BC47D"
              />
              <path
                d="M8.88793 23.8232L9.24293 25.6692L10.2101 24.0573L14.374 17.1174L22.0016 15.0372L23.6418 14.5898L22.1781 13.725L6.36565 4.38121L4.99311 3.57016L5.29418 5.13573L8.88793 23.8232Z"
                stroke="white"
                stroke-width="1.4375"
                stroke-linecap="square"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="17.5"
                y="23.6875"
                width="80.5"
                height="37.375"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1.4375" />
                <feGaussianBlur stdDeviation="2.875" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d"
                x="0.986206"
                y="0.140381"
                width="27.4849"
                height="31.5106"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {/* FIM DO USER 03 */}
        </div>

        <div className={indexStyles.layout}>
          <SEO title="Júlio Gomes - Product Designer Portfolio" />
          <div className={indexStyles.wrapperLeft}>
            <h1 className={indexStyles.h1} id="h1">
              <Emoji name="waving-hand" width={64} margin={0} />
              Hi, I’m Júlio
            </h1>
            <p className={indexStyles.p}>
              I’m a Product Designer with a passion for participate in every
              stage of digital product, from discovery to delivery. Helping to
              focus the business goals on users. teste
            </p>
            <p>Now go build something great.</p>
          </div>
          <div
            className={indexStyles.wrapperRight}
            // style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
          >
            <Image data-aos="fade-left" />
          </div>
        </div>
        <Catalogo data-aos="fade-in">Latest Projects</Catalogo>
      </Layout>
    )
  }
}

AOS.init()

var $ = require("jquery")

$(document).ready(function () {
  animateDiv("div .user01")
})

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50
  var w = $(window).width() - 50

  var nh = Math.floor(Math.random() * h)
  var nw = Math.floor(Math.random() * w)

  return [nh, nw]
}

function animateDiv(myclass) {
  var newq = makeNewPosition()
  $(myclass).animate({ top: newq[0], left: newq[1] }, 5000, function () {
    animateDiv(myclass)
  })
}

$(document).ready(function () {
  animateDiv2(".user02")
})

function makeNewPosition2() {
  // Get viewport dimensions (remove the dimension of the div)
  var h2 = $(window).height() - 70
  var w2 = $(window).width() - 30

  var nh2 = Math.floor(Math.random() * h2)
  var nw2 = Math.floor(Math.random() * w2)

  return [nh2, nw2]
}

function animateDiv2(myclass) {
  var newq = makeNewPosition2()
  $(myclass).animate({ top: newq[0], left: newq[1] }, 3000, function () {
    animateDiv2(myclass)
  })
}

$(document).ready(function () {
  animateDiv3(".user03")
})

function makeNewPosition3() {
  // Get viewport dimensions (remove the dimension of the div)
  var h3 = $(window).height() - 90
  var w3 = $(window).width() - 40

  var nh3 = Math.floor(Math.random() * h3)
  var nw3 = Math.floor(Math.random() * w3)

  return [nh3, nw3]
}

function animateDiv3(myclass) {
  var newq = makeNewPosition3()
  $(myclass).animate({ top: newq[0], left: newq[1] }, 6000, function () {
    animateDiv3(myclass)
  })
}

export default IndexPage
