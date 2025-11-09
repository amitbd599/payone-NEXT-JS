"use client";

const BlogSearchOne: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const data = { search };
  };
  return (
    <form onSubmit={handleSubmit} className='position-relative'>
      <input
        name='search'
        type='text'
        placeholder='Search'
        className='bg-base-two-10 tw-py-305 tw-px-3 tw-rounded-xl w-100 text-dark-500 border-neutral-10 border focus-visible-border-main-600'
      />
      <button
        type='submit'
        className='tw-text-xl tw-w-8 tw-h-8 tw-rounded-md text-white bg-base-two-600 position-absolute tw-end-0 top-50 translate-middle-y tw-me-205'
      >
        <i className='ph ph-magnifying-glass' />
      </button>
    </form>
  );
};

export default BlogSearchOne;
