import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../css/resources/logo.svg';
import { gsap } from 'gsap';

function Navbar() {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();
    const [reversed, setReversed] = useState(false);
    const path = useLocation();

    useEffect(() => {
        tl.current = gsap.timeline({ defaults: {} })
            .to(q('.header__logo'), {autoAlpha: 0.4 })
            .to(q('.header__nav'), { x: 0, overflowY: 'scroll' })
            .to(q('.header__nav__container__link'), { autoAlpha: 1, stagger: 0.3, marginLeft: 0 })
            .to(q('.link-social'), { autoAlpha: 1, stagger: 0.1, marginRight: 0 })

    }, []);

    useEffect(() => {
        tl.current.reversed(!reversed);
    }, [reversed])

    useEffect(() => {
        setReversed(false)
    }, [path])


    const navLinks = [
        {
            name: 'Legacy',
            to: '/legacy',
            id: 0
        },
        {
            name: 'Expertise',
            to: '/expertise',
            id: 1
        },
        {
            name: 'Stones',
            to: '/stones',
            id: 2
        },
        {
            name: 'Projects',
            to: '/projects',
            id: 3
        },
        {
            name: 'Get In Touch',
            to: '/contact',
            id: 4
        },
    ];

    const socialLinks = [
        {
            name: 'LINKEDIN',
            to: '/',
            id: 0,
        },

        {
            name: 'FACEBOOK',
            to: '/',
            id: 0,
        },
        {
            name: 'TWITTER',
            to: '/',
            id: 0,
        },
        {
            name: 'INSTAGRAM',
            to: '/',
            id: 0,
        },
    ];

    return (
        <header className='header' ref={el}>
            <Link to="/" className='header__logo'><img alt="logo" src={logo} /></Link>
            <nav className='header__nav' >
                <div className='header__nav__container'>
                    {navLinks.map(link => { return <Link to={link.to} className='header__nav__container__link'>{link.name}</Link> })}
                </div>
                <div className='header__nav__container__socialLinks'>
                    {socialLinks.map(link => { return <a href={link.to} className='link-social'>{link.name}</a> })}
                </div>
            </nav>
            <span className='header__toggle-nav' onClick={() => setReversed(!reversed)}>{reversed ? 'Close' : 'Menu'}</span>
        </header>
    )
}

export default Navbar