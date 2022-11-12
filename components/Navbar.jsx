import Link from 'next/link';
import React from 'react';
import { Menu } from '@headlessui/react';
import { AiFillLinkedin } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="fixed  z-40  top-0  w-[100%] md:w-[80%] ">
      <div className=" navbar bg-base-100   backdrop-sepia-0 bg-white/90 ">
        <div className="navbar-start">
          <Menu as={'div'} className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <Menu.Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </Menu.Button>
            </label>

            <Menu.Items
              as="ul"
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <ul className="menu menu-vertical outline-none p-0">
                {['work', 'resume', 'contact'].map((links) => (
                  <Menu.Item as="li" key={links} className="outline-none">
                    {({ active }) => (
                      <a
                        href={`#${links}`}
                        className={`${
                          active ? 'bg-gray-200 capitalize' : ' capitalize '
                        }`}
                      >
                        {links}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </ul>
            </Menu.Items>
          </Menu>
          <Link
            href={'/'}
            className="font-bold max-[500px]:text-xl text-slate-800 text-3xl"
          >
            Asraful Islam
          </Link>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal p-0">
            {['work', 'resume', 'contact'].map((links) => (
              <li key={links}>
                <a
                  href={`#${links}`}
                  className="capitalize text-slate-600 font-medium"
                >
                  {links}
                </a>
              </li>
            ))}
            <div className="flex ml-2  items-center justify-center">
              <div className="grid grid-flow-col gap-5">
                <a
                  target={'_blank'}
                  href="https://twitter.com/AsrafulCodes"
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-[#1d9bf0]"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  target={'_blank'}
                  href="https://www.linkedin.com/in/asraful-islam-389a40256"
                >
                  <AiFillLinkedin
                    size={25}
                    color="#0a66c2
                  "
                  />
                </a>
                <a
                  target={'_blank'}
                  href="https://www.facebook.com/asraful.Islam.shoag"
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className="fill-[#0c86ef]"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
