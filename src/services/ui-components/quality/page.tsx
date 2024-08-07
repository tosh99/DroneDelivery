import { SFlex, SPageSection } from 'react-simple-ui-lib';
import styles from './page.module.scss';
import { FaAward } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';

const qualities = [
    {
        icon: <FaAward />,
        title: 'Customer Satisfaction',
        description: 'We strive to provide excellent customer service and always prioritize your experience.',
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
        <SPageSection height={'auto'} className={styles.qaBanner}>
            <SFlex align={'center'} direction={'column'} justify={'center'} height={'100%'} className={styles.qa}>
                <header>Quality Assurance</header>
                <h3 className={styles.titleDesc}>We're about Quality and Trust.</h3>

                <SFlex align={'center'} gap={20} className={styles.qualities}>
                    {qualities.map((quality, index) => (
                        <SFlex direction={'column'} align={'center'} key={index} className={styles.quality}>
                            {quality.icon}
                            <h5>{quality.title}</h5>
                            <p className={styles.desc}>{quality.description}</p>
                            <a className={styles.readMore}>Read More</a>
                        </SFlex>
                    ))}
                </SFlex>

                <h5 className={styles.del}>Empowering People using Our Innovations</h5>
            </SFlex>
        </SPageSection>
    );
}
