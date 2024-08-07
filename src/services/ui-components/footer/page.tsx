import styles from './page.module.scss';
import { SButton, SFlex, SPageSection } from 'react-simple-ui-lib';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [time, set_time] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            set_time(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <SPageSection height="auto">
            <SFlex wrap className={styles.footer}>
                <SFlex direction={'column'} className={styles.footerC}>
                    <h5>Mumbai, India</h5>
                    <a href={'tel:8806213966'}>8806213966, 8902458724</a>
                    <a href={'mailto:anutosh.chaudhuri@gmail.com'}>anutosh.chaudhuri@gmail.com</a>
                </SFlex>
                <SFlex direction={'column'} className={styles.footerC}>
                    <h5>Specialities</h5>
                    <a>Quick Commerce</a>
                    <a>Food Delivery</a>
                    <a>In Flight Meal</a>
                    <a>Services</a>
                    <a>Cost Effectiveness</a>
                </SFlex>
                <SFlex direction={'column'} className={styles.footerC}>
                    <h5>Need Quick Food?</h5>
                    <h3>Download our App Now!</h3>
                    <SFlex>
                        <SButton>Play Store</SButton>
                        <SButton outline>App Store</SButton>
                    </SFlex>
                    <p className={styles.localTime}>Local Time: {time}</p>
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
