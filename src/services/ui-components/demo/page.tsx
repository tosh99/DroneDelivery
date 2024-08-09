import styles from './page.module.scss';
import { SButton, SCheckbox, SFlex, SImage, SInput, SMarquee, SPageSection, STextarea } from 'react-simple-ui-lib';

export default function Demo() {
    return (
        <SPageSection className={styles.demoBg} disableAnimation>
            <SFlex className={styles.demo}>
                <SFlex direction={'column'} className={styles.demoContent}>
                    <h3 className={styles.titleDesc}>Request a Demo</h3>
                    <SFlex direction={'column'} className={styles.demoFeatures}>
                        <p>Learn more about our Product</p>
                        <p>Get you questions answered</p>
                        <p>We'll help you get started</p>
                    </SFlex>
                    <SMarquee>
                        <SImage src={'/companies/mapbox.png'} className={styles.clientItem} />
                        <SImage src={'/companies/slack.png'} className={styles.clientItem} />
                        <SImage src={'/companies/spotify.png'} className={styles.clientItem} />
                        <SImage src={'/companies/stenciljs.png'} className={styles.clientItem} />
                        <SImage src={'/companies/strapi.png'} className={styles.clientItem} />
                        <SImage src={'/companies/woocommerce.png'} className={styles.clientItem} />
                    </SMarquee>
                </SFlex>
                <SFlex direction={'column'} className={styles.demoForm} gap={20}>
                    <SFlex width={'100%'}>
                        <SInput label={'Work Email'} placeholder={'Your Business Email'} required />
                        <SInput label={'Role'} placeholder={'Your Office Role'} />
                    </SFlex>
                    <SFlex width={'100%'}>
                        <SInput label={'Phone No'} placeholder={'Phone No w/Country Code'} required />
                    </SFlex>
                    <SFlex width={'100%'}>
                        <STextarea style={{ width: '100%' }} label={'Anything Else?'} placeholder={'Let us know your views'} />
                    </SFlex>
                    <SCheckbox>
                        Yes, I would like to receive more communication <br /> regarding Drone Updates. I can unsubscribe at any time.
                    </SCheckbox>
                    <SButton>Submit</SButton>
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
