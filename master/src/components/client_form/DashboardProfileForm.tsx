"use client";
const DashboardProfileForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const state = formData.get("state");
    const postcode = formData.get("postcode");
    const country = formData.get("country");

    const data = {
      firstName,
      lastName,
      phoneNumber,
      email,
      state,
      postcode,
      country,
    };
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='row gy-4'>
        <div className='col-lg-6'>
          <div>
            <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
              First Name*
            </span>
            <input
              name='firstName'
              type='text'
              placeholder='First Name'
              className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div>
            <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
              Last Name*
            </span>
            <input
              name='lastName'
              type='text'
              placeholder='Last Name'
              className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div>
            <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
              Phone Number*
            </span>
            <input
              name='phoneNumber'
              type='text'
              placeholder='Number'
              className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div>
            <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
              Email Address*
            </span>
            <input
              name='email'
              type='text'
              placeholder='Email'
              className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div>
            <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
              City*
            </span>
            <input
              name='city'
              type='text'
              placeholder='Bridgeport'
              className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div>
            <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
              State/Country*
            </span>
            <input
              name='state'
              type='text'
              placeholder='WA'
              className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div>
            <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
              Postcode*
            </span>
            <input
              name='postcode'
              type='text'
              placeholder={"310005"}
              className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
            />
          </div>
        </div>
        <div className='col-lg-6'>
          <div>
            <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
              Country*
            </span>
            <input
              name='country'
              type='text'
              placeholder='United States'
              className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
            />
          </div>
        </div>
      </div>
      <button
        type='submit'
        className='bg-base-two-600 text-white fw-semibold tw-text-lg tw-px-6 tw-py-3 tw-rounded-xl tw-mt-6'
      >
        Update Profile
      </button>
    </form>
  );
};

export default DashboardProfileForm;
