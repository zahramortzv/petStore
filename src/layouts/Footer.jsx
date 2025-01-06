import React from 'react'
import bgImage from "../../public/bg.svg";
import FooterList from '../components/FooterList';
//Icons
import { PhoneIcon } from '../components/Icons';

function Footer() {
    return (
        <div
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
            className="flex flex-col justify-between items-center w-full bg-no-repeat bg-cover bg-center h-[120px] sm:h-[525px] box-border border-t-[1.53px] border-b-[1.53px] border-dashed border-[#F7763D] "
        >
            <div className='flex justify-around items-center w-full h-full pr-5 pl-5 sm:pr-32 sm:pl-32 box-border'>
                <FooterList
                    title="دسترسی سریع"
                    items={[
                        "درباره ما",
                        "تماس باما",
                        "سوالات متداول",
                        "پیگیری سفارشات",
                    ]}
                />
                <FooterList
                    title="لینک های مهم"
                    items={[
                        "حساب کاربری من",
                        "سبد خرید",
                        "قوانین و مقررات",
                        "سیاست حفظ حریم شخصی",
                    ]}
                />
                <ul className='w-[290px] hidden sm:block'>
                    <li className='leading-[38.92px]'>
                        <span className='text-[#F7763D] text-[19px] font-bold'>فروشگاه پت شاپ</span>
                    </li>
                    <li >
                        <span className='leading-[25.96px] text-[15.13px] font-normal text-justify '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </span>
                    </li>
                    <li className='leading-[38.92px] flex items-center justify-between gap-2'>
                        <span className='font-bold text-[17.02px] flex items-center gap-2'><PhoneIcon />شماره تماس</span>
                        <span className='text-[#F7763D] text-[19px] font-bold'>۰۹۱۷۱۲۳۴۵۶۷</span>
                    </li>
                </ul>
            </div>
            <div className='flex justify-center align-middle border-t-[0.78px] border-dashed border-[#F7763D] w-[70%] p-1 sm:p-6'>
                <h3 className='text-[8px]'>
                    تمامی حقوق این وبسایت برای{" "}
                    <span className="text-[#F7763D]">شاپت</span> محفوظ می باشد.
                </h3>
            </div>
        </div >
    )
}

export default Footer