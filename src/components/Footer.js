import './Footer.css';
import './styles.css';
import logo from '../assests/images/logob.svg';
import location from '../assests/images/icon-location.svg';
import phone from '../assests/images/icon-phone.svg';
import email from '../assests/images/icon-email.svg';
import facebook from '../assests/images/facebook.svg';
import twitter from '../assests/images/twitter.svg';
import instagram from '../assests/images/instagram.svg';


function Footer() {
    return(
        <footer>
            <div class="colum-1 col-xl-4 col-lg-4">
                <div class="colum-1A">
                    <img class="image-h" src={logo} alt=""/>
                </div>
                <div class="colum-1B">
                    <img class="image-5"  src={location} alt=""/>
                    <p class="p-5 col-sm-8 col-8 col-xs-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia praesentium consequuntur dicta maxime ab aspernatur harum vel fugiat.</p>
                </div>
                <div class="colum-1C">
                    <img class="image-5"  src={phone} alt=""/>
                    <p class="p-5">+234-810-7069-369</p>
                </div>
                <div class="colum-1D">
                    <img class="image-5"  src={email} alt=""/>
                    <p class="p-5">exampli@huddle.com</p>
                </div>
            </div>
            <div class="colum-2 col-xl-1 col-lg-2">
                <p class="p-3">About us</p>
                <p class="p-3">What We Do</p>
                <p class="p-3">FAQ</p>
            </div>
            <div class="colum-3 col-xl-1 col-lg-2">
                <p class="p-3">Career</p>
                <p class="p-3">Blog</p>
                <p class="p-3">Contact Us</p>
            </div>
            <div class="colum-4 col-xl-4 col-lg-3">
                <div class="images">
                    <img class="image-6" src={facebook} alt=""/>
                    <img class="image-6" src={twitter} alt=""/>
                    <img class="image-6" src={instagram} alt=""/>
                </div>
                <p class="p-4">@copyrights 2018 Huddle. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;