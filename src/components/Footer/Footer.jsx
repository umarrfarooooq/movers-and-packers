import React from 'react';
import Logo from "@public/Main/Stress Free Logistics.png"
import "./Footer.css"
import Image from 'next/image';

function Footer() {

  return (
    <div style={{backgroundColor:"#222222", color:"white"}}>
    <footer className="py-4 sm:py-6 container">
      <div>
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <a href="/">
              <Image src={Logo} width={100}  className="w-40" alt="Company Logo" />
            </a>
          </div>
          <div className='footerDesc md:w-max lg:mr-20'>
          <h3 className='text-lg'>Movers & Packers</h3>
            <p className='text-sm md:text-base lg:text-lg my-4'>
            A comprehensive platform offering professional <br />moving packing services, ensuring a hassle-free<br />relocation experience with real-time tracking.
            </p>
            <div className='social-icons'>
            <div className='flex items-center justify-start gap-4'>
              <div className='bg-[#FFFBFA1A] p-2 rounded-2xl faceBook'>
                <a href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="#F2F2F2"/>
                </svg>
                </a>
              </div>
              <div className='bg-[#FFFBFA1A] p-2 rounded-2xl instaGram'>
                <a href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13.0286 2.00123C13.7583 1.99843 14.488 2.00576 15.2176 2.02323L15.4116 2.03023C15.6356 2.03823 15.8566 2.04823 16.1236 2.06023C17.1876 2.11023 17.9136 2.27823 18.5506 2.52523C19.2106 2.77923 19.7666 3.12323 20.3226 3.67923C20.831 4.17884 21.2244 4.78318 21.4756 5.45023C21.7226 6.08723 21.8906 6.81423 21.9406 7.87823C21.9526 8.14423 21.9626 8.36623 21.9706 8.59023L21.9766 8.78423C21.9943 9.51342 22.002 10.2428 21.9996 10.9722L22.0006 11.7182V13.0282C22.003 13.758 21.9954 14.4877 21.9776 15.2172L21.9716 15.4112C21.9636 15.6352 21.9536 15.8562 21.9416 16.1232C21.8916 17.1872 21.7216 17.9132 21.4756 18.5502C21.2252 19.218 20.8317 19.8228 20.3226 20.3222C19.8225 20.8306 19.2179 21.224 18.5506 21.4752C17.9136 21.7222 17.1876 21.8902 16.1236 21.9402C15.8566 21.9522 15.6356 21.9622 15.4116 21.9702L15.2176 21.9762C14.4881 21.994 13.7583 22.0017 13.0286 21.9992L12.2826 22.0002H10.9736C10.2438 22.0027 9.5141 21.995 8.78458 21.9772L8.59058 21.9712C8.35319 21.9626 8.11585 21.9526 7.87858 21.9412C6.81458 21.8912 6.08858 21.7212 5.45058 21.4752C4.78326 21.2246 4.17881 20.8311 3.67958 20.3222C3.17062 19.8225 2.7768 19.2178 2.52558 18.5502C2.27858 17.9132 2.11058 17.1872 2.06058 16.1232C2.04944 15.8859 2.03944 15.6486 2.03058 15.4112L2.02558 15.2172C2.00714 14.4877 1.99881 13.758 2.00058 13.0282V10.9722C1.99779 10.2428 2.00512 9.51343 2.02258 8.78423L2.02958 8.59023C2.03758 8.36623 2.04758 8.14423 2.05958 7.87823C2.10958 6.81323 2.27758 6.08823 2.52458 5.45023C2.77595 4.78285 3.17054 4.17868 3.68058 3.68023C4.17947 3.17098 4.78354 2.7768 5.45058 2.52523C6.08858 2.27823 6.81358 2.11023 7.87858 2.06023L8.59058 2.03023L8.78458 2.02523C9.51376 2.0068 10.2432 1.99847 10.9726 2.00023L13.0286 2.00123ZM12.0006 7.00123C11.3381 6.99186 10.6803 7.11425 10.0656 7.3613C9.45077 7.60834 8.89122 7.97511 8.41942 8.44029C7.94762 8.90546 7.57298 9.45977 7.31726 10.071C7.06155 10.6822 6.92987 11.3382 6.92987 12.0007C6.92987 12.6633 7.06155 13.3192 7.31726 13.9305C7.57298 14.5417 7.94762 15.096 8.41942 15.5612C8.89122 16.0264 9.45077 16.3931 10.0656 16.6402C10.6803 16.8872 11.3381 17.0096 12.0006 17.0002C13.3267 17.0002 14.5984 16.4734 15.5361 15.5358C16.4738 14.5981 17.0006 13.3263 17.0006 12.0002C17.0006 10.6741 16.4738 9.40238 15.5361 8.4647C14.5984 7.52702 13.3267 7.00123 12.0006 7.00123ZM12.0006 9.00123C12.3991 8.99389 12.7951 9.06603 13.1654 9.21344C13.5357 9.36085 13.8729 9.58057 14.1574 9.85978C14.4418 10.139 14.6678 10.4721 14.822 10.8396C14.9763 11.2071 15.0558 11.6016 15.0558 12.0002C15.0559 12.3988 14.9766 12.7934 14.8224 13.1609C14.6683 13.5285 14.4424 13.8617 14.1581 14.141C13.8737 14.4203 13.5366 14.6401 13.1663 14.7876C12.796 14.9352 12.4001 15.0074 12.0016 15.0002C11.2059 15.0002 10.4429 14.6842 9.88026 14.1216C9.31765 13.5589 9.00158 12.7959 9.00158 12.0002C9.00158 11.2046 9.31765 10.4415 9.88026 9.87891C10.4429 9.3163 11.2059 9.00023 12.0016 9.00023L12.0006 9.00123ZM17.2506 5.50123C16.928 5.51414 16.6229 5.65138 16.3992 5.8842C16.1755 6.11702 16.0506 6.42737 16.0506 6.75023C16.0506 7.0731 16.1755 7.38344 16.3992 7.61626C16.6229 7.84908 16.928 7.98632 17.2506 7.99923C17.5821 7.99923 17.9 7.86754 18.1345 7.63311C18.3689 7.39869 18.5006 7.08075 18.5006 6.74923C18.5006 6.41771 18.3689 6.09977 18.1345 5.86535C17.9 5.63093 17.5821 5.49923 17.2506 5.49923V5.50123Z" fill="#F2F2F2"/>
                </svg>
                </a>
              </div>
              <div className='bg-[#FFFBFA1A] p-2 rounded-2xl whatsApp'>
                <a href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22L3.35601 17.032C2.46511 15.5049 1.99706 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2ZM8.59201 7.3L8.39201 7.308C8.26254 7.31589 8.13599 7.3499 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09514 8.4229 6.89599 9.01331 6.89901 9.62C6.90101 10.11 7.02901 10.587 7.22901 11.033C7.63801 11.935 8.31101 12.89 9.19901 13.775C9.41301 13.988 9.62301 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.257 16.534C14.442 16.544 14.627 16.53 14.813 16.521C15.1043 16.506 15.3886 16.4271 15.646 16.29C15.777 16.2225 15.9048 16.1491 16.029 16.07C16.029 16.07 16.072 16.042 16.154 15.98C16.289 15.88 16.372 15.809 16.484 15.692C16.567 15.606 16.639 15.505 16.694 15.39C16.772 15.227 16.85 14.916 16.882 14.657C16.906 14.459 16.899 14.351 16.896 14.284C16.892 14.177 16.803 14.066 16.706 14.019L16.124 13.758C16.124 13.758 15.254 13.379 14.722 13.137C14.6663 13.1127 14.6067 13.0988 14.546 13.096C14.4776 13.089 14.4085 13.0967 14.3433 13.1186C14.2781 13.1405 14.2183 13.1761 14.168 13.223C14.163 13.221 14.096 13.278 13.373 14.154C13.3315 14.2098 13.2744 14.2519 13.2088 14.2751C13.1433 14.2982 13.0723 14.3013 13.005 14.284C12.9399 14.2665 12.876 14.2445 12.814 14.218C12.69 14.166 12.647 14.146 12.562 14.11C11.9881 13.8595 11.4567 13.5211 10.987 13.107C10.861 12.997 10.744 12.877 10.624 12.761C10.2306 12.3842 9.88774 11.958 9.60401 11.493L9.54501 11.398C9.50264 11.3342 9.46837 11.2653 9.44301 11.193C9.40501 11.046 9.50401 10.928 9.50401 10.928C9.50401 10.928 9.74701 10.662 9.86001 10.518C9.97001 10.378 10.063 10.242 10.123 10.145C10.241 9.955 10.278 9.76 10.216 9.609C9.93601 8.925 9.64601 8.244 9.34801 7.568C9.28901 7.434 9.11401 7.338 8.95501 7.319C8.90101 7.313 8.84701 7.307 8.79301 7.303C8.65872 7.29633 8.52415 7.29766 8.39001 7.307L8.59101 7.299L8.59201 7.3Z" fill="#F2F2F2"/>
                </svg>
                </a>
              </div>
              <div className='bg-[#FFFBFA1A] p-2 rounded-2xl tikTok'>
                <a href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21.75 7.5V11.25C21.75 11.4489 21.671 11.6397 21.5303 11.7803C21.3897 11.921 21.1989 12 21 12C19.4333 12.0036 17.889 11.6269 16.5 10.9022V14.625C16.5 16.5147 15.7493 18.3269 14.4131 19.6631C13.0769 20.9993 11.2647 21.75 9.375 21.75C7.48533 21.75 5.67306 20.9993 4.33686 19.6631C3.00067 18.3269 2.25 16.5147 2.25 14.625C2.25 11.1656 4.77281 8.1075 8.11875 7.51125C8.22669 7.49206 8.33752 7.49678 8.44345 7.52505C8.54937 7.55333 8.6478 7.60449 8.73182 7.67492C8.81584 7.74535 8.88339 7.83334 8.92972 7.9327C8.97606 8.03206 9.00005 8.14037 9 8.25V12.2522C9.00005 12.3941 8.95981 12.5332 8.88397 12.6532C8.80813 12.7731 8.6998 12.8691 8.57156 12.93C8.26841 13.0738 8.00939 13.2962 7.82151 13.5742C7.63364 13.8522 7.5238 14.1755 7.50345 14.5104C7.4831 14.8453 7.55299 15.1795 7.70582 15.4782C7.85865 15.7769 8.08883 16.0291 8.37234 16.2085C8.65586 16.388 8.98232 16.488 9.31768 16.4983C9.65304 16.5085 9.98501 16.4286 10.279 16.2668C10.5729 16.1051 10.8181 15.8674 10.9889 15.5786C11.1597 15.2898 11.2498 14.9605 11.25 14.625V2.25C11.25 2.05109 11.329 1.86032 11.4697 1.71967C11.6103 1.57902 11.8011 1.5 12 1.5H15.75C15.9489 1.5 16.1397 1.57902 16.2803 1.71967C16.421 1.86032 16.5 2.05109 16.5 2.25C16.5012 3.44309 16.9757 4.58697 17.8194 5.43061C18.663 6.27425 19.8069 6.74876 21 6.75C21.1989 6.75 21.3897 6.82902 21.5303 6.96967C21.671 7.11032 21.75 7.30109 21.75 7.5Z" fill="#FFFBFA"/>
                </svg>
                </a>
              </div>
            </div>
              
            </div>
          </div>
          </div>
          <div className="footerItems text-white grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className=''>
              <h2 className="mb-6 text-sm font-semibold uppercase">Menu</h2>
              <ul className='text-sm md:text-base lg:text-lg text-white' >
              
              <li className="mb-4">
                <a href="/">Home</a>
              </li>
              <li className="mb-4">
                <a href="/">About</a>
              </li>
              <li className="mb-4">
                <a href="/">Services</a>
              </li>
              <li className="mb-4">
                <a href="/">Gallery</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>

              </ul>
            </div>
            <div className='justify-self-end sm:hidden'>
            <a href='#'>
              <div className={`w-min group hover:bg-[#9747FF] hover:border-[#9747FF] active:bg-[#9747FF] active:border-[#9747FF] border border-[#8C979C] p-3 rounded-lg`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-[#8C979C] group-hover:stroke-white">
                    <path d="M12 19L12 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12L12 5L5 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
            </div>
            <div className='flex flex-col justify-between w-fit'>
            <div className='upperContacts'>
            <h2 className="mb-6 text-sm font-semibold uppercase">Contacts</h2>
              <ul className="">
                <li className="mb-4 flex items-center gap-1">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15.6652 13.4654C15.5054 13.3855 14.4667 12.9061 14.3069 12.8262C14.1471 12.7463 13.9873 12.7463 13.8275 12.9061C13.6677 13.0659 13.3481 13.5453 13.1883 13.7051C13.1084 13.8649 12.9486 13.8649 12.7888 13.785C12.2295 13.5453 11.6702 13.2257 11.1909 12.8262C10.7914 12.4267 10.3919 11.9473 10.0723 11.4679C9.99238 11.3081 10.0723 11.1483 10.1522 11.0684C10.2321 10.9885 10.312 10.8287 10.4718 10.7488C10.5517 10.6689 10.6316 10.5091 10.6316 10.4292C10.7115 10.3493 10.7115 10.1895 10.6316 10.1096C10.5517 10.0297 10.1522 9.07091 9.99238 8.6714C9.91248 8.1121 9.75269 8.1121 9.59289 8.1121H9.1934C9.0336 8.1121 8.79391 8.2719 8.71401 8.3518C8.23462 8.8312 7.99492 9.39051 7.99492 10.0297C8.07482 10.7488 8.31451 11.4679 8.79391 12.1071C9.67279 13.3855 10.7914 14.4242 12.1496 15.0634C12.5491 15.2232 12.8687 15.383 13.2682 15.4629C13.6677 15.6227 14.0672 15.6227 14.5466 15.5428C15.1059 15.4629 15.5853 15.0634 15.9049 14.584C16.0647 14.2644 16.0647 13.9448 15.9848 13.6252L15.6652 13.4654ZM17.6626 6.1945C14.5466 3.0784 9.51299 3.0784 6.39695 6.1945C3.8402 8.7513 3.36081 12.6664 5.11858 15.7825L4 19.8574L8.23462 18.7388C9.43309 19.378 10.7115 19.6976 11.9898 19.6976C16.3843 19.6976 19.8998 16.182 19.8998 11.7875C19.9797 9.71011 19.1008 7.7126 17.6626 6.1945ZM15.5054 17.3805C14.4667 18.0197 13.2682 18.4192 11.9898 18.4192C10.7914 18.4192 9.67279 18.0996 8.63411 17.5403L8.39441 17.3805L5.91756 18.0197L6.55675 15.6227L6.39695 15.383C4.47939 12.187 5.43817 8.192 8.55421 6.1945C11.6702 4.197 15.6652 5.2357 17.5827 8.2719C19.5003 11.388 18.6214 15.4629 15.5054 17.3805Z" fill="#F2F2F2"/>
                </svg></span>
                  <a className='text-sm md:text-base lg:text-lg' href='#'>+92 3161 511673</a>
                </li>
                <li className="mb-4 flex items-center gap-1">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.5 7.5C19.5 6.675 18.825 6 18 6H6C5.175 6 4.5 6.675 4.5 7.5V16.5C4.5 17.325 5.175 18 6 18H18C18.825 18 19.5 17.325 19.5 16.5V7.5ZM18 7.5L12 11.25L6 7.5H18ZM18 16.5H6V9L12 12.75L18 9V16.5Z" fill="#F2F2F2"/>
                </svg></span>
                  <a className='text-sm md:text-base lg:text-lg' href='#'>stressfreelogisticsmovers@gmail.com</a>
                </li>
              </ul>
            </div>
            
            </div>
            <div className='justify-self-end hidden sm:block'>
              <a href='#'>
                <div className={`w-min group cursor-pointer darkBtn border border-[#d4d4d4] p-3 rounded-lg`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-[#d4d4d4] group-hover:stroke-white">
                    <path d="M12 19L12 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12L12 5L5 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center text-center sm:justify-center">
          <span className="text-sm sm:text-center">
          © 2024 Movers & Packers. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
    </div>
    
  );
}

export default Footer;
