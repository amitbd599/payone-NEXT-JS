import Image from "next/image";
import Link from "next/link";
import BannerTwoForm from "./client_form/BannerTwoForm";

const BannerTwo: React.FC = () => {
  return (
    <section className='bg-base-two-600 py-120 position-relative z-1 overflow-hidden'>
      <Image
        width={224}
        height={221}
        src='/assets/images/shape/arrow-shape1.png'
        alt='Image'
        className='banner-two-shape-three position-absolute z-n1 inset-inline-start-42-persent inset-block-start-162px rotate--22deg d-lg-block d-none animate-wobble__two'
      />
      <Image
        width={78}
        height={78}
        src='/assets/images/shape/banner-two-shape3.png'
        alt='Image'
        className='position-absolute z-n1 inset-block-start-100px inset-inline-start-157px d-lg-block d-none animation-Updowm__two'
      />
      <Image
        width={83}
        height={71}
        src='/assets/images/shape/banner-two-shape4.png'
        alt='Image'
        className='position-absolute z-n1 inset-inline-end-64px inset-block-start-164px  d-lg-block d-none animation-roatation-two__two'
      />
      <Image
        width={109}
        height={62}
        src='/assets/images/shape/banner-two-shape5.png'
        alt='Image'
        className='position-absolute z-n1 inset-block-end-99px inset-inline-start-87px  d-lg-block d-none animation-Updowm__two'
      />
      <Image
        width={55}
        height={53}
        src='/assets/images/shape/circle-shape-img1.png'
        alt='Image'
        className='position-absolute z-n1 inset-block-end-103px inset-inline-end-103px  d-lg-block d-none animation-rotation__two'
      />
      <div className='container'>
        <div className='row gy-4 align-items-center'>
          <div className='col-lg-7'>
            <div className='position-relative z-1'>
              <div>
                <div
                  className='d-flex align-items-center tw-gap-1 tw-mb-3'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <Image
                    width={30}
                    height={30}
                    src='/assets/images/icon/star-icon1.png'
                    alt='Image'
                  />
                  <h5 className='fw-normal text-white'>
                    Trusted by over 3M customers
                  </h5>
                </div>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='banner-two-title tw-text-70-px text-white fw-normal tw-mb-3 cursor-big'>
                    Send Money
                    <span className='text-main-600'>Anytime,</span>
                    Anywhere
                  </h2>
                  <Image
                    width={305}
                    height={12}
                    src='/assets/images/shape/banner-two-shape1.png'
                    alt='Image'
                    className='banner-two-shape-one position-absolute z-n1 inset-block-start-82px inset-inline-end-26px d-lg-block d-none'
                  />
                </div>
                <p
                  className='fw-normal tw-text-xl text-neutral-10 max-w-570 tw-mb-10'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  Effortlessly send, receive, and request money online with
                  paynone. Get a tailored solution for your business needs.
                </p>
                <div
                  className='d-flex align-items-center tw-gap-805 flex-wrap'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <div className='position-relative z-1'>
                    <Link
                      href='/log-in'
                      className='banner-two-link bg-main-600 fw-semibold tw-text-lg text-dark-600 tw-px-10 tw-py-3 rounded-3 border-two-px-solid hover-text-dark-600'
                    >
                      OPEN A FREE ACCOUNT
                    </Link>
                  </div>
                  <Link
                    href='/our-services'
                    className='fw-semibold tw-text-lg text-white hover-text-main-600'
                  >
                    HOW IT WORKS
                  </Link>
                </div>
              </div>
              <Image
                width={56}
                height={56}
                src='/assets/images/shape/banner-two-shape2.png'
                alt='Image'
                className='banner-two-shape-two position-absolute inset-inline-end-68px inset-block-end-40px z-n1 d-lg-block d-none animation-pulse__two'
              />
            </div>
          </div>
          <div className='col-lg-5'>
            <div
              className='position-relative'
              data-aos='zoom-in'
              data-aos-duration={1500}
            >
              {/* BannerTwoForm */}
              <BannerTwoForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
