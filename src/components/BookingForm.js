import { useState, useEffect } from 'react';

function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, dispatch, submitForm }) {
    // State to track form validity
    const [isFormValid, setIsFormValid] = useState(false);

    // Update form validity whenever any field changes
    useEffect(() => {
        const isValidDate = date.trim() !== '';
        const isValidTime = time.trim() !== '';
        const isValidGuests = Number(guests) >= 1 && Number(guests) <= 10;
        const isValidOccasion = occasion.trim() !== '';

        setIsFormValid(isValidDate && isValidTime && isValidGuests && isValidOccasion);
    }, [date, time, guests, occasion]);

    return (
        <form className="booking-form" onSubmit={(e) => {
            e.preventDefault();
            if (isFormValid) {
                submitForm({
                    date,
                    time,
                    guests,
                    occasion
                });
            }
        }}>
            <div className="booking-section">
                <h1 style={{ marginBottom: "5px", textAlign: "center" }}>Booking Page</h1>
            </div>

            <label htmlFor="res-date">Choose date</label>
            <input 
                required 
                type="date" 
                id="res-date" 
                className="booking-input"
                aria-label="Choose a date"
                value={date} 
                onChange= {(e) => {
                    setDate(e.target.value);
                    dispatch({ type: 'change_date', date: e.target.value });
                }}
            />

            <label htmlFor="res-time">Choose time</label>
            <select 
                required 
                id="res-time" 
                className="booking-select"
                 aria-label="Choose a time"
                value={time} 
                onChange= {(e) => setTime(e.target.value)}
            >
                <option value="" disabled>Select time</option>
                {availableTimes?.map(time => (
                    <option key={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input 
                required 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                className="booking-input"
                 aria-label="Enter number of guests"
                value={guests} 
                onChange= {(e) => setGuests(e.target.value)} 
            />

            <label htmlFor="occasion">Occasion</label>
            <select 
                required 
                id="occasion" 
                className="booking-select"
                 aria-label="Choose an occasion"
                value={occasion} 
                onChange= {(e) => setOccasion(e.target.value)}
            >
                <option value="" disabled>Select occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input 
                type="submit" 
                className="booking-submit" 
                value="Make Your reservation"  
                aria-label="Button to submit form"
                disabled={!isFormValid}
            />
        </form>
    );
}

export default BookingForm;