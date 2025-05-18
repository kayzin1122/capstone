import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
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