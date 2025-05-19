import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
    return (
        <>
            <Nav />
            <div class="confirmation-card">
                <img src="./images/table.jpg" alt="Reservation table" class="restaurant-image" />

                <div class="confirmation-content">
                    <div className="check-circle" aria-label="Booking confirmation success">
                        <svg
                            className="check-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>

                    <h2 className="confirmation-title">Booked!</h2>

                    <p className="confirmation-message">
                        Your had made a reservation. Details had been send to your email.
                    </p>
                    <Link to="/">
                        <button className="button">
                            Return to Home
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ConfirmedBooking;