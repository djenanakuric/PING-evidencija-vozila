import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const sidebarNavItems = [
    {
        display: 'Vozila',
        icon: <i class='bx bxs-car'></i>,
        to: '/vozilo',
        section: 'vozilo'
    },
    {
        display: 'Putni nalog',
        icon: <i class='bx bxs-calendar-edit' ></i>,
        to: '/putni-nalog',
        section: 'putni-nalog'
    },
    {
        display: 'Izvjestaj',
        icon: <i class='bx bxs-report'></i>,
        to: '/izvjestaj',
        section: 'izvjestaj'
    }
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.menuItem');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="logo"> 
        <a href="/">
            <img src='./images/ping-logo.png'/>
        </a>
        </div>
        <div ref={sidebarRef} className="menu">
            <div
                ref={indicatorRef}
                className="menuIndicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`menuItem ${activeIndex === index ? 'active' : ''}`}>
                            <div className="menuItemIcon">
                                {item.icon}
                            </div>
                            <div className="menuItemIcon">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;
