"use client";
import CountryDropdown from "@/helper/CountryDropdown";

const SubmitPayerOne: React.FC = () => {
  const handleSubmitPayerDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const amount = formData.get("amount");
    const payment = formData.get("payment");
    const data = { amount, payment };
  };
  return (
    <form onSubmit={handleSubmitPayerDetails}>
      <div className='bg-neutral-10 tw-px-8 tw-py-8 rounded-3'>
        <span className='fw-semibold tw-text-xl text-dark-600 justify-content-center d-flex'>
          Payer Details
        </span>
        <span className='bg-base-two-10 w-100 tw-h-px tw-mb-6 tw-mt-6' />
        <div className='tw-mb-6'>
          <div className='tw-mb-6'>
            <label
              htmlFor='amount'
              className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
            >
              Amount*
            </label>
            <div className='position-relative'>
              <input
                type='number'
                name='amount'
                placeholder='2.00.000'
                id='amount'
                className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-05 border focus-visible-border-main-600'
              />
              {/* CountryDropdown */}
              <CountryDropdown />
            </div>
          </div>
          <div className='tw-mb-6'>
            <label
              htmlFor='Payment'
              className='fw-normal tw-text-4 text-dark-600 tw-mb-3'
            >
              Payment Method*
            </label>
            <select
              id='Payment'
              name='payment'
              className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-pr-80-px border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
            >
              <option value={1}>Credit Card</option>
              <option value={2}>Debit Card</option>
              <option value={3}>PayPal</option>
              <option value={4}>Bank Transfer</option>
              <option value={5}>Cash</option>
              <option value={6}>Cryptocurrency</option>
            </select>
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap border-neutral-50  border-start-0 border-end-0 tw-py-4 tw-mb-6'>
          <span className='fw-normal tw-text-4 text-dark-500'>Total Fees</span>
          <div className='d-flex align-items-center tw-gap-2'>
            <span className='fw-semibold tw-text-4 text-dark-600 text-decoration-line-through'>
              7.21 USD
            </span>
            <button
              type='submit'
              className='fw-normal tw-text-sm text-white bg-base-two-600 tw-px-2 tw-py-105 rounded-2'
            >
              Free
            </button>
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6'>
          <span className='fw-semibold tw-text-4 text-dark-600'>
            Transactions fees
          </span>
          <span className='fw-semibold tw-text-4 text-dark-600'>
            2,000.00 USD
          </span>
        </div>
        <div className='position-relative w-100 z-1 h-100'>
          <button
            type='submit'
            className='send-details-button text-center fw-semibold tw-text-lg text-white bg-base-two-600 rounded-3 border-two-px-solid w-100 tw-py-3'
          >
            CONTINUE
          </button>
        </div>
      </div>
    </form>
  );
};

export default SubmitPayerOne;
