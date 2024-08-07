import { SFlex, SImage, SPageSection } from 'react-simple-ui-lib';
import styles from './page.module.scss';
export default function About() {
    return (
        <SPageSection height={'auto'}>
            <SFlex direction={'column'} align={'center'} className={styles.about}>
                <h2>The fastest drone delivery App in the Town!</h2>
                <header>We are currently Serving at these Areas</header>
                <SFlex width={'100%'} className={styles.locations}>
                    <SFlex direction={'column'} align={'center'} className={styles.location}>
                        <SImage src={'/loc-1.png'} width={'100%'} height={300} borderRadius={20} />
                        <h6>Dallas</h6>
                    </SFlex>
                    <SFlex direction={'column'} align={'center'} className={styles.location}>
                        <SImage src={'/loc-2.png'} width={'100%'} height={300} borderRadius={20} />
                        <h6>New York</h6>
                    </SFlex>
                    <SFlex direction={'column'} align={'center'} className={styles.location}>
                        <SImage src={'/loc-3.png'} width={'100%'} height={300} borderRadius={20} />
                        <h6>Los Angeles</h6>
                    </SFlex>
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
