import { SFlex, SPageSection } from 'react-simple-ui-lib';
import styles from './page.module.scss';
import { FaAward } from 'react-icons/fa6';

const qualities = [
    {
        icon: <FaAward />,
        title: 'Customer Satisfaction',
        description: 'We strive to provide excellent customer service and always prioritize your experience.',
    },
    {
        icon: <FaAward />,
        title: 'Reliable Delivery',
        description: 'We always deliver your products on time and within the agreed-upon price range.',
    },
    {
        icon: <FaAward />,
        title: '24/7 Support',
        description: 'We are here to help you whenever you need it. Our support team is always ready to assist.',
    },
];

export default function Features() {
    return (
        <SPageSection>
            <SFlex align={'center'} direction={'column'}>
                <p>Quality Assurance</p>
                <h2>We're about Quality and Trust.</h2>

                <SFlex align={'center'}>
                    {qualities.map((quality, index) => (
                        <SFlex direction={'column'} align={'center'} key={index} className={styles.quality}>
                            {quality.icon}
                            <h4>{quality.title}</h4>
                            <p>{quality.description}</p>
                        </SFlex>
                    ))}
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
