"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HeaderStartOne = () => {
  const pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  let [mobileMenu, setMobileMenu] = useState(false);
  let MENU = [
    {
      label: "HOME",
      children: [
        { label: "Home One", href: "/" },
        { label: "Home Two", href: "/index-2" },
        { label: "Home Three", href: "/index-3" },
        { label: "Home Four", href: "/index-4" },
      ],
    },
    {
      label: "BLOG",
      children: [
        { label: "Blog Details", href: "/blog-details" },
        { label: "Blog Grid", href: "/blog-grid" },
        { label: "Blog List", href: "/blog-list" },
        { label: "Blog Standerd", href: "/blog-standerd" },
      ],
    },
    {
      label: "Dashboard",
      children: [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Transaction", href: "/transactions" },
        { label: "Send Money", href: "/send-money" },
        { label: "Request Money", href: "/request-money" },
        { label: "Deposit Money", href: "/deposit-money" },
        { label: "Withdraw Money", href: "/withdraw-money" },
        { label: "Notifications", href: "/notifications" },
        { label: "Account", href: "/my-profile" },
      ],
    },
    {
      label: "ABOUT",
      children: [{ label: "About Us", href: "/about-us-other" }],
    },
    {
      label: "PAGES",
      children: [
        { label: "Fees", href: "/fees-others" },
        { label: "Our Services", href: "/our-services-other" },
        { label: "Services Details", href: "/services-details-other" },
        { label: "Our Team", href: "/our-team-other" },
        { label: "Pricing Plan", href: "/pricing-plan-other" },
        { label: "FAQ", href: "/faq-other" },
      ],
    },
    { label: "CONTACT", href: "/contact-us-other" },
  ];

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  /* which top‑level submenu is open?  -1 = none */
  const [openIndex, setOpenIndex] = useState(-1);

  const isItemActive = (item) =>
    item.href
      ? item.href === pathname
      : item.children?.some((c) => c.href === pathname);

  return (
    <>
      <div class='overlay'></div>
      <div className={`side-overlay ${mobileMenu && "active"}`}></div>
      <header className='header bg-base-two-600 transition-all'>
        <div className='container container-two'>
          <nav className='d-flex align-items-center justify-content-between'>
            {/* Logo Start */}
            <div className='logo'>
              <Link href='/' className='link'>
                <img
                  src='assets/images/logo/logo.png'
                  alt='img'
                  className='tw-h-10'
                />
              </Link>
            </div>
            {/* Logo End  */}
            {/* Menu Start  */}
            <div className='header-menu d-lg-block d-none'>
              {/* Nav menu Start */}
              <ul className='nav-menu d-lg-flex align-items-center tw-gap-6'>
                {MENU.map((item) => {
                  const active = isItemActive(item);

                  return (
                    <li
                      key={item.label}
                      className={`nav-menu__item ${
                        item.children ? "has-submenu position-relative" : ""
                      } ${active ? "activePage" : ""}`}
                    >
                      {item.children ? (
                        <Link
                          href='#'
                          className='nav-menu__link tw-pe-5 text-white tw-py-9 fw-semibold w-100'
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <Link
                          href={item.href}
                          className='nav-menu__link text-white tw-py-9 fw-semibold w-100'
                        >
                          {item.label}
                        </Link>
                      )}

                      {item.children && (
                        <ul className='nav-submenu scroll-sm position-absolute start-0 top-100 tw-w-max bg-white tw-rounded-md tw-p-2 tw-mt-4 tw-duration-200 tw-z-99'>
                          {item.children.map((sub) => (
                            <li
                              key={sub.href}
                              className={`nav-submenu__item d-block tw-rounded tw-duration-200 position-relative ${
                                sub.href === pathname ? "activePage" : ""
                              }`}
                            >
                              <Link
                                href={sub.href}
                                className='nav-submenu__link hover-bg-neutral-100 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded hover-bg-main-100'
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
              {/* Nav menu End  */}
            </div>
            {/* Menu End  */}
            {/* Header Right start */}
            <div className='d-flex align-items-center tw-gap-3'>
              <div className='d-sm-block d-none'>
                <div className='d-flex align-items-center tw-gap-605 flex-wrap'>
                  <a
                    href='log-in'
                    className='text-white fw-semibold tw-text-lg hover-text-main-600 tw-duration-500'
                  >
                    LOGIN
                  </a>
                  <div className='position-relative z-1'>
                    <a
                      href='sign-up'
                      className='header-item-link text-dark-600 fw-semibold tw-text-lg tw-px-4 tw-py-2 bg-main-600 border-two-px-solid rounded-2 hover-text-dark-600'
                    >
                      SIGN IN
                    </a>
                  </div>
                </div>
              </div>
              <button
                onClick={handleMobileMenu}
                type='button'
                className='toggle-mobileMenu leading-none d-lg-none ms-3 text-white tw-text-9'
              >
                <i className='ph ph-list' />
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>

      <div
        className={`mobile-menu d-lg-none d-block scroll-sm position-fixed bg-base-two-600 tw-w-300-px tw-h-screen overflow-y-auto tw-p-6 tw-z-999 tw--translate-x-full tw-pb-68 ${
          mobileMenu && "active"
        }`}
      >
        <button
          onClick={handleMobileMenu}
          type='button'
          className='close-button position-absolute tw-end-0 top-0 tw-me-2 tw-mt-2 tw-w-605 tw-h-605 rounded-circle d-flex justify-content-center align-items-center text-white bg-neutral-200 hover-bg-neutral-900 hover-text-white'
        >
          <i className='ph ph-x' />
        </button>
        <div className='mobile-menu__inner'>
          <Link href='/' className='mobile-menu__logo'>
            <img src='assets/images/logo/logo.png' alt='Logo' />
          </Link>
          <div className='mobile-menu__menu'>
            {/* Nav menu Start */}

            <ul className='nav-menu d-lg-flex align-items-center nav-menu--mobile d-block tw-mt-8'>
              {MENU.map((item, idx) => {
                const active = isItemActive(item);
                const open = idx === openIndex || active;

                return (
                  <li
                    key={item.label}
                    className={`nav-menu__item ${
                      item.children ? "has-submenu position-relative" : ""
                    } ${active ? "activePage active" : ""}`}
                  >
                    {item.children ? (
                      <button
                        type='button'
                        onClick={() => setOpenIndex(open ? -1 : idx)}
                        className='nav-menu__link text-white tw-pe-5 text-heading tw-py-9 fw-semibold w-100 text-start bg-transparent border-0'
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className='nav-menu__link text-heading tw-py-9 fw-semibold w-100 text-white'
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* ----- Submenu ----- */}
                    {item.children && (
                      <ul
                        className={`nav-submenu scroll-sm position-absolute tw-start-0 top-100 tw-w-max bg-white tw-rounded-md overflow-y-auto tw-p-2 tw-mt-4 tw-duration-200 tw-z-99 ${
                          open ? "d-block" : "d-none"
                        }`}
                      >
                        {item.children.map((sub) => (
                          <li
                            key={sub.href}
                            className={`nav-submenu__item d-block tw-rounded tw-duration-200 position-relative ${
                              sub.href === pathname ? "activePage" : ""
                            }`}
                          >
                            <Link
                              href={sub.href}
                              className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            {/* Nav menu End  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderStartOne;
