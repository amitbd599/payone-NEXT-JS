import CountryDropdown from "@/helper/CountryDropdown";

const BannerTwoForm: React.FC = () => {
  return (
    <div className='banner-two-card bg-white tw-px-6 tw-py-6 rounded-3 border-base-two-600'>
      <div className='text-center tw-mb-6'>
        <span className='fw-normal tw-text-lg text-dark-500 tw-mb-2'>
          Exchange Rate
        </span>
        <h4 className='fw-normal text-dark-600 cursor-big'>
          2GBP = 2.45975 USD
        </h4>
      </div>
      <div className='tw-mb-5'>
        <div className='tw-mb-3'>
          <label
            htmlFor='send'
            className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
          >
            You Send*
          </label>
          <div className='position-relative'>
            <input
              type='text'
              name='send'
              placeholder='$25,000'
              id='send'
              className='tw-px-3 tw-py-3 w-100 fw-semibold tw-text-4 text-dark-600 rounded-3 border-neutral-50 focus-visible-border-main-600'
            />

            {/* CountryDropdown */}
            <CountryDropdown />
          </div>
        </div>
        <div className=''>
          <label
            htmlFor='gets'
            className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
          >
            Recipient Gets*
          </label>
          <div className='position-relative'>
            <input
              type='text'
              name='gets'
              placeholder='$14,250.00'
              id='gets'
              className='tw-px-3 tw-py-3 w-100 fw-semibold tw-text-4 text-dark-600 rounded-3 border-neutral-50 focus-visible-border-main-600'
            />
            {/* CountryDropdown */}
            <CountryDropdown />
          </div>
        </div>
      </div>
      <div className='tw-mb-5'>
        <div className='tw-mb-3'>
          <label
            htmlFor='Deliver'
            className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
          >
            Deliver To*
          </label>
          <select
            name='deliver'
            id='Deliver'
            className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-50 focus-visible-border-main-600'
          >
            <option value={1}>Bank</option>
            <option value={2}>Insurance</option>
            <option value={3}>Investment</option>
            <option value={4}>Loan</option>
            <option value={5}>Credit Card</option>
          </select>
        </div>
        <div>
          <label
            htmlFor='paywith'
            className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
          >
            Pay With*
          </label>
          <select
            name='paywith'
            id='paywith'
            className='tw-px-3 tw-py-3 w-100 fw-medium tw-text-4 text-dark-600 rounded-3 border-neutral-50 focus-visible-border-main-600'
          >
            <option value={1}>Cash Pickup</option>
            <option value={2}>Bank Transfer</option>
            <option value={3}>Mobile Wallet</option>
            <option value={4}>Home Delivery</option>
          </select>
        </div>
      </div>
      <div className='tw-mb-6'>
        <div className='d-flex align-items-center tw-gap-4 justify-content-between flex-wrap tw-mb-3'>
          <span className='fw-normal tw-text-4 text-dark-600'>
            Should Arrive
          </span>
          <span className='fw-semibold tw-text-4 text-dark-600'>
            Should Arrive
          </span>
        </div>
        <div className='d-flex align-items-center tw-gap-4 justify-content-between flex-wrap tw-mb-3'>
          <span className='fw-normal tw-text-4 text-dark-600'>Fee</span>
          <span className='fw-semibold tw-text-4 text-dark-600'>GBP 0.00</span>
        </div>
        <div className='d-flex align-items-center tw-gap-4 justify-content-between flex-wrap tw-mb-3'>
          <span className='fw-normal tw-text-4 text-dark-600'>
            Total To Pay
          </span>
          <span className='fw-semibold tw-text-4 text-dark-600'>
            GBP 750.00
          </span>
        </div>
      </div>
      <div className='position-relative z-1'>
        <button
          type='submit'
          className='banner-two-button bg-dark-600 w-100 tw-py-3 text-white rounded-3 border-warning-600-2px fw-semibold'
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default BannerTwoForm;
