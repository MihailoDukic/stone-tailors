import { useState, useEffect, useRef } from 'react';
import heroShowcase from '../css/resources/hero-showcase.jpg';
import heroShowcaseDark from '../css/resources/hero-showcase-dark.jpg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Home() {
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef();
    const q = gsap.utils.selector(el);
    const hero = useRef();
    useEffect(() => {
     


        hero.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-wrapper',
                markers: true,
                start: '-20% top',
                end: '+=450vh',
                scrub: true
            }
        })

            .to('.hero__title-big', { y: -50 })
            .to('.hero__showcase-container__showcase-bg', { filter: 'grayscale(0)' })

    })

    return (
        <main className='home-wrapper' ref={el}>
            <section className='hero'>
                <h2 className='hero__title-small'>ESTABLISHED <span>in 1936</span></h2>
                <h1 className='hero__title-big'>WE ARE <span>STONE TAILORS</span></h1>
                <div className='hero__showcase-container'>
                    <div className='hero__showcase-container__showcase-bg' style={{ backgroundImage: `url(${heroShowcase})` }}></div>
                </div>
            </section>
            <section className='about'>
                
            </section>
        </main>
    )
}

export default Home