import { useRef, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import '../assets/styles/Contact.scss';
import useAnimation from './useAnimation'; 

interface IFormInputs {
  name: string;
  contact: string;
  message: string;
  website: string;
}

function Contact() {
  const { control, handleSubmit, register, reset, formState: { isSubmitting } } = useForm<IFormInputs>({
    defaultValues: { name: '', contact: '', message: '', website: '' },
  });
  const [notification, setNotification] = useState<string | null>(null);
  const lastSubmitAt = useRef(0);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    // Honeypot: real users never see or fill this field. Silently discard bots.
    if (data.website.trim()) {
      reset();
      return;
    }
    const now = Date.now();
    if (now - lastSubmitAt.current < 30_000) {
      setNotification('Please wait a moment before sending another message.');
      return;
    }
    lastSubmitAt.current = now;
    const emailData = {
      name: data.name.trim(),
      contact: data.contact.trim(),
      message: data.message.trim(),
      email: data.contact.trim(),
    };
    try {
      await emailjs.send(
        'service_i4f0bbl',
        'template_hkc0naq',
        emailData,
        'W2wOTit0q-Cka9FVm'
      );
      setNotification('Your message has been sent successfully!');
      reset();
    } catch (err) {
      console.error('Contact form submission failed', err);
      setNotification('Failed to send your message. Please try again.');
    }
  };

  const h1Ref = useAnimation<HTMLHeadingElement>();

  return (
    <div className="contact-container" id="contact">
      <h1 ref={h1Ref} className="header">Contact Me</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <p className="contact-description">
          Have a project in mind? Send me a message.
        </p>
        <input
          {...register('website')}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="contact-honeypot"
        />
        <div className="form-flex">
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required', maxLength: { value: 120, message: 'Name is too long' } }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Your Name"
                placeholder="What's your name?"
                fullWidth
                error={!!error}
                helperText={error?.message}
                className="custom-textfield"
                inputProps={{ maxLength: 120, autoComplete: 'name' }}
              />
            )}
          />
          <Controller
            name="contact"
            control={control}
            defaultValue=""
            rules={{ 
              required: 'Email is required',
              maxLength: { value: 254, message: 'Email is too long' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Your Email address"
                placeholder="How can I reach you?"
                fullWidth
                error={!!error}
                helperText={error?.message}
                className="custom-textfield"
                inputProps={{ maxLength: 254, autoComplete: 'email' }}
              />
            )}
          />
        </div>
        <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: 'A message is required', maxLength: { value: 2000, message: 'Message is too long' } }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Your Message"
                placeholder="What's your message to me?"
                fullWidth
                error={!!error}
                helperText={error?.message}
                className="custom-textfield"
                inputProps={{ maxLength: 2000 }}
              />
            )}
          />
        <Button type="submit" variant="contained" endIcon={<SendIcon />} className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'SENDING...' : 'SEND'}
        </Button>
      </form>
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
}

export default Contact;
