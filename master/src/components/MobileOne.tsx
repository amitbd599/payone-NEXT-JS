const MobileOne = () => {
  return (
    <section className='py-140 bg-neutral-10 z-1 overflow-hidden'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-6'>
            <img
              src='assets/images/thumbs/mobile-app-three-img-1.png'
              alt='Image'
              data-aos='zoom-in'
              data-aos-duration={1500}
            />
          </div>
          <div className='col-lg-6'>
            <div className='mobile-three-card max-w-535-px margin-left-100px'>
              <div
                className='d-flex align-items-center tw-gap-1 tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <span className=''>
                  <img src='assets/images/icon/star-icon2.png' alt='Image' />
                </span>
                <h5 className='text-primary-600 fw-normal'>
                  Mobile App 2.0 NEW
                </h5>
              </div>
              <h2
                className='fw-normal h1 cursor-big tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                Download Our Mobile App Today For Best
              </h2>
              <p
                className='fw-normal text-dark-500 tw-text-lg tw-mb-8'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                Don't miss out! Download now for seamless functionalities and
                endless possibilities.
              </p>
              <div className='tw-mb-12'>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={1100}
                >
                  <span className='tw-text-xl text-dark-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='text-dark-600 fw-medium tw-text-lg'>
                    Instant Mobile Access
                  </span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <span className='tw-text-xl text-dark-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='text-dark-600 fw-medium tw-text-lg'>
                    Effortless Transactions
                  </span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={1300}
                >
                  <span className='tw-text-xl text-dark-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='text-dark-600 fw-medium tw-text-lg'>
                    Personalized Insights
                  </span>
                </div>
              </div>
              <div
                className='d-flex align-items-center tw-gap-3 flex-wrap'
                data-aos='fade-up'
                data-aos-duration={1400}
              >
                <img src='assets/images/logo/mobile-img1.png' alt='Image' />
                <img src='assets/images/logo/mobile-img2.png' alt='Image' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileOne;
