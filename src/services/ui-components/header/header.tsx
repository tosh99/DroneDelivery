import { SButton, SFlex } from 'react-simple-ui-lib';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <SFlex width={'100%'} justify={'center'} className={styles.header}>
            <SFlex width={'100%'} justify={'space-between'} align={'center'} className={styles.headerInner}>
                <div className={styles.logo}>Drone Disks</div>
                <SFlex align={'center'} gap={20} className={styles.nav}>
                    <p>Home</p>
                    <p>Delivery</p>
                    <p>Trust</p>
                    <p>Gallery</p>
                    <p>Blog</p>
                </SFlex>
                <SFlex className={styles.action} align={'center'}>
                    <SButton>Download Now</SButton>
                </SFlex>
            </SFlex>
        </SFlex>
    );
};
