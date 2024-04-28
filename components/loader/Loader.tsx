'use client'

import { collapseWords, introAnimation, progressAnimation } from './animations';
import { useEffect, useRef } from 'react';

import { WORDS } from '@/consts';
import { gsap } from 'gsap'
import styles from './Loader.module.scss'

interface ILoader {
    timeline: gsap.core.Timeline | undefined
}

export default function Loader({ timeline }: ILoader) {

    const loaderRef = useRef<HTMLDivElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)
    const wordGroupsRef = useRef<HTMLDivElement>(null)

    const progressNumberRef = useRef<HTMLSpanElement>(null)


    useEffect(() => {
        timeline &&
            timeline
                .add(introAnimation(wordGroupsRef))
                .add(progressAnimation(progressRef, progressNumberRef), 0)
                .add(collapseWords(loaderRef), "-=1")

    }, [timeline])

    return <div className={styles.loader__wrapper}>
        <div className={styles.loader__progressWrapper}>
            <div className={styles.loader__progress} ref={progressRef}></div>
            <span className={styles.loader__progressNumber} ref={progressNumberRef}>
                0
            </span>
        </div>
        <div className={styles.loader} ref={loaderRef}>
            <div className={styles.loader__words}>
                <div className={styles.loader__overlay}></div>
                <div ref={wordGroupsRef} className={styles.loader__wordsGroup}>
                    {WORDS.map((word, index) => {
                        return (
                            <span key={index} className={styles.loader__word}>
                                {word}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
}
