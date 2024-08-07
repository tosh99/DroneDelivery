import { SFlex, SImage, SPageSection } from 'react-simple-ui-lib';
import styles from './page.module.scss';
import { FaAward } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';

const blogs = [
    {
        image: '/blog-1.jpg',
        title: 'How Drones Are Easing Our Delivery',
        date: 'December 12, 2022',
        desc: 'Delivery of drones has revolutionized the way we deliver goods with our innovative drones',
    },
    {
        image: '/blog-2.jpg',
        title: 'Fastest Drone Delivery App in the Town!',
        date: 'March 07, 2023',
        desc: 'Fastest drone delivery App in the Town! With our innovative drone delivery with speed and efficiency',
    },
    {
        image: '/blog-3.jpg',
        title: 'Innovations in Drone Delivery Methods',
        date: 'April 19, 2024',
        desc: 'Drones are revolutionizing the way we deliver goods. With our innovative drone delivery',
    },
    {
        image: '/blog-4.jpg',
        title: 'New Technologies in Drone Delivery',
        date: 'August 06, 2024',
        desc: 'Microchips are gaining popularity in drone delivery. Read more about our latest innovations.',
    },
];

export default function Blog() {
    return (
        <SPageSection height={'auto'}>
            <SFlex align={'center'} direction={'column'} justify={'center'} height={'100%'} className={styles.blogP}>
                <SFlex direction={'column'} className={styles.header}>
                    <header> Our Latest News</header>
                    <SFlex className={styles.headerC}>
                        <h3 className={styles.title}>The latest news from drones life</h3>
                        <p className={styles.titleDesc}>
                            Our drones are revolutionizing the way we deliver goods. From microchips to innovative drone delivery, we're always pushing the boundaries. Read more about our latest
                            innovations and discover what's happening in the world of drones
                        </p>
                    </SFlex>
                </SFlex>

                <SFlex align={'center'} gap={20} className={styles.blogs}>
                    {blogs.map((blog, index) => (
                        <SFlex direction={'column'} key={index} className={styles.blog}>
                            <SImage src={blog.image} width={'100%'} height={200} />
                            <SFlex className={styles.blogContent} direction={'column'} gap={20}>
                                <span>{blog.date}</span>
                                <h6>{blog.title}</h6>
                                <p>{blog.desc}</p>
                                <span>Read More</span>
                            </SFlex>
                        </SFlex>
                    ))}
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
