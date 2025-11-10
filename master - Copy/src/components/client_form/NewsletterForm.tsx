"use client";
const NewsletterForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    const data = { email };
  };
  return (
    <form onSubmit={handleSubmit} className='tw-mb-8 position-relative w-100'>
      <input
        name='email'
        type='email'
        className='form-control bg-neutral-800 shadow-none border border-neutral-700 text-dark-600 rounded-pill tw-ps-6 tw-pe-13 focus-border-main-600 tw-h-12 text-dark-600 tw-placeholder-text-neutral-300 focus-tw-placeholder-text-hidden tw-placeholder-transition-2 w-100'
        placeholder='Enter Your Email'
      />
      <button
        type='submit'
        className='tw-w-9 tw-h-9 flex-center rounded-circle bg-base-two-600 text--white hover-bg-main-800 position-absolute top-50 tw--translate-y-50 tw-end-0 tw-me-2 tw-transition-04-secend'
      >
        <i className='ph ph-paper-plane-tilt' />
      </button>
    </form>
  );
};

export default NewsletterForm;
