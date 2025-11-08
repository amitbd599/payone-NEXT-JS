const DashboardSearch: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string; // cast to string

    const data = { search };
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='position-relative max-w-664px w-100 d-lg-block d-none '
    >
      <input
        name='search'
        type='text'
        placeholder='Search'
        className='tw-pe-10 tw-ps-6 tw-py-4 bg-neutral-10 w-100 focus-visible-border-main-600 border-0 tw-text-4 text-dark-500 fw-normal rounded-pill'
      />
      <button className='tw-text-6 text-dark-600 position-absolute tw-end-1 tw-block-start-50 top-50 translate-middle'>
        <i className='ph ph-magnifying-glass' />
      </button>
    </form>
  );
};

export default DashboardSearch;
