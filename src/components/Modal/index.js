/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as Fb } from '../../assets/fb.svg';
import { ReactComponent as Google } from '../../assets/google.svg';
import { ReactComponent as Banner } from '../../assets/signin.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import './style.scss';
import { Context } from '../../store';

const Modal = ({ open, setOpen }) => {
  const { dispatch } = useContext(Context);
  useEffect(() => {
    if (document.getElementById('myModal')) {
      let modal = document.getElementById('myModal');
      window.onclick = function (event) {
        if (event.target === modal) {
          setOpen(false);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  const [login, setLogin] = useState(false);
  return (
    <>
      {open && (
        <div className='modal' id='myModal'>
          <div className='modal-container'>
            <div
              className='cross'
              onClick={() => {
                setOpen(false);
              }}>
              <Cross />
            </div>
            <div className='login-wrapper'>
              <div className='modal-header'>
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </div>
              <div className='login-form-wrapper'>
                <div className='form-left'>
                  {!login ? (
                    <>
                      <h1>Create Account</h1>
                      <form>
                        <div className='name-input'>
                          <input placeholder='First Name' />
                          <input placeholder='Last Name' />
                        </div>
                        <div>
                          <input placeholder='Email' type='email' />
                        </div>
                        <div>
                          <input placeholder='Password' type='password' />
                        </div>
                        <div>
                          <input
                            placeholder='Confirm Password'
                            type='password'
                          />
                        </div>
                        <div className='form-btn-wrapper'>
                          <button>Create Account</button>
                          <a
                            href='javascript:void(0)'
                            onClick={() => {
                              setLogin(!login);
                            }}>
                            or,&nbsp;
                            {!login ? 'Sign In' : 'Create Account'}
                          </a>
                        </div>
                      </form>
                      <div className='social-btns'>
                        <Google />
                        Sign up with Google
                      </div>
                      <div className='social-btns'>
                        <Fb />
                        Sign up with Facebook
                      </div>
                      <span className='mob-policy'>
                        By signing up, you agree to our Terms & conditions,
                        Privacy policy
                      </span>
                    </>
                  ) : (
                    <>
                      <h1>Sign In</h1>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          dispatch({
                            type: 'SET_USER',
                          });
                          setOpen(false);
                        }}>
                        <div>
                          <input placeholder='Email' />
                        </div>
                        <div>
                          <input placeholder='Password' type='password' />
                        </div>

                        <div className='form-btn-wrapper'>
                          <button>Sign In</button>
                          <a
                            href='javascript:void(0)'
                            onClick={() => {
                              setLogin(!login);
                            }}>
                            or,&nbsp;
                            {!login ? 'Sign In' : 'Create Account'}
                          </a>
                        </div>
                      </form>
                      <div className='social-btns'>
                        <Google />
                        Sign up with Google
                      </div>
                      <div className='social-btns'>
                        <Fb />
                        Sign up with Facebook
                      </div>
                    </>
                  )}
                </div>
                <div className='form-right'>
                  <h3>
                    Already have an account?
                    <a
                      href='javascript:void(0)'
                      onClick={() => {
                        setLogin(!login);
                      }}>
                      {!login ? 'Sign In' : 'Create new for free'}
                    </a>
                  </h3>

                  <Banner />
                  {!login && (
                    <h5>
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </h5>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
