import type React from "react";

const PaynoneOne: React.FC = () => {
  return (
    <section className='z-1 bg-neutral-10 py-140 position-relative overflow-hidden'>
      <div className='container'>
        <div className='paynone-item margin-block-start-60px'>
          <div className='text-center justify-content-center align-items-center'>
            <h2
              className='paynone-title tw-text-80-px fw-normal text-dark-600 tw-mb-3 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              WHY PAYONE
            </h2>
            <p
              className='max-w-322 text-dark-500 tw-text-lg fw-normal mx-auto'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              PayOne is constantly growing for a World without high fees.
            </p>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-one max-w-307 payone-card tw-px-8 py-80 bg-warning-500 rounded-4 margin-block-start--120px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-212 text-center justify-content-center align-items-center mx-auto'>
                <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big'>
                  One Contract, One Integration
                </h4>
                <p className='fw-normal tw-text-xl text-dark-600'>
                  Don't get lost in papers! Easy registration, rapid
                  integration!
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-two max-w-307 payone-card tw-ps-7 tw-pe-8 tw-pt-12 tw-pb-10 bg-base-two-600 rounded-4 margin-inline-start--45px margin-block-start-200px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-246 text-center justify-content-center align-items-center mx-auto'>
                <img
                  src='assets/images/icon/payone-img2.png'
                  alt='Image'
                  className='tw-text-80-px tw-mb-8'
                />
                <h5 className='fw-normal text-white tw-mb-6 cursor-big'>
                  No app juggling!
                </h5>
                <p className='fw-normal tw-text-xl text-white'>
                  No card or payment details insertion. Start and finish at the
                  same place!
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-three max-w-307 payone-card tw-ps-7 tw-pe-8 tw-pt-12 tw-pb-10 bg-base-two-600 rounded-4 margin-block-start--200px margin-inline-start-100px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-246 text-center justify-content-center align-items-center mx-auto'>
                <img
                  src='assets/images/icon/payone-img1.png'
                  alt='Image'
                  className='tw-text-80-px tw-mb-8'
                />
                <h5 className='fw-normal text-white tw-mb-6 cursor-big'>
                  Multi-device support
                </h5>
                <p className='fw-normal tw-text-xl text-white'>
                  Delivery through multiple channels, including mobile, tablet
                  and desktop.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-four max-w-307 payone-card tw-px-8 py-80 bg-warning-500 rounded-4 margin-block-start-70px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-212 text-center justify-content-center align-items-center mx-auto'>
                <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big'>
                  First-class Support
                </h4>
                <p className='fw-normal tw-text-xl text-dark-600'>
                  Prompt and seamless service, provided by core competency
                  experts.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-five max-w-307 payone-card tw-ps-7 tw-pe-8 tw-pt-12 tw-pb-10 bg-base-two-600 rounded-4 margin-inline-start-107px margin-block-start-176px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-246 text-center justify-content-center align-items-center mx-auto'>
                <img
                  src='assets/images/icon/payone-img3.png'
                  alt='Image'
                  className='tw-text-80-px tw-mb-8'
                />
                <h5 className='fw-normal text-white tw-mb-6 cursor-big'>
                  Advanced Payer Verification
                </h5>
                <p className='fw-normal tw-text-xl text-white line-clamp-3'>
                  Built on top of core banks KYC (Know Your Customer)
                  procedures. Fraud risk is significantly reduced.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-six max-w-307 payone-card tw-px-8 py-80 bg-warning-500 rounded-4 margin-inline-start-100px margin-block-start--200px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-212 text-center justify-content-center align-items-center mx-auto'>
                <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big'>
                  Cost-effective payments
                </h4>
                <p className='fw-normal tw-text-xl text-dark-600'>
                  Say goodbye to high card fees, say hello to affordable,
                  seamless payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaynoneOne;
