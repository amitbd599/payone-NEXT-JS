"use client";
import CountryDropdown from "@/helper/CountryDropdown";

const SendMoneyForm: React.FC = () => {
  const handleSubmitPersonalDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const address = formData.get("address");
    const send_amount = formData.get("send_amount");
    const recipient_amount = formData.get("recipient_amount");

    const data = { address, send_amount, recipient_amount };
  };
  return (
    <form onSubmit={handleSubmitPersonalDetails}>
      <div className='tw-mb-6'>
        <div className='tw-mb-4'>
          <label
            htmlFor='Recipient'
            className='fw-normal tw-text-4 text-dark-600 tw-mb-3'
          >
            Recipient*
          </label>
          <input
            name='address'
            type='text'
            id='Recipient'
            placeholder='Your Address'
            className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-ps-1 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
          />
        </div>

        <div className='t-mb-4'>
          <label
            htmlFor='amount'
            className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
          >
            You Send*
          </label>
          <div className='position-relative'>
            <input
              name='send_amount'
              placeholder='2.00.000'
              id='amount'
              className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-05 border focus-visible-border-main-600'
            />

            {/* CountryDropdown */}
            <CountryDropdown />
          </div>
        </div>
        <div className='t-mb-4'>
          <label
            htmlFor='Gets'
            className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
          >
            Recipient Gets*
          </label>
          <div className='position-relative'>
            <input
              name='recipient_amount'
              placeholder='2.00.000'
              id='Gets'
              className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-05 border focus-visible-border-main-600'
            />
            {/* CountryDropdown */}
            <CountryDropdown />
          </div>
        </div>

        <p className='fw-normal tw-text-4 text-dark-500 text-center'>
          The current exchange rate is
          <span className='text-dark-700 fw-medium'>1 USD = 1.42030 AUD</span>
        </p>
      </div>
      <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap border-neutral-50  border-start-0 border-end-0 tw-py-4 tw-mb-6'>
        <span className='fw-normal tw-text-4 text-dark-500'>Total Fees</span>
        <span className='fw-semibold tw-text-4 text-dark-600'>7.21 USD</span>
      </div>
      <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6'>
        <span className='fw-semibold tw-text-4 text-dark-600'>
          Total To Pay
        </span>
        <span className='fw-semibold tw-text-4 text-dark-600'>
          1,000.00 USD
        </span>
      </div>
      <div className='position-relative w-100 z-1 h-100'>
        <button
          type='submit'
          className='send-details-button text-center fw-semibold tw-text-lg text-white bg-base-two-600 rounded-3 border-two-px-solid w-100 tw-py-3'
        >
          COUNTINUE
        </button>
      </div>{" "}
    </form>
  );
};

export default SendMoneyForm;
