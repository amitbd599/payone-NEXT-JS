"use client";
const DashboardTransactionsForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const date = formData.get("date");
    const data = { date };
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='date'
        type='date'
        className='tw-px-3 tw-py-3 bg-neutral-10 rounded-3 border-0 max-w-500-px w-100 fw-normal tw-text-lg text-dark-600'
      />
    </form>
  );
};

export default DashboardTransactionsForm;
