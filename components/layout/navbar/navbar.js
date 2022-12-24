import PropTypes from 'prop-types'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { useState, useEffect } from 'react'

import { themeChange } from 'theme-change'
import NavBarTheme from './navbarhelper/navbartheme'
import NavBarThemeHamburger from './navbarhelper/navbarthemehamburger'

import IconStore from '../../../assets/icons/svg/iconstore'
import IconMag from '../../../assets/icons/svg/iconmag'
import IconHamburger from '../../../assets/icons/svg/iconhamburger'
import IconTheme from '../../../assets/icons/svg/icontheme'
import CartDropDown from './navbarhelper/cartdropdown'

const Navbar = () => {
  const router = useRouter()
  const [theme, setTheme] = useState(true)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [paletteIsClicked, setpaletteIsClicked] = useState()

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 object-center mt-2 mx-7 z-50">
      <div className="navbar bg-primary rounded-box px-4 shadow-lg drop-shadow-lg items-center">
        <div className="navbar-start">
          <div className="sm:hidden">
            <div className="dropdown">
              <label
                className="btn btn-circle swap swap-rotate bg-primary border-none"
                tabIndex="0"
              >
                <input
                  type="checkbox"
                  value={menuIsOpen}
                  onChange={(e) => setMenuIsOpen(e.currentTarget.checked)}
                />

                <IconHamburger stylingProps={'w-6 h-6 text-primary-content'} />
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {!router.pathname.includes('/auth/sign') && (
                  <li>
                    <Link
                      href="/auth/signin"
                      className="btn btn-outline btn-secondary m-1 normal-case text-xl mx-4"
                    >
                      داشبورد
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    href="/store"
                    className="btn btn-ghost normal-case text-xl"
                  >
                    <IconStore stylingProps={'w-6 h-6'} />
                    فروشگاه
                  </Link>
                </li>
                <li>
                  {router.pathname !== '/mag' && (
                    <Link
                      href="/mag"
                      className="btn btn-ghost normal-case text-xl"
                    >
                      <IconMag stylingProps={'w-6 h-6'} />
                      مجله
                    </Link>
                  )}
                </li>
                <li>
                  <div className="btn btn-ghost mb-2" tabIndex={-1}>
                    <IconTheme
                      stylingProps1={
                        'w-6 h-6 place-self-center text-base-content'
                      }
                      stylingProps2={
                        'w-4 h-4 mt-1 place-self-center opacity-80 text-base-content'
                      }
                    />
                  </div>
                  <ul
                    tabIndex={-1}
                    className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
                  >
                    <NavBarThemeHamburger />
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden sm:flex">
            <NavBarTheme
              stylingProps1={'w-6 h-6 place-self-center text-primary-content'}
              stylingProps2={
                'w-4 h-4 mt-1 place-self-center opacity-80 text-primary-content'
              }
            />

            {!router.pathname.includes('/auth/sign') && (
              <Link
                href="/auth/signin"
                className="btn btn-outline normal-case text-xl mx-4 text-primary-content"
              >
                داشبورد
              </Link>
            )}
            <Link
              href="/store"
              className="btn btn-ghost normal-case text-xl text-primary-content"
            >
              <IconStore stylingProps={'w-6 h-6 mr-2'} />
              فروشگاه
            </Link>
            {router.pathname !== '/mag' && (
              <Link
                href="/mag"
                className="btn btn-ghost normal-case text-xl text-primary-content"
              >
                <IconMag stylingProps={'w-6 h-6 mr-2'} />
                مجله
              </Link>
            )}
          </div>

          {!router.pathname.includes('/sefaresh') && (
            <CartDropDown
              stylingProps={'text-primary-content rounded-full text-center'}
            />
          )}
        </div>

        <div className="navbar-end">
          <div>
            <Link
              href="/"
              className="normal-case text-3xl hover:underline text-primary-content"
            >
              ملاقه
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
