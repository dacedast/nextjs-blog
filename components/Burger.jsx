import React from 'react'

const Burger = ({ isOpen, toggle}) => {
    return (
        <div className='burger' onClick={toggle}>
            <span className={isOpen ? 'burger1 rotate-45 ' : 'rotate-0 burger1'}></span>
            <span className={isOpen ? ' burger2 translate-x-5 opacity-0' : 'translate-x-50 burger2 opacity-100'}></span>
            <span className={isOpen ? ' burger3 -rotate-45 ' : 'rotate-0 burger3'}></span>
        </div>
    )
}

export default Burger
