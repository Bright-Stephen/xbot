import './Header.css';
import React from 'react';
import IMG from '../assests/be good.png'
import './styles.css'
import image3 from '../assests/images/logo.svg'
import iluss from '../assests/images/illustration-mockups.svg'


function Header() {
    return(
        <header>
            <div class="div-1 col-xl-12 col-lg-12 col-12 col-xs-12">
                <img class="image-3 col-4 col-xs-4" src={image3} alt=""/>
                <div class="div-1-1 col-3 col-xs-4">
                    <h1>Try it Free</h1>
                </div>
            </div>
            <div class="div-2 col-xl-12 col-lg-12">
                <div class="div-2-1 col-xl-6 col-lg-5 col-12">
                    <h1 class="px col-xl-4 col-12">Build the community your fans will love</h1>
                    <p class="p-1 col-xl-9 col-lg-9 col-10">Huddle re-image the way we build communities. You have a voice so does your audience. Create connections with your users as you engage in genuie discussion.</p>
                    <div class="div-2-3 col-xl-4 col-lg-6 col-md-4 col-7 col-sm-5 col-xs-5">
                        <p class="pp">
                            Get started for free
                        </p>
                    </div>
                </div>
                <img class="image-2 col-xl-5 col-lg-6 col-12 col-xs-10" src={iluss} alt=""/>
            </div>
        </header>
    )
}



export default Header;