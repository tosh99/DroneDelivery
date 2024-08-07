import styles from './page.module.scss';
import { SFlex, SInput, SPageSection } from 'react-simple-ui-lib';
import Hero from 'components/hero/page.tsx';
import { Header } from 'components/header/header.tsx';
import Features from 'components/features/page.tsx';
import Reviews from 'components/reviews/page.tsx';
import Gallery from 'components/gallery/page.tsx';
import Services from 'components/services/page.tsx';
import Footer from 'components/footer/page.tsx';
import Blog from 'components/blog/page.tsx';

export default function Page() {
    return (
        <SFlex direction={'column'}>
            <Header />
            <Hero />
            <Features />
            <Reviews />
            <Gallery />
            <Services />
            <Blog />
            <Footer />
        </SFlex>
    );
}
