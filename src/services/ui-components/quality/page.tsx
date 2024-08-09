import { SFlex, SImage, SPageSection } from 'react-simple-ui-lib';
import styles from './page.module.scss';
import { FaAward } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';

const qualities = [
    {
        icon: <FaAward />,
        title: 'Customer Satisfaction',
        description: 'We strive to provide excellent customer service and always prioritize your experience. Your trust is our top priority.',
    },
    {
        icon: <FaShieldAlt />,
        title: 'Reliable Delivery',
        description: 'We always deliver your products on time and within the agreed-upon price range and distance.',
    },
    {
        icon: <FaAward />,
        title: '24/7 Support',
        description: 'We are here to help you whenever you need it. Our support team is always ready to assist.',
    },
];

export default function Quality() {
    return (
        <SPageSection height={'auto'} className={styles.qaBanner} disableAnimation>
            <div className={styles.heroVideo}>
                <Parallax speed={0}>
                    <video autoPlay muted loop>
                        <source src="/7.mp4" type="video/mp4" />
                    </video>
                </Parallax>
            </div>

            <SFlex className={styles.qa} gap={50}>
                <SFlex direction={'column'} height={'100%'} className={styles.qaVideo}>
                    <video controls={true} autoPlay={true} muted>
                        <source src={'/6.mp4'} type="video/mp4" />
                    </video>
                    <video controls={true} autoPlay={true} muted>
                        <source src={'/7.mp4'} type="video/mp4" />
                    </video>

                    {/*<SImage src={'https://placeholder.co/512'} width={'100%'} height={600} borderRadius={20} />*/}
                </SFlex>
                <SFlex direction={'column'} className={styles.qaContent}>
                    <header>Quality Assurance</header>
                    <h3 className={styles.titleDesc}>We're about Quality and Trust.</h3>

                    <SFlex direction={'column'} gap={20} className={styles.qualities}>
                        {qualities.map((quality, index) => (
                            <SFlex direction={'column'} key={index} className={styles.quality}>
                                <SFlex>
                                    {quality.icon}
                                    <h5>{quality.title}</h5>
                                </SFlex>
                                <p className={styles.desc}>{quality.description}</p>
                                <a className={styles.readMore}>Read More</a>
                            </SFlex>
                        ))}
                    </SFlex>

                    <h5 className={styles.del}>Empowering People using Our Innovations</h5>

                    <SFlex width={'100%'} className={styles.storeIcons}>
                        <SImage src={'/play-store.svg'} height={100} backgroundSize={'contain'} className={styles.storeImg} />
                        <SImage src={'/app-store.svg'} height={100} backgroundSize={'contain'} className={styles.storeImg} />
                    </SFlex>
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
