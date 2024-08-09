import styles from './page.module.scss';
import { SFlex, SImage, SPageSection } from 'react-simple-ui-lib';
import { MdAttachEmail } from 'react-icons/md';
import { FaPhoneVolume, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';

const TEXTS = ['In 5 Minutes!', 'At your Doorstep!', 'At the Click of a Button!', 'Served Hot Fast!'];

export default function Hero() {
    const [time, set_time] = useState(new Date().toLocaleTimeString());
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setInterval(() => {
            set_time(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <SPageSection className={styles.hero}>
            <div className={styles.heroVideo}>
                <Parallax speed={0}>
                    <video autoPlay muted loop>
                        <source src="/banner.mp4" type="video/mp4" />
                    </video>
                </Parallax>
            </div>
            <SFlex className={styles.heroBanner} width={'100%'} direction={'column'} align={'center'} justify={'center'}>
                <SFlex direction={'column'} align={'center'}>
                    <SFlex direction={'column'} align={'center'}>
                        <h1>Get your food</h1>
                        <TypeAnimation
                            wrapper={'h2'}
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'In 5 Minutes!',
                                1000,
                                'At your Doorstep!',
                                1000,
                                'At the Click of a Button!',
                                1000,
                                'Served Hot Fast!',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '60px' }}
                            repeat={Infinity}
                        />

                        {/*<TextTransition className={styles.an} springConfig={presets.wobbly}>*/}
                        {/*    {TEXTS[index % TEXTS.length]}*/}
                        {/*</TextTransition>*/}

                        {/*<motion.h1*/}
                        {/*    initial={{ width: 0 }}*/}
                        {/*    animate={{ width: 'auto' }}*/}
                        {/*    transition={{*/}
                        {/*        duration: 1,*/}
                        {/*        delay: 0,*/}
                        {/*    }}*/}
                        {/*    className={styles.an}>*/}
                        {/*    in 5 Minutes!*/}
                        {/*</motion.h1>*/}
                    </SFlex>
                    <SFlex align={'center'} gap={20} className={styles.heroIcons}>
                        <SFlex>
                            <SFlex align={'center'} justify={'center'} className={styles.socialMedia}>
                                <MdAttachEmail fontSize={30} />
                            </SFlex>
                            <SFlex align={'center'} justify={'center'} className={styles.socialMedia}>
                                <FaPhoneVolume fontSize={30} />
                            </SFlex>
                            <SFlex align={'center'} justify={'center'} className={styles.socialMedia}>
                                <FaWhatsapp fontSize={30} />
                            </SFlex>
                            <SFlex width={1} height={50} style={{ background: 'white' }}></SFlex>
                        </SFlex>
                        <SFlex width={'100%'} className={styles.storeIcons}>
                            <SImage src={'/play-store.svg'} height={100} backgroundSize={'contain'} className={styles.storeImg} />
                            <SImage src={'/app-store.svg'} height={100} backgroundSize={'contain'} className={styles.storeImg} />
                        </SFlex>
                    </SFlex>
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
