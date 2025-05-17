import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns correct time slots', () => {
    const expectedTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
});

test('updateTimes returns same available times regardless of date change', () => {
    const currentTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];
    const newDate = '2024-01-15';
    const action = { type: 'change_date', payload: newDate };
    const result = updateTimes(currentTimes, action);
    expect(result).toEqual(currentTimes);
});