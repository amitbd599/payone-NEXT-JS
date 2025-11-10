"use client";
const ServicesDetailsContactForm: React.FC = () => {
  const handleSubmitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const data = { name, email, message };
  };
  return (
    <form onSubmit={handleSubmitContact} className=''>
      <input
        name='name'
        type='text'
        placeholder='Name'
        className='tw-px-4 tw-py-3 text-dark-600 tw-text-4 bg-neutral-10 tw-rounded-md w-100 border-0 focus-visible-border-main-600 tw-mb-4'
      />
      <input
        name='email'
        type='text'
        placeholder='Email'
        className='tw-px-4 tw-py-3 text-dark-600 tw-text-4 bg-neutral-10 tw-rounded-md w-100 border-0 focus-visible-border-main-600 tw-mb-4'
      />
      <textarea
        name='message'
        placeholder='Your Message'
        className='tw-px-4 tw-py-3 text-dark-600 tw-text-4 bg-neutral-10 tw-rounded-md w-100 border-0 focus-visible-border-main-600 tw-h-120-px'
        defaultValue={""}
      />
      <button
        type='submit'
        className='w-100 tw-px-4 tw-py-3 bg-base-two-600 tw-rounded-md text-white fw-normal tw-text-4 tw-mt-4'
      >
        Contact Us
      </button>
    </form>
  );
};

export default ServicesDetailsContactForm;
