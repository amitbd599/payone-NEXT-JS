const BlogDetailsReviewForm: React.FC = () => {
  return (
    <div className='tw-mb-8'>
      <div className='row gy-4'>
        <div className='col-lg-6'>
          <div data-aos='fade-up' data-aos-duration={800}>
            <label
              htmlFor='name'
              className='fw-normal tw-text-lg text-dark-600 tw-mb-3'
            >
              Your Name*
            </label>
            <input
              name='name'
              type='text'
              id='name'
              placeholder='Enter your name'
              className='fw-normal tw-text-4 text-dark-500 tw-px-4 tw-py-4 bg-white rounded-pill w-100 border-neutral-50 border focus-visible-border-main-600'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div data-aos='fade-up' data-aos-duration={1000}>
            <label
              htmlFor='email'
              className='fw-normal tw-text-lg text-dark-600 tw-mb-3'
            >
              Email Address*
            </label>
            <input
              name='email'
              type='text'
              id='email'
              placeholder='Enter email address'
              className='fw-normal tw-text-4 text-dark-500 tw-px-4 tw-py-4 bg-white rounded-pill w-100 border-neutral-50 border focus-visible-border-main-600'
            />
          </div>
        </div>
        <div className='col-12'>
          <label
            htmlFor='message'
            className='fw-normal tw-text-lg text-dark-600 tw-mb-3'
          >
            Write your comment *
          </label>
          <textarea
            name='message'
            placeholder='Write your comment'
            id='message'
            className='tw-px-6 tw-py-4 w-100 border-neutral-50 border tw-rounded-xl tw-h-200-px focus-visible-border-main-600'
            defaultValue={""}
          />
        </div>
        <div className='col-12'>
          <button
            type='submit'
            className='tw-px-5 tw-py-4 rounded-pill bg-base-two-600 text-white w-100 fw-semibold tw-text-lg '
            data-aos='fade-up'
            data-aos-duration={800}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsReviewForm;
