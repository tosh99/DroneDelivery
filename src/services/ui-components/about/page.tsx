import { SFlex, SImage, SPageSection } from 'react-simple-ui-lib';
import styles from './page.module.scss';

export default function About() {
    return (
        <SPageSection className={styles.aboutP} disableAnimation>
            <SFlex direction={'column'} justify={'center'} align={'center'} className={styles.about}>
                <h2>
                    The Fastest Drone Delivery <br /> App in the Town!
                </h2>
                <header>We are currently Serving at these Areas</header>
                <SFlex width={'100%'} className={styles.locations}>
                    <SFlex direction={'column'} align={'center'} className={styles.location}>
                        <SImage src={'/location/loc-1.png'} width={'100%'} height={300} borderRadius={20} />
                        <h6>Dallas</h6>
                        <p>2000+ Orders</p>
                    </SFlex>
                    <SFlex direction={'column'} align={'center'} className={styles.location}>
                        <SImage src={'/location/loc-2.png'} width={'100%'} height={300} borderRadius={20} />
                        <h6>New York</h6>
                        <p>1800+ Orders</p>
                    </SFlex>
                    <SFlex direction={'column'} align={'center'} className={styles.location}>
                        <SImage src={'/location/loc-3.png'} width={'100%'} height={300} borderRadius={20} />
                        <h6>Los Angeles</h6>
                        <p>3300+ Orders</p>
                    </SFlex>
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
