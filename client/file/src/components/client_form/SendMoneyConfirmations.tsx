"use client";
const SendMoneyConfirmations: React.FC = () => {
  const handleSubmitConfirmations = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const description = formData.get("description");
    const data = { description };
  };
  return (
    <form onSubmit={handleSubmitConfirmations}>
      <div className='tw-mb-6'>
        <div className='tw-mb-4'>
          <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
            Description*
          </span>
          <textarea
            name='description'
            placeholder='Payment Description'
            className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-pe-1 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 tw-h-100-px'
            defaultValue={""}
          />
        </div>
      </div>
      <span className='border-neutral-50  border-start-0 border-end-0 tw-py-4 tw-mb-6 fw-semibold tw-text-lg text-dark-600 w-100 text-center'>
        Confirm Details
      </span>
      <div className='border-neutral-50  border-start-0 border-end-0 tw-py-4 tw-mb-6'>
        <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-4'>
          <span className='fw-normal tw-text-4 text-dark-500'>Send Amount</span>
          <span className='fw-semibold tw-text-4 text-dark-600'>
            1,000.00 USD
          </span>
        </div>
        <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap '>
          <span className='fw-normal tw-text-4 text-dark-500'>Total Fees</span>
          <span className='fw-semibold tw-text-4 text-dark-600'>2.34 USD</span>
        </div>
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
          SEND MONEY
        </button>
      </div>
    </form>
  );
};

export default SendMoneyConfirmations;
