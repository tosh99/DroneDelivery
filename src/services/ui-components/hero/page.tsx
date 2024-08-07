import styles from './page.module.scss';
import { SButton, SFlex, SPageSection } from 'react-simple-ui-lib';
import { MdAttachEmail } from 'react-icons/md';
import { FaPhoneVolume, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [time, set_time] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            set_time(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <SPageSection className={styles.hero}>
            <SFlex className={styles.heroBanner} width={'100%'} direction={'column'} align={'center'} justify={'center'}>
                <SFlex direction={'column'} align={'center'}>
                    <h1>
                        Get your food <br /> in 5 Minutes!
                    </h1>
                    <SFlex align={'center'} gap={20}>
                        <SFlex align={'center'} justify={'center'} className={styles.socialMedia}>
                            <MdAttachEmail fontSize={30} />
                        </SFlex>
                        <SFlex align={'center'} justify={'center'} className={styles.socialMedia}>
                            <FaPhoneVolume fontSize={30} />
                        </SFlex>
                        <SFlex align={'center'} justify={'center'} className={styles.socialMedia}>
                            <FaWhatsapp fontSize={30} />
                        </SFlex>
                        <SFlex width={1} height={50} style={{ background: 'gray' }}></SFlex>
                        <SFlex direction={'column'} gap={3}>
                            <SButton>Get the App Now</SButton>
                        </SFlex>
                    </SFlex>
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
