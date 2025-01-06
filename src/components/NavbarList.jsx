
function NavbarList({ p, span, icon }) {
    return (
        <div className='flex gap-3'>
            {icon}
            <div>
                <p className='text-[15px] font-semibold'>{p}</p>
                <span className='text-[13.28px] font-normal text-[#00000042]'>{span}</span>
            </div>
        </div>
    )
}

export default NavbarList