import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='py-120 bg-neutral-10'>
      <div className='container'>
        <div className='max-w-610-px w-100 mx-auto'>
          <img
            src='assets/images/thumbs/go-to-back-img1.png'
            alt='Image'
            className='tw-mb-15'
          />
          <div className='text-center '>
            <h2 className='cursor-big fw-normal text-dark-600 tw-mb-3'>
              Oops! Page Not Found{" "}
            </h2>
            <p className='fw-normal tw-text-lg text-dark-500 tw-mb-10'>
              Sorry, we couldn't find the page you where looking for. We suggest
              that you return to homepage.
            </p>
            <div className='position-relative z-1 max-w-202-px w-100 mx-auto'>
              <Link
                to='/contact-us'
                className='go-back-link tw-px-5 tw-py-3 bg-main-600 tw-rounded-md border-two-px-solid text-dark-700 fw-semibold tw-text-lg '
              >
                GO BACK TO HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
