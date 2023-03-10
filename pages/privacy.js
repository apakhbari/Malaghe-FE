import { Fragment } from 'react'
import CardDescriptionComponent from '../components/layout/cardDescription'
import MobileDeveloping from '../components/layout/mobileDeveloping'
import Navbar from '../components/layout/navbar/navbar'

import Head from 'next/head'
import { CLIENT_NAME_FA } from '../envConfig'

function Privacy() {
  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - حریم خصوصی کاربر</title>
      </Head>
      <div className="sm:hidden">
        <MobileDeveloping />
      </div>
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto text-neutral-content">
        <Navbar />
        <CardDescriptionComponent>
          <h3 dir="rtl" className="text-2xl mb-2">
            حریم خصوصی کاربر
          </h3>
          <br />

          <p className="py-1" dir="rtl">
            فروشگاه ضمن احترامی که برای حریم شخصی کاربران قائل است، برای خرید،
            ثبت نظر یا استفاده از برخی امکانات وب سایت اطلاعاتی را از کاربران
            درخواست می‌کند تا بتواند خدماتی امن و مطمئن را به کاربران ارائه دهد.
            برای پردازش و ارسال سفارش، اطلاعاتی مانند آدرس، شماره تلفن و ایمیل
            مورد نیاز است. همچنین آدرس ایمیل و تلفن‌هایی که مشتری در پروفایل خود
            ثبت می‌کند، تنها آدرس ایمیل و تلفن‌های رسمی و مورد تایید مشتری است و
            تمام مکاتبات و پاسخ‌های فروشگاه از طریق آنها صورت می‌گیرد.
          </p>

          <p className="py-1" dir="rtl">
            بنابراین درج آدرس، ایمیل و شماره تماس‌های همراه و یا ثابت توسط
            مشتری، به منزله مورد تایید بودن صحت آنها است و در صورتی که این موارد
            به صورت صحیح یا کامل درج نشده باشد، فروشگاه جهت اطمینان از صحت و
            قطعیت ثبت سفارش می‌تواند از مشتری، اطلاعات تکمیلی و بیشتری درخواست
            کند.
          </p>
          <p className="py-1" dir="rtl">
            حفظ و نگهداری رمز ورود بر عهده کاربران است و برای جلوگیری از هرگونه
            سوء استفاده احتمالی، کاربران نباید آن را برای شخص دیگری فاش کنند.
            فروشگاه کِرب هویت شخصی کاربران را محرمانه می‌داند و اطلاعات شخصی
            آنان را به هیچ شخص یا سازمان دیگری منتقل نمی‌کند، مگر اینکه با حکم
            قانونی مجبور باشد در اختیار مراجع ذی‌صلاح قرار دهد.
          </p>
          <p className="py-1" dir="rtl">
            همچنین بدین وسیله به اطلاع کاربران رسانده می‌شود که فروشگاه همانند
            سایر وب‌سایت‌ها از جمع‌آوری IP و کوکی‌ها استفاده می‌کند، کوکی فایلی
            است که به درخواست یک سایت، توسط مرورگر ایجاد می‌شود و به سایت امکان
            ذخیره بازدید‌های شما و مناسب‌سازی آنها را فراهم می‌نماید. بسیاری از
            مرورگرها امکان غیرفعال کردن کوکی را فراهم کرده‌اند، به این منظور
            می‌توانید راهنمای مرورگرها را مطالعه کنید. اما پروتکل، سرور و
            لایه‌های امنیتی دیجی‌استایل و روش‌های مناسب مدیریت داده‌ها اطلاعات
            کاربران را محافظت و از دسترسی‌های غیر قانونی جلوگیری می‌کند.
          </p>
          <p className="py-1" dir="rtl">
            در صورتی که تمایلی به دریافت ایمیل‌ها و خبرنامه های فروشگاه ندارید،
            می توانید بر روی کلمه لغو عضویت در انتهای صفحه ایمیل کلیک کنید.
          </p>
          <p className="py-1" dir="rtl">
            در صورت وجود هرگونه سوال، لطفا با اطلاعات تماس زیر ارتباط برقرار
            کنید:
          </p>
          <br />
          <p className="py-1 text-2xl text-secondary text-center" dir="rtl">
            شماره تماس : ۰۹۹۳۸۵۱۳۷۲۴
          </p>
        </CardDescriptionComponent>
      </div>
    </Fragment>
  )
}

export default Privacy
