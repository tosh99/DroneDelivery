import { SFlex, SImage, SPageSection } from 'react-simple-ui-lib';
import styles from './page.module.scss';

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
        <SPageSection className={styles.galleryM} height={'auto'} disableAnimation>
            <SFlex align={'center'} direction={'column'} height={'100%'} className={styles.gallery}>
                <h3 className={styles.titleDesc}>Optimized E2E Delivery Mechanism</h3>

                {/*<div className={styles.heroVideo}>*/}
                {/*    <video autoPlay muted loop>*/}
                {/*        <source src="/7.mp4" type="video/mp4" />*/}
                {/*    </video>*/}
                {/*</div>*/}

                <SFlex align={'center'} gap={20} className={styles.qualities}>
                    {videos.map((quality, index) => (
                        <SFlex direction={'column'} align={'center'} key={index} className={styles.quality}>
                            <video controls={true} autoPlay={true} muted>
                                <source src={quality.url} type="video/mp4" />
                            </video>
                        </SFlex>
                    ))}
                </SFlex>

                <SFlex width={'100%'} className={styles.storeIcons}>
                    <SImage src={'/play-store.svg'} height={100} backgroundSize={'contain'} className={styles.storeImg} />
                    <SImage src={'/app-store.svg'} height={100} backgroundSize={'contain'} className={styles.storeImg} />
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
