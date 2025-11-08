import CountryDropdown from "@/helper/CountryDropdown";

const DashboardPersonalDetails: React.FC = () => {
  const handleSubmitPersonalDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const country = formData.get("country");
    const description = formData.get("description");
    const date = formData.get("date");

    // Production-safe: mark as intentionally unused
    void name;
    void email;
    void country;
    void description;
    void date;
  };
  return (
    <form onSubmit={handleSubmitPersonalDetails} className=''>
      <div className='tw-mb-4'>
        <label
          htmlFor='Name'
          className='fw-normal tw-text-4 text-dark-600 tw-mb-3'
        >
          Name*
        </label>
        <input
          name='name'
          type='text'
          id='Name'
          placeholder='Enter Name'
          className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-ps-1 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 border-neutral-10 border'
        />
      </div>
      <div className='tw-mb-4'>
        <label
          htmlFor='Email'
          className='fw-normal tw-text-4 text-dark-600 tw-mb-3'
        >
          Email*
        </label>
        <input
          name='email'
          type='text'
          id='Email'
          placeholder='Your Emial'
          className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-ps-1 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 border-neutral-10 border'
        />
      </div>
      <div className='tw-mb-4'>
        <label
          htmlFor='Country'
          className='fw-normal tw-text-4 text-dark-600 tw-mb-3'
        >
          Country*
        </label>
        <select
          name='country'
          id='Country'
          className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-ps-1 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 border-neutral-10 border'
        >
          <option value={1}>Bangladesh</option>
          <option value={6}>Bhutan</option>
          <option value={7}>Maldives</option>
          <option value={8}>Afghanistan</option>
          <option value={9}>China</option>
        </select>
      </div>
      <div className='tw-mb-4'>
        <label
          htmlFor='amount'
          className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
        >
          You Send*
        </label>
        <div className='position-relative'>
          <input
            name='amount'
            type='text'
            placeholder='2.00.000'
            id='amount'
            className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-05 border focus-visible-border-main-600'
          />
          {/* CountryDropdown */}
          <CountryDropdown />
        </div>
      </div>
      <div className='tw-mb-4'>
        <label
          htmlFor='Description'
          className='fw-normal tw-text-4 text-dark-600 tw-mb-3'
        >
          Description*
        </label>
        <textarea
          name='description'
          id='Description'
          placeholder='Payment Description'
          className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-pe-1 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 tw-h-100-px border-neutral-10 border'
          defaultValue={""}
        />
      </div>
      <div>
        <input
          name='date'
          type='date'
          className='bg-white tw-px-4 tw-py-3 bg-white w-100 rounded-3 border-neutral-10 border focus-visible-border-main-600'
        />
      </div>
      <div className='position-relative w-100 z-1 h-100 tw-mt-6'>
        <button
          type='submit'
          className='send-details-button text-center fw-semibold tw-text-lg text-white bg-base-two-600 rounded-3 border-two-px-solid w-100 tw-py-3'
        >
          CONTINUE
        </button>
      </div>
    </form>
  );
};

export default DashboardPersonalDetails;
