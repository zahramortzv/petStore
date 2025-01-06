import { LogoIcon, SearchIcon, TickIcon, CarIcon, KastIcon, HeartIcon, UserIcon } from "./Icons"
import NavbarList from "./NavbarList"

function Navbar() {
  return (
    <div className="h-[100px] flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <LogoIcon />
        <h1 className="text-orange-500 text-[20px] sm:text-lg font-bold">شاپت</h1>
      </div>
      {/* Search Bar */}
      <div className="hidden sm:flex justify-between items-center w-[484px] h-[55px] bg-[#F2F2F2] rounded-[50px] pr-4 pl-2 cursor-pointer">
        <input
          type="text"
          placeholder="محصول مورد نظر رو جستجو کنید ..."
          className="rounded-[50px] flex-grow  placeholder:text-right placeholder:text-[15px] placeholder:text-[#909090] bg-transparent focus:outline-none" />
        <div className="flex justify-center items-center bg-[#5124C4] rounded-[50%] w-[38px] h-[38px]"><SearchIcon /></div>
      </div>
      {/* Icons Section */}
      <div className=" gap-5 hidden sm:flex items-center">
        <NavbarList p="ضمانت اصالت کالا" span="٪۱۰۰ تضمین اصالت" icon={<TickIcon />} />
        <NavbarList p="ارسال رایگان" span="تمامی خرید ها" icon={<CarIcon />} />
      </div>
      <ul className=" inline-flex gap-5 cursor-pointer ">
        <li><KastIcon /></li>
        <li><HeartIcon /></li>
        <li><UserIcon /></li>
      </ul>
    </div>
  )
}

export default Navbar