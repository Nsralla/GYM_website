import './Footer.css';
import githup from '../../assets/github.png';
import insta from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';
export default function Footer(){
    return(
            <div className="footer-container">
                <hr />
                <div className="footer">
                    <div className="social-links">
                        <img src={githup} alt="" />
                        <img src={insta} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                    <div className="logo-f">
                        <img src={logo} alt="" />
                    </div>
                </div>

            </div>
    );
}