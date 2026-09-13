import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import emailjs from 'emailjs-com';
import Contact from './components/Contact';

jest.mock('emailjs-com', () => ({ send: jest.fn() }));
jest.mock('./components/useAnimation', () => ({ __esModule: true, default: () => ({ current: null }) }));

beforeEach(() => jest.clearAllMocks());

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
