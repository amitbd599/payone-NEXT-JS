const WorkingSectionOne: React.FC = () => {
  return (
    <section className='py-140 z-1 bg-neutral-10 margin-top--311px overflow-hidden'>
      <div className='container'>
        <div className='pt-311px'>
          <div className='max-w-856 mx-auto justify-content-center overflow-hidden'>
            <div className='tw-mb-80-px mx-auto text-center align-items-center  justify-content-center'>
              <h3
                className='fw-normal tw-mb-3 cursor-big'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                Fast, Safe &amp; Simple Transactions
              </h3>
              <p
                className='tw-text-lg text-dark-500 fw-normal'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                The easiest and most secure way to receive money anytime,
                anywhere with ease.
              </p>
            </div>
            <div className=' position-relative overflow-hidden'>
              <span className='fast-safe border-neutral-100 position-absolute top-0 start-50 w-05 h-100  d-lg-block d-none' />
              <div
                className='working-process max-w-580 d-flex align-items-center tw-gap-16 tw-ms-auto pb-120 flex-wrap'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='tw-w-100px tw-h-100-px bg-base-two-10 tw-text-15 rounded-circle d-flex align-items-center justify-content-center text-base-two-600 flex-shrink-0'>
                  <i className='ph-fill ph-user-circle' />
                </span>
                <div className='max-w-400 tw-px-10'>
                  <span className='fw-bold tw-text-lg text-primary-600 tw-mb-3'>
                    STEP_01{" "}
                  </span>
                  <h4 className='fw-normal tw-mb-3 cursor-big'>
                    Create an Account
                  </h4>
                  <p className='fw-normal tw-text-lg text-dark-500'>
                    Sign up with your email or phone number. Complete a quick
                    verification to secure your account.
                  </p>
                </div>
              </div>
              <div
                className=' working-process max-w-580 d-flex align-items-center tw-gap-16 text-end pb-120 flex-wrap'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='max-w-400 tw-px-10 working-process__text'>
                  <span className='fw-bold tw-text-lg text-primary-600 tw-mb-3'>
                    STEP_02
                  </span>
                  <h4 className='fw-normal tw-mb-3 cursor-big'>
                    Add Payment Method
                  </h4>
                  <p className='fw-normal tw-text-lg text-dark-500'>
                    Link your bank account, debit/credit card, or digital wallet
                    to start sending or receiving money instantly.
                  </p>
                </div>
                <span className='payment-method tw-w-100px tw-h-100-px bg-base-two-10 tw-text-15 rounded-circle d-flex align-items-center justify-content-center text-base-two-600 flex-shrink-0'>
                  <i className='ph-fill ph-cardholder' />
                </span>
              </div>
              <div
                className='working-process max-w-580 d-flex align-items-center tw-gap-16 pb-120 flex-wrap tw-ms-auto'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='tw-w-100px tw-h-100-px bg-base-two-10 tw-text-13 rounded-circle d-flex align-items-center justify-content-center text-base-two-600 flex-shrink-0 transform-scale-09'>
                  <i className='ph-fill ph-navigation-arrow' />
                </span>
                <div className='max-w-400 tw-px-10'>
                  <span className='fw-bold tw-text-lg text-primary-600 tw-mb-3'>
                    STEP_03{" "}
                  </span>
                  <h4 className='fw-normal tw-mb-3 cursor-big'>
                    Send or Request Money
                  </h4>
                  <p className='fw-normal tw-text-lg text-dark-500'>
                    Choose your contact, enter the amount, and send or request
                    money in just a few taps.
                  </p>
                </div>
              </div>
              <div
                className='working-process max-w-580 d-flex align-items-center tw-gap-16 text-end flex-wrap'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='max-w-400 tw-px-10 working-process__text'>
                  <span className='fw-bold tw-text-lg text-primary-600 tw-mb-3'>
                    STEP_04
                  </span>
                  <h4 className='fw-normal tw-mb-3 cursor-big'>
                    {" "}
                    Track &amp; Confirm
                  </h4>
                  <p className='fw-normal tw-text-lg text-dark-500'>
                    Get real-time notifications and track your transactions with
                    full transparency and security.
                  </p>
                </div>
                <span className='payment-method tw-w-100px tw-h-100-px bg-base-two-10 tw-text-15 rounded-circle d-flex align-items-center justify-content-center text-base-two-600 flex-shrink-0'>
                  <i className='ph-fill ph-map-pin' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingSectionOne;
