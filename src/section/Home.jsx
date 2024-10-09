import React from 'react'
import LearnedTechnologies from '../component/swiperCarousel';
// import HamburgerMenu from '../component/hamburgerMenu';
const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',//HTML
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519',//VS CODE
    'https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png',//REACT
    'https://algopulsespro.com/cdn/shop/files/Logo-csharp.webp?v=1723614475',//c#
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',//JAVASCRIPT
    'https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png',//GITHUB
    'https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png',//UNITY
    'https://www.ejable.com/wp-content/uploads/2022/04/Framer-Motion.webp',//FRAMER MOTION
    'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png',//ANDROID STUDIO
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png',//FIGMA
    'https://cdn-icons-png.flaticon.com/256/919/919826.png',//CSS
];


export default function Home() {
    return (
        <>
            <div className='mx-20'>
                <LearnedTechnologies images={images} />
            </div>
        </>
    )
}
