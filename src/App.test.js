import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/BookingPage';
import { submitAPI } from './utils/apiFunctions';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} />);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns correct time slots', () => {
    const time = initializeTimes();
    expect(Array.isArray(time)).toBe(true);
    expect(time.length).toBeGreaterThan(0);
});

test('updateTimes returns updated times when date changes', () => {
    // Setup
    const currentTimes = initializeTimes();
    const testDate = '2024-01-15';

    // Create action with date property as used in BookingForm.js
    const action = { type: 'change_date', date: testDate };

    // Execute
    const result = updateTimes(currentTimes, action);

    // Verify
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});

// HTML5 Validation Tests
test('Date input has required attribute and correct type', () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} />);
    const dateInput = screen.getByLabelText(/choose date/i);

    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('type', 'date');
});

test('Time select has required attribute', () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} />);
    const timeSelect = screen.getByLabelText(/choose time/i);

    expect(timeSelect).toHaveAttribute('required');
});

test('Guests input has required attribute and correct min/max values', () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
});

test('Occasion select has required attribute', () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(occasionSelect).toHaveAttribute('required');
});

// JavaScript Validation Tests
test('Submit button is disabled when form is invalid', () => {
    render(<BookingForm 
        date="" 
        time="" 
        guests="" 
        occasion="" 
        availableTimes={["17:00", "18:00"]} 
        setDate={() => {}} 
        setTime={() => {}} 
        setGuests={() => {}} 
        setOccasion={() => {}} 
        dispatch={() => {}} 
        submitForm={() => {}} 
    />);
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
});

test('Submit button is enabled when all form fields are valid', () => {
    render(<BookingForm 
        date="2024-01-15" 
        time="17:00" 
        guests="2" 
        occasion="Birthday" 
        availableTimes={["17:00", "18:00"]} 
        setDate={() => {}} 
        setTime={() => {}} 
        setGuests={() => {}} 
        setOccasion={() => {}} 
        dispatch={() => {}} 
        submitForm={() => {}} 
    />);
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).not.toBeDisabled();
});

test('Form validation updates when fields change', () => {
    const setDate = jest.fn();
    const setTime = jest.fn();
    const setGuests = jest.fn();
    const setOccasion = jest.fn();
    const dispatch = jest.fn();
    
    const { rerender } = render(<BookingForm 
        date="" 
        time="" 
        guests="" 
        occasion="" 
        availableTimes={["17:00", "18:00"]} 
        setDate={setDate} 
        setTime={setTime} 
        setGuests={setGuests} 
        setOccasion={setOccasion} 
        dispatch={dispatch} 
        submitForm={() => {}} 
    />);
    
    // Initially button should be disabled
    let submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
    
    // Update form with valid values
    rerender(<BookingForm 
        date="2024-01-15" 
        time="17:00" 
        guests="2" 
        occasion="Birthday" 
        availableTimes={["17:00", "18:00"]} 
        setDate={setDate} 
        setTime={setTime} 
        setGuests={setGuests} 
        setOccasion={setOccasion} 
        dispatch={dispatch} 
        submitForm={() => {}} 
    />);
    
    // Now button should be enabled
    submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).not.toBeDisabled();
});

test('Form submission calls submitForm with correct data', () => {
    const submitForm = jest.fn();
    
    render(<BookingForm 
        date="2024-01-15" 
        time="17:00" 
        guests="2" 
        occasion="Birthday" 
        availableTimes={["17:00", "18:00"]} 
        setDate={() => {}} 
        setTime={() => {}} 
        setGuests={() => {}} 
        setOccasion={() => {}} 
        dispatch={() => {}} 
        submitForm={submitForm} 
    />);
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);
    
    expect(submitForm).toHaveBeenCalledWith({
        date: "2024-01-15",
        time: "17:00",
        guests: "2",
        occasion: "Birthday"
    });
});

test('Form does not submit when invalid', () => {
    const submitForm = jest.fn();
    
    render(<BookingForm 
        date="" 
        time="17:00" 
        guests="2" 
        occasion="Birthday" 
        availableTimes={["17:00", "18:00"]} 
        setDate={() => {}} 
        setTime={() => {}} 
        setGuests={() => {}} 
        setOccasion={() => {}} 
        dispatch={() => {}} 
        submitForm={submitForm} 
    />);
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);
    
    expect(submitForm).not.toHaveBeenCalled();
});

test('Individual field validation works correctly', () => {
    // Test with only date missing
    const { rerender } = render(<BookingForm 
        date="" 
        time="17:00" 
        guests="2" 
        occasion="Birthday" 
        availableTimes={["17:00", "18:00"]} 
        setDate={() => {}} 
        setTime={() => {}} 
        setGuests={() => {}} 
        setOccasion={() => {}} 
        dispatch={() => {}} 
        submitForm={() => {}} 
    />);
    
    let submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
    
    // Test with only time missing
    rerender(<BookingForm 
        date="2024-01-15" 
        time="" 
        guests="2" 
        occasion="Birthday" 
        availableTimes={["17:00", "18:00"]} 
        setDate={() => {}} 
        setTime={() => {}} 
        setGuests={() => {}} 
        setOccasion={() => {}} 
        dispatch={() => {}} 
        submitForm={() => {}} 
    />);
    
    submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
    
    // Test with invalid guests number
    rerender(<BookingForm 
        date="2024-01-15" 
        time="17:00" 
        guests="0" 
        occasion="Birthday" 
        availableTimes={["17:00", "18:00"]} 
        setDate={() => {}} 
        setTime={() => {}} 
        setGuests={() => {}} 
        setOccasion={() => {}} 
        dispatch={() => {}} 
        submitForm={() => {}} 
    />);
    
    submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
    
    // Test with only occasion missing
    rerender(<BookingForm 
        date="2024-01-15" 
        time="17:00" 
        guests="2" 
        occasion="" 
        availableTimes={["17:00", "18:00"]} 
        setDate={() => {}} 
        setTime={() => {}} 
        setGuests={() => {}} 
        setOccasion={() => {}} 
        dispatch={() => {}} 
        submitForm={() => {}} 
    />);
    
    submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
});

