import { useState } from "react";
import { ArrowDown } from "./Icons";
import { PhoneIcon } from "./Icons";

function Navbar() {
    const [active, setActive] = useState("خانه");

    return (
        <div className="flex flex-col sm:flex-row mb-6 items-start justify-between sm:items-center">
            <ul className="inline-flex font-semibold text-[12px] sm:text-[18px] gap-5 h-[30px] sm:h-[50px]">
                {["خانه", "فروشگاه", "وبلاگ", "تماس با ما", "درباره ما"].map((item) => (
                    <li
                        key={item}
                        onClick={() => setActive(item)}
                        className={`flex gap-1 items-center cursor-pointer ${active === item ? "text-[#F7763D]" : "text-gray-700"
                            } hover:text-[#F7763D]`}
                    >
                        <span>{item}</span>
                        {active === item ? <ArrowDown color="#F7763D" /> : <ArrowDown color="black" />}
                    </li>
                ))}
            </ul>
            <div className="flex ">
                <PhoneIcon />
                <span className="font-semibold">شماره تماس:</span>
                <span className="text-[#F7763D] font-semibold">۰۹۱۷۲۳۴۵۶۷</span>
            </div>
        </div>
    );
}

export default Navbar;
