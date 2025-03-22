import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import '../assets/styles/Contact.scss';
import useAnimation from './useAnimation'; 

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const { control, handleSubmit, reset } = useForm<IFormInputs>();
  const [notification, setNotification] = useState<string | null>(null);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const emailData: Record<string, unknown> = { ...data };
    emailjs.send(
      'service_i4f0bbl', 
      'template_hkc0naq', 
      emailData,
      'W2wOTit0q-Cka9FVm'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setNotification('Your message has been sent successfully!');
      reset(); 
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setNotification('Failed to send your message. Please try again.');
    });
  };

  const h1Ref = useAnimation<HTMLHeadingElement>();

  return (
    <div className="contact-container" id="contact">
      <h1 ref={h1Ref} className="contact-title">Contact Me</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <p className="contact-description">
          Got a project waiting to be realized? Let's collaborate and make it happen!
        </p>
        <div className="form-flex">
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Your Name"
                placeholder="What's your name?"
                fullWidth
                error={!!error}
                helperText={error?.message}
                className="custom-textfield"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Email / Phone"
                placeholder="How can I reach you?"
                fullWidth
                error={!!error}
                helperText={error?.message}
                className="custom-textfield"
              />
            )}
          />
        </div>
        <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: 'A message is required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Your Message"
                placeholder="What's your message to me?"
                fullWidth
                error={!!error}
                helperText={error?.message}
                className="custom-textfield"
              />
            )}
          />
        <Button type="submit" variant="contained" endIcon={<SendIcon />} className="submit-button">
          SEND
        </Button>
      </form>
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
}

export default Contact;