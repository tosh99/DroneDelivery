import { SFlex, SPageSection } from 'react-simple-ui-lib';
import styles from './page.module.scss';
import { FaAward } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';

const videos = [
    {
        url: '/1.mp4',
    },
    {
        url: '/2.mp4',
    },
    {
        url: '/3.mp4',
    },
];

export default function Gallery() {
    return (
        <SPageSection className={styles.galleryM} height={'auto'}>
            <SFlex align={'center'} direction={'column'} height={'100%'} className={styles.gallery}>
                <header>See for Yourself</header>
                <h3 className={styles.titleDesc}>Optimized E2E Delivery Mechanism</h3>

                <SFlex align={'center'} gap={20} className={styles.qualities}>
                    {videos.map((quality, index) => (
                        <SFlex direction={'column'} align={'center'} key={index} className={styles.quality}>
                            <video controls={true} autoPlay={true} muted>
                                <source src={quality.url} type="video/mp4" />
                            </video>
                        </SFlex>
                    ))}
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
