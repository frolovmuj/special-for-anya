'use client'

import { useEffect, useRef } from "react";

import Image from "next/image";
import { animateTitle } from "./animations";
import { gsap } from 'gsap'
import styles from './TextAfterLoader.module.scss'

interface ITextAfterLoader { }

export default function TextAfterLoader({ }: ITextAfterLoader) {
    const timeline = useRef(gsap.timeline());
    const heroRef = useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {
            const tl = timeline.current;

            tl.add(animateTitle())
        }, heroRef);

        return () => context.revert();
    }, []);

    return (
        <section className={styles.hero} ref={heroRef}>


            <h1 className={styles.hero__title}>
                <span data-hidden data-title-first>
                    Дана
                </span>
                <span data-hero-line className={styles.hero__line}></span>
                <span data-hidden data-title-last>
                    самая милая котя  ♡
                </span>
            </h1>

            <div className={styles.hero__image}>
                <div data-image-overlay className={styles.hero__imageOverlay}></div>
            </div>
        </section>
    );
}
