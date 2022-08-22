import React, { useState } from 'react';
import Logo from '~/assets/images/tiktok-logo.svg';
import { ChatIcon, DotsIcon, PlusIcon, SendIcon } from '~/components/Icons';
import Search from '~/layouts/components/Search';
import './Header.scss';
const Header = () => {
  const [user, setUser] = useState('Hy');

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner d-flex justify-content-between align-items-center">
          <div role={'button'} className="logo">
            <img src={Logo} alt="tiktok-logo" />
          </div>
          <Search />
          <div className="button-option d-flex align-items-center">
            <button className="button-option__upload rounded-1">
              <PlusIcon />
              Upload
            </button>
            {!user ? (
              <div className="auth">
                <button className="button-option__login ms-3 rounded-1">Login</button>
                <button className="button-option__dropdown ms-3">
                  <DotsIcon />
                </button>
              </div>
            ) : (
              <div className="authed d-flex align-items-center">
                <button className="btn-chat ms-3 border-0 bg-transparent">
                  <SendIcon />
                </button>
                <button className="btn-notification ms-3 border-0 bg-transparent">
                  <ChatIcon />
                </button>
                <div role={'button'} className="user-avatar ms-3">
                  <img
                    className="rounded-circle"
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a5fc582465e765eeae3e6a7ba2d9d51a~c5_720x720.jpeg?x-expires=1661335200&x-signature=bdoBaenzltdNyDyPWrtY718fRnA%3D"
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
