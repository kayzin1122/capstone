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

// Step 1: HTML5 Validation Tests
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

// Step 2: JavaScript Validation Tests
