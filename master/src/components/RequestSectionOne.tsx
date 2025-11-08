import CountryDropdown from "../helper/CountryDropdown";
import RequestPaymentForm from "./client_form/RequestPaymentForm";
import RequestPaymentFormTwo from "./client_form/RequestPaymentFormTwo";

const RequestSectionOne: React.FC = () => {
  return (
    <>
      <div className='h-455px bg-base-two-600' />
      <div
        className='z-2 margin-top--330px overflow-hidden'
        data-aos='zoom-in'
        data-aos-duration={1000}
      >
        <div className='container'>
          <div className='max-w-1076 bg-white justify-content-center align-items-center mx-auto'>
            <ul
              className='nav nav-pills bg-main-600 text-center d-flex align-items-center justify-content-center tw-mb-8'
              id='pills-tab'
              role='tablist'
            >
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link__one active rounded-0 tw-px-3 tw-py-3'
                  id='pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-home'
                  type='button'
                  role='tab'
                  aria-controls='pills-home'
                  aria-selected='true'
                >
                  Send
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link__one rounded-0 tw-px-3 tw-py-3 '
                  id='pills-profile-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-profile'
                  type='button'
                  role='tab'
                  aria-controls='pills-profile'
                  aria-selected='false'
                >
                  Request
                </button>
              </li>
            </ul>
            <div className='tab-content' id='pills-tabContent'>
              <div
                className='tab-pane fade show active'
                id='pills-home'
                role='tabpanel'
                aria-labelledby='pills-home-tab'
                tabIndex={0}
              >
                <div className='tw-px-8 tw-pb-8 z-2'>
                  <div className='tw-mb-6 text-center'>
                    <h4 className='fw-normal tw-mb-2 cursor-big'>Send Money</h4>
                    <p className='fw-normal tw-text-lg text-dark-500'>
                      Send your payment on anytime, anywhere in the world.
                    </p>
                  </div>
                  {/* RequestPaymentForm */}
                  <RequestPaymentForm />
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='pills-profile'
                role='tabpanel'
                aria-labelledby='pills-profile-tab'
                tabIndex={0}
              >
                <div className='tw-px-8 tw-pb-8 z-2'>
                  <div className='tw-mb-6 text-center'>
                    <h4 className='fw-normal tw-mb-2 cursor-big'>
                      Request Money
                    </h4>
                    <p className='fw-normal tw-text-lg text-dark-500'>
                      Request your payment on anytime, anywhere in the world.
                    </p>
                  </div>
                  {/* RequestPaymentFormTwo */}
                  <RequestPaymentFormTwo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestSectionOne;
