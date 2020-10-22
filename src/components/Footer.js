import React from 'react'
import "./footer.css";

function Footer() {

    const handleScroll = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="footer">
            <a onClick={handleScroll}>
                <div className="footer__scrollup">
                    <small className="footer__scrollupText">Back to top</small>
                </div>
            </a>

            <div className="footer__row">
                <div className="footer__column">
                    <strong className="footer__columnHeader"> Get to Know us </strong> 
                    <ul>
                    <li>About</li>
                    <li>Career</li>
                    <li>Press</li>
                    <li>About Amazon Clone</li>
                    <li>Gift a smile</li>
                    </ul>
                </div>

                <div className="footer__column">
                    <strong className="footer__columnHeader"> Connect with us </strong> 
                    <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>

                    </ul>
                </div>

                <div className="footer__column">
                    <strong className="footer__columnHeader"> Make Money with Us </strong> 
                    <ul>
                    <li>Sell products on Amazon Clone</li>
                    <li>Sell apps on Amazon Clone</li>
                    <li>Become an Affiliate</li>
                    <li>Host an Amazon Hub</li>
                    <li>Gift a smile</li>
                    </ul>
                </div>

                <div className="footer__column">
                    <strong className="footer__columnHeader"> Amazon Clone Payment Products </strong> 
                    <ul>
                    <li>Amazon Clone Business Card</li>
                    <li>Reload Your Balance</li>
                    <li>Become an Affiliate</li>
                    <li>Amazon Clone Currency Converter</li>
                    </ul>
                </div>

            </div>

            <hr />

            <div className="footer__end">
                <img 
                    className="footer__endLogo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
                <span className="footer__endMessage">
                    Made with ❤️ by
                    <a href="https://github.com/rbacollado"> rbacollado</a>
                </span>
            </div>
        </div>
    )
}

export default Footer
