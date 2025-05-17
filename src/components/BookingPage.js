import BookingForm from "./BookingForm";
import Nav from './Nav';
import {useReducer, useState} from "react";
import { fetchAPI} from './src/utils/apiFunctions';


function BookingPage() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    // Function to update available times based on selected date
    function updateTimes(availableTimes, action){
        switch(action.type) {
            case 'change_date':
                // Return available times for the selected date
                return fetchAPI(new Date(action.date));
            default:
                return availableTimes;
        }
    }

    // Function to initialize available times for today's date
    function initializeTimes(){
        // Return available times for today's date
        return fetchAPI(new Date());
    }

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, [], initializeTimes);

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
                />
            </main>
        </>
    );
}

export default BookingPage;