"use client";
const FooterTwoSubscribe: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    const data = { email };
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='d-flex align-items-center tw-gap-3 tw-mb-15'
    >
      <input
        type='email'
        name='email'
        placeholder='Your Email'
        className='text-neutral-05 tw-px-4 tw-py-305 bg-transparent border-dark-500 border tw-rounded-xl w-100 focus-visible-border-main-600'
      />
      <button
        type='submit'
        className='tw-w-13 tw-h-13 bg-main-600 tw-rounded-xl text-dark-600 tw-text-2xl d-flex align-items-center justify-content-center flex-shrink-0'
      >
        <i className='ph ph-paper-plane-tilt' />
      </button>
    </form>
  );
};

export default FooterTwoSubscribe;
