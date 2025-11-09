import Image from "next/image";
import Link from "next/link";
import NewsletterSubscribeOne from "./client_form/NewsletterSubscribeOne";

const NewsletterOne: React.FC = () => {
  return (
    <div
      className='margin-block-end--162px z-2 overflow-hidden'
      data-aos='fade-up'
      data-aos-duration={1000}
    >
      <div className='container'>
        <div className='bg-base-two-600 px-80 py-80 rounded-2'>
          <div className='d-flex align-items-center justify-content-between tw-gap-4 flex-wrap'>
            <div className='max-w-500'>
              <h5 className='text-white tw-mb-5'>Newsletter</h5>
              <h1 className='text-white cursor-big fw-normal'>
                Subscribe To Our <br /> Newsletter
              </h1>
            </div>
            <div className='max-w-430 w-100'>
              {/* NewsletterSubscribeOne */}
              <NewsletterSubscribeOne />
              <div className='d-flex align-items-center tw-gap-6 flex-wrap'>
                <div className='d-flex align-items-center'>
                  <Image
                    width={60}
                    height={60}
                    src='/assets/images/thumbs/newsletter-img1.png'
                    alt='Image'
                    className='flex-shrink-0'
                  />
                  <Image
                    width={60}
                    height={60}
                    src='/assets/images/thumbs/newsletter-img2.png'
                    alt='Image'
                    className='margin-inline-start--20px flex-shrink-0'
                  />
                  <span className='bg-main-600 w-15 h-15 rounded-circle text-dark-600 d-flex align-items-center justify-content-center border-white margin-inline-start--20px flex-shrink-0'>
                    +15K
                  </span>
                </div>
                <div>
                  <h5 className='fw-normal text-white tw-mb-2'>
                    More than 15k active users!
                  </h5>
                  <Link
                    href='/contact'
                    className='tw-text-lg fw-medium text-white d-flex align-items-center tw-gap-105'
                  >
                    Join them now
                    <span>
                      <i className='ph-bold ph-caret-right' />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterOne;
