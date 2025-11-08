import Image from "next/image";
import Link from "next/link";
import type React from "react";
import LoginForm from "./client_form/LoginForm";

const LoginInInner: React.FC = () => {
  return (
    <section className='position-relative'>
      <div className='d-flex'>
        <div className='flex-grow-1'>
          <div className='max-w-526-px w-100 log-in-card tw-px-6 tw-py-12 mx-auto'>
            <Link href='/' className='tw-mb-188-px'>
              <Image
                width={171}
                height={40}
                src='/assets/images/logo/logo2.png'
                alt='Image'
                className=''
              />
            </Link>
            <h4 className='fw-medium text-primary-50 tw-mb-8'>
              Welcome back to PayOne
            </h4>
            {/* LoginForm */}
            <LoginForm />
          </div>
        </div>
        <div className='w-50 d-lg-block d-none '>
          <Image
            width={948}
            height={1080}
            src='/assets/images/thumbs/long-in-img-1.png'
            alt='Image'
            className='w-100 h-100 object-fit-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default LoginInInner;
