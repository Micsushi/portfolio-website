import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import emailjs from 'emailjs-com';
import Contact from './components/Contact';

jest.mock('emailjs-com', () => ({ send: jest.fn() }));
jest.mock('./components/useAnimation', () => ({ __esModule: true, default: () => ({ current: null }) }));

beforeEach(() => jest.clearAllMocks());

test('failed delivery keeps the draft and permits a later retry', async () => {
  const clock = jest.spyOn(Date, 'now').mockReturnValue(100_000);
  const errorLog = jest.spyOn(console, 'error').mockImplementation(() => {});
  try {
    (emailjs.send as jest.Mock).mockRejectedValueOnce(new Error('Synthetic unavailable transport')).mockResolvedValueOnce({status: 200});
    render(<Contact />);
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Example Person' } });
    fireEvent.change(screen.getByLabelText('Your Email address'), { target: { value: 'example@example.com' } });
    fireEvent.change(screen.getByLabelText('Your Message'), { target: { value: 'Retain this synthetic draft' } });
    fireEvent.click(screen.getByRole('button', { name: 'SEND' }));
    expect(await screen.findByText('Failed to send your message. Please try again.')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Message')).toHaveValue('Retain this synthetic draft');
    clock.mockReturnValue(130_001);
    fireEvent.click(screen.getByRole('button', { name: 'SEND' }));
    expect(await screen.findByText('Your message has been sent successfully!')).toBeInTheDocument();
    expect(emailjs.send).toHaveBeenCalledTimes(2);
    await waitFor(() => expect(screen.getByLabelText('Your Message')).toHaveValue(''));
  } finally { clock.mockRestore(); errorLog.mockRestore(); }
});

test('whitespace-only name and message do not send empty content', async () => {
  render(<Contact />);
  fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: '   ' } });
  fireEvent.change(screen.getByLabelText('Your Email address'), { target: { value: 'example@example.com' } });
  fireEvent.change(screen.getByLabelText('Your Message'), { target: { value: '\n   \t' } });
  fireEvent.click(screen.getByRole('button', { name: 'SEND' }));
  expect(await screen.findByText('Name is required')).toBeInTheDocument();
  expect(screen.getByText('A message is required')).toBeInTheDocument();
  expect(emailjs.send).not.toHaveBeenCalled();
});

test('empty contact fields do not send a message', async () => {
  render(<Contact />);
  fireEvent.click(screen.getByRole('button', { name: 'SEND' }));
  expect(await screen.findByText('Name is required')).toBeInTheDocument();
  expect(screen.getByText('Email is required')).toBeInTheDocument();
  expect(screen.getByText('A message is required')).toBeInTheDocument();
  expect(emailjs.send).not.toHaveBeenCalled();
});

test('valid contact submission sends trimmed values and clears the form', async () => {
  (emailjs.send as jest.Mock).mockResolvedValue({ status: 200 });
  render(<Contact />);
  fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: ' Example Person ' } });
  fireEvent.change(screen.getByLabelText('Your Email address'), { target: { value: 'example@example.com' } });
  fireEvent.change(screen.getByLabelText('Your Message'), { target: { value: ' Synthetic test message ' } });
  fireEvent.click(screen.getByRole('button', { name: 'SEND' }));
  expect(await screen.findByText('Your message has been sent successfully!')).toBeInTheDocument();
  expect(emailjs.send).toHaveBeenCalledWith(expect.any(String), expect.any(String), {
    name: 'Example Person', contact: 'example@example.com', email: 'example@example.com', message: 'Synthetic test message',
  }, expect.any(String));
  await waitFor(() => expect(screen.getByLabelText('Your Name')).toHaveValue(''));
});
