import Link from 'next/link'
import Image from 'next/image'

import PropTypes from 'prop-types'

import Atropos from 'atropos/react'

import { useState, useEffect, Fragment } from 'react'
import FooterNotMain from '../../components/layout/footernotmain'

import tighe from '../../assets/images/store/tighe.jpg'
import hamzan from '../../assets/images/store/hamzan.jpg'

import { useRouter } from 'next/router'

import { themeChange } from 'theme-change'

import NavBarTheme from '../../components/layout/navbar/navbarhelper/navbartheme'
import NavBarThemeHamburger from '../../components/layout/navbar/navbarhelper/navbarthemehamburger'
import StoreAtropos from '../../components/layout/store/storeatropos'

import IconHamburger from '../../assets/icons/svg/iconhamburger'
import IconMixer from '../../assets/icons/svg/iconmixer'
import IconMag from '../../assets/icons/svg/iconmag'
import IconCart from '../../assets/icons/svg/iconcart'
import IconTheme from '../../assets/icons/svg/icontheme'

import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'

import BuildClient from '../../api/build-client'
import CartDropDown from '../../components/layout/navbar/navbarhelper/cartdropdown'

import Snackbar from 'awesome-snackbar'

import axios from 'axios'

function Store(data) {
  console.log(data)

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [theme, setTheme] = useState(true)

  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const onFilterClick = (e) => {
    e.preventDefault()

    new Snackbar('... در حال توسعه', {
      position: 'bottom-right',
    })
  }

  return (
    <div className="h-screen">
      {/*{domLoaded && ( */}
      <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* Navbar Starts here */}
          <Fragment>
            <div className="fixed inset-x-0 top-0 object-center mt-2 mx-3 z-50">
              <div className="navbar bg-primary rounded-box px-4 shadow-lg drop-shadow-lg items-center">
                <div className="navbar-start">
                  <div className="sm:hidden">
                    <div className="dropdown">
                      <label
                        className="btn btn-circle swap swap-rotate bg-primary border-none"
                        tabindex="0"
                      >
                        <input
                          type="checkbox"
                          value={menuIsOpen}
                          onChange={(e) =>
                            setMenuIsOpen(e.currentTarget.checked)
                          }
                        />

                        <IconHamburger
                          stylingProps={'w-6 h-6 text-primary-content'}
                        />
                      </label>
                      <ul
                        tabindex="0"
                        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <Link
                            href="/dashboard"
                            className="btn btn-outline m-1 normal-case text-xl mx-4"
                          >
                            داشبورد
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/mag"
                            className="btn btn-ghost normal-case text-xl"
                          >
                            <IconMag stylingProps={'w-6 h-6'} />
                            مجله
                          </Link>
                        </li>
                        <li>
                          <div className="btn btn-ghost" tabIndex={-1}>
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
                      stylingProps1={
                        'w-6 h-6 place-self-center text-primary-content'
                      }
                      stylingProps2={
                        'w-4 h-4 mt-1 place-self-center opacity-80 text-primary-content'
                      }
                    />

                    <Link
                      href="/dashboard"
                      className="btn btn-outline normal-case text-xl mx-4 text-primary-content"
                    >
                      داشبورد
                    </Link>

                    <Link
                      href="/mag"
                      className="btn btn-ghost normal-case text-xl text-primary-content"
                    >
                      <IconMag stylingProps={'w-6 h-6 mr-2'} />
                      مجله
                    </Link>
                  </div>

                  <CartDropDown
                    stylingProps={
                      'text-primary-content rounded-full text-center'
                    }
                  />
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
                  <div>
                    <label
                      for="my-drawer-4"
                      class="drawer-button btn btn-circle btn-outline normal-case text-xl mx-4 text-primary-content"
                    >
                      <IconMixer stylingProps={'w-6 h-6'} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
          {/* Navbar Ends here */}

          {/*Contents Starts */}

          <div class="p-8 pt-28">
            {domLoaded && (
              <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8"
                dir="rtl"
              >
                {data &&
                  data.data.map((item) => (
                    <StoreAtropos
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      hasDiscount={item.hasDiscount}
                      discountKind={item.discountKind}
                      discountedPrice={item.discountedPrice}
                      goodKind={item.goodKind}
                      hasMag={item.hasMag}
                      imageCover={item.imageCover}
                      madeIn={item.madeIn}
                      price={item.price}
                      summary={item.summary}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
        {/*Contents End */}

        <div class="drawer-side">
          <label for="my-drawer-4" class="drawer-overlay"></label>
          <div class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <h3 dir="rtl" className=" text-xl">
              مرتب سازی
            </h3>
            <br />

            <div className="divider">بر اساس تخفیف</div>

            <div className="divider">بر اساس امتیاز</div>

            <div className="divider">بر اساس نوع</div>

            <div className="divider">بر اساس برند</div>

            <button
              type="submit"
              className="btn btn-primary hover:border-slate-400 mt-6"
              onClick={onFilterClick}
            >
              اعمال فیلتر
            </button>
          </div>
        </div>
      </div>
      <FooterNotMain />
      {/*)}*/}
    </div>
  )
}

export async function getServerSideProps(context) {
  //const accountId = context.params
  var id = context.query.accountId

  const { data } = await axios.get('http://api:3000/api/v1/store')

  return {
    props: RemoveUndefinedsToPleaseNext({ data }),
  }
}

export default Store
