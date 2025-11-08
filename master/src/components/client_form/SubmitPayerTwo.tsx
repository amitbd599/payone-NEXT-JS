const SubmitPayerTwo: React.FC = () => {
  const handleSubmitPayer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);

    const payment = formData.get("payment");
    const data = { payment };
  };
  return (
    <form onSubmit={handleSubmitPayer}>
      <div className='bg-neutral-10 tw-px-8 tw-py-8 rounded-3'>
        <span className='fw-semibold tw-text-xl text-dark-600 justify-content-center d-flex'>
          Payer Details
        </span>
        <span className='bg-base-two-10 w-100 tw-h-px tw-mb-6 tw-mt-6' />
        <div className='tw-mb-6'>
          <div className='tw-mb-6'>
            <span className='fw-normal tw-text-4 text-dark-500 tw-mb-3'>
              Bank*
            </span>
            <select
              name='payment'
              className='bg-white border-neutral-05 w-100 tw-px-4 tw-py-3 rounded-3 focus-visible-border-main-600 text-dark-500'
            >
              <option value={1}>Credit Card</option>
              <option value={2}>Debit Card</option>
              <option value={3}>PayPal</option>
              <option value={4}>Bank Transfer</option>
              <option value={5}>Cash on Delivery</option>
            </select>
          </div>
          <div className='bg-white tw-px-6 tw-py-6 rounded-3 tw-mb-6'>
            <div className='d-flex align-items-center tw-gap-3 flex-wrap tw-mb-3'>
              <span className='max-w-152-px w-100 '>Account Name:</span>
              <span className='fw-semibold tw-text-lg text-dark-600'>
                Darrell Steward
              </span>
            </div>
            <div className='d-flex align-items-center tw-gap-3 flex-wrap tw-mb-3'>
              <span className='max-w-152-px w-100 '>Account Number:</span>
              <span className='fw-semibold tw-text-lg text-dark-600'>
                000-098-568-6598
              </span>
            </div>
            <div className='d-flex align-items-center tw-gap-3 flex-wrap tw-mb-3'>
              <span className='max-w-152-px w-100 '>Bank Name:</span>
              <span className='fw-semibold tw-text-lg text-dark-600'>
                Sonar Bank
              </span>
            </div>
          </div>
          <div>
            <div className='border-base-two-10 border border-start-0 border-end-0 tw-py-3 tw-mb-6'>
              Details
            </div>
            <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-4'>
              <span className='fw-normal tw-text-4 text-dark-500'>
                Deposit Amount
              </span>
              <span className='fw-semibold tw-text-4 text-dark-600'>
                2,000.00 USD
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap'>
              <span className='fw-normal tw-text-4 text-dark-500'>Fees</span>
              <span className='fw-semibold tw-text-4 text-dark-600'>
                0.00 USD
              </span>
            </div>
            <span className='bg-base-two-10 w-100 tw-h-px tw-mb-6 tw-mt-6' />
            <div className='d-flex align-items-center justify-content-between tw-gap-3'>
              <span className='fw-semibold tw-text-4 text-dark-600'>Total</span>
              <span className='fw-semibold tw-text-4 text-dark-600'>
                2,000.00 USD
              </span>
            </div>
          </div>
        </div>
        <div className='position-relative w-100 z-1 h-100'>
          <button
            type='submit'
            className='send-details-button text-center fw-semibold tw-text-lg text-white bg-base-two-600 rounded-3 border-two-px-solid w-100 tw-py-3'
          >
            CONFIRM
          </button>
        </div>
      </div>
    </form>
  );
};

export default SubmitPayerTwo;
