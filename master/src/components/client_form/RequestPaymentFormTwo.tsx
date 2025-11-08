"use client";
import CountryDropdown from "@/helper/CountryDropdown";

const RequestPaymentFormTwo: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const country = formData.get("country");
    const amount = formData.get("amount");
    const data = { name, email, country, amount };
  };
  return (
    <form onSubmit={handleSubmit} className='tw-mb-6'>
      <div className='row gy-4'>
        <div className='col-lg-6'>
          <label
            htmlFor='Name'
            className='fw-normal tw-text-4 text-dark-600 tw-mb-205'
          >
            Name*
          </label>
          <input
            name='name'
            id='Name'
            type='text'
            className='tw-px-3 tw-py-3 tw-text-4 text-dark-500 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
            placeholder='Enter Name'
          />
        </div>
        <div className='col-lg-6'>
          <label
            htmlFor='email*'
            className='fw-normal tw-text-4 text-dark-600 tw-mb-205'
          >
            Email*
          </label>
          <input
            name='email'
            type='email'
            id='email*'
            className='tw-px-3 tw-py-3 tw-text-4 text-dark-500 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 focus-border-main-600'
            placeholder='Enter Email Address'
          />
        </div>
        <div className='col-lg-6'>
          <span className='fw-normal tw-text-4 text-dark-600 tw-mb-205'>
            Country*
          </span>
          <select
            name='country'
            className='tw-px-3 tw-py-3 tw-text-4 text-dark-500 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
          >
            <option value={1}>Pakistan</option>
            <option value={2}>Russia</option>
            <option value={3}>South Africa</option>
            <option value={4}>South Korea</option>
            <option value={5}>Bangldesh</option>
          </select>
        </div>
        <div className='col-lg-6'>
          <label
            htmlFor='amount'
            className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
          >
            Amount*
          </label>
          <div className='position-relative'>
            <input
              name='amount'
              placeholder='2.00.000'
              id='amount'
              className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-05 border focus-visible-border-main-600'
            />
            {/* CountryDropdown */}
            <CountryDropdown />
          </div>
        </div>
        <div className='col-12'>
          <label
            htmlFor='Description'
            className='fw-normal tw-text-4 text-dark-600 tw-mb-205'
          >
            Description*
          </label>
          <textarea
            id='Description'
            className='tw-px-3 tw-pt-3 tw-pb-17 tw-text-4 text-dark-500 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
            placeholder='Payment Description'
            defaultValue={""}
          />
        </div>
      </div>
      <div className='position-relative z-1 tw-mt-6'>
        <button
          type='submit'
          className='request-button text-white tw-text-lg fw-semibold bg-base-two-600 tw-py-3 w-100 border-base-two-600 rounded-2'
        >
          REQUEST PAYMENT
        </button>
      </div>
    </form>
  );
};

export default RequestPaymentFormTwo;
