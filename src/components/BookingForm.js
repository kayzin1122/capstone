import { submitAPI } from '../utils/apiFunctions';

function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, dispatch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date,
            time,
            guests,
            occasion
        };
        // Submit form data to the API
        const success = submitAPI(formData);
        if (success) {
            // Form submission was successful
            alert('Booking confirmed!');
            // Reset form fields
            setDate('');
            setTime('');
            setGuests('');
            setOccasion('');
        }
    };

    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange= {(e) => {
                setDate(e.target.value);
                dispatch({ type: 'change_date', date: e.target.value });
            }}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange= {(e) => setTime(e.target.value)}>
                {availableTimes?.map(time => (
                    <option key={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange= {(e) => setGuests(e.target.value)} />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange= {(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;