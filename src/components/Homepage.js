import Nav from './Nav';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Footer from './Footer';

function Homepage() {
    return (
        <div className="Homepage">
            <Nav />
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Footer />
        </div>
    );
}

export default Homepage;