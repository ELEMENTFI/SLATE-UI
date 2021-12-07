import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap"

const Footer = (props) => {
    return (<>
    
        <div className="footer">
            <Container fluid className="px-md-5">
                <div className="d-flex justify-content-end">
                    <div className="footer-nav-links d-flex flex-wrap">
                        {/* <a href="https://blackcollateral.com/" className="footer-nav-link">
                            Website
                        </a> */}
                        {/* <a href="https://discord.com/channels/749283231450398721/874678038900645888" className="footer-nav-link">
                            Discord
                        </a> */}
                        <a href="https://twitter.com/CarbonixFi" className="footer-nav-link">
                            Twitter
                        </a>
                        <a href="https://t.me/blackcollateralannouncements" className="footer-nav-link">
                            Telegram
                        </a>
                        <a href="https://github.com/BLACKCOLLATERAL/CarbonFinance" className="footer-nav-link">
                            Whitepaper
                        </a>
                        <a href="https://github.com/CARBONIXDEFI" className="footer-nav-link">
                            Github
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    </>);
}

export default Footer;