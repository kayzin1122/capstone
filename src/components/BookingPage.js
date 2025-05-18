import BookingForm from "./BookingForm";
import Nav from './Nav';
import {useReducer, useState} from "react";
import { fetchAPI, submitAPI } from '../utils/apiFunctions';
import { useNavigate } from 'react-router-dom';

// Function to update available times based on selected date
export function updateTimes(availableTimes, action){
    switch(action.type) {
        case 'change_date':
            // Return available times for the selected date
            return fetchAPI(new Date(action.date));
        default:
            return availableTimes;
    }
}

// Function to initialize available times for today's date
export function initializeTimes(){
    // Return available times for today's date
    return fetchAPI(new Date());
}

function BookingPage() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    // Function to accepts form data
    function submitForm(formData) {
        // Send form data to server
        if (submitAPI(formData)) {
            // Redirect to confirmation page
            navigate('/confirmed_booking');
        }
    }


    return (
        <>
            <Nav />
            <main>
                <h1>Booking Page</h1>
                <BookingForm
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    guests={guests}
                    setGuests={setGuests}
                    occasion={occasion}
                    setOccasion={setOccasion}
                    availableTimes={availableTimes}
                    dispatch={setAvailableTimes}
                    submitForm={submitForm}
                />
            </main>
        </>
    );
}

export default BookingPage;