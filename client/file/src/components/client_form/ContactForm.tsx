"use client";

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const message = formData.get("message");
    const name = formData.get("name");
    const number = formData.get("number");
    const subject = formData.get("subject");

    const data = { email, message, name, number, subject };
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='row gy-4 tw-mb-12'>
        <div className='col-lg-6'>
          <label
            htmlFor='name'
            className='fw-normal tw-text-lg tw-mb-3 text-dark-600'
          >
            Your Name*
          </label>
          <input
            name='name'
            id='name'
            type='text'
            placeholder='Name'
            className='fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 rounded-pill w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600'
          />
        </div>
        <div className='col-lg-6'>
          <label
            htmlFor='email'
            className='fw-normal tw-text-lg tw-mb-3 text-dark-600'
          >
            Email Address*
          </label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Email'
            className='fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 rounded-pill w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600'
          />
        </div>
        <div className='col-lg-6'>
          <label
            htmlFor='number'
            className='fw-normal tw-text-lg tw-mb-3 text-dark-600'
          >
            Phone Number*
          </label>
          <input
            name='number'
            type='text'
            id='number'
            placeholder='Phone Neumber'
            className='fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 rounded-pill w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600'
          />
        </div>
        <div className='col-lg-6'>
          <label
            htmlFor='subject'
            className='fw-normal tw-text-lg tw-mb-3 text-dark-600'
          >
            Subject*
          </label>
          <input
            name='subject'
            type='text'
            id='subject'
            placeholder='Name'
            className='fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 rounded-pill w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600'
          />
        </div>
        <div className='col-12'>
          <label
            htmlFor='message'
            className='fw-normal tw-text-lg tw-mb-3 text-dark-600'
          >
            Describe your message*
          </label>
          <textarea
            name='message'
            placeholder='Message'
            id='message'
            className='fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 tw-rounded-md tw-h-156-px w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600'
            defaultValue={""}
          />
        </div>
      </div>
      <button
        type='submit'
        className='tw-px-4 tw-py-3 bg-base-two-600 text-white fw-semibold tw-text-lg  w-100 tw-rounded-md text-center'
      >
        Submit Now
      </button>
    </form>
  );
};

export default ContactForm;
