import { SFlex } from 'react-simple-ui-lib';
import Hero from 'components/hero/page.tsx';
import { Header } from 'components/header/header.tsx';
import Quality from 'components/quality/page.tsx';
import Reviews from 'components/reviews/page.tsx';
import Gallery from 'components/gallery/page.tsx';
import Footer from 'components/footer/page.tsx';
import Blog from 'components/blog/page.tsx';
import About from 'components/about/page.tsx';

export default function Page() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Quality />
            <Gallery />
            <Reviews />
            <Blog />
            <Footer />
        </>
    );
}
