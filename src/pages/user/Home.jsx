import '../../assets/css/home.css';
import { HomeCarousel } from '../../components/ui/Carousel';

const Home = () => {
    return (
        <div className="home_container">
            <section className='hero_wrapper'>
                <HomeCarousel />
            </section>
            <section className='popular_wrapper'>
                <p>Popular</p>
            </section>
            <section className='top_picks_wrapper'>
                <p>Top Picks</p>
            </section>
            <section className='anime_series_wrapper'>
                <p>Anime Series</p>
            </section>
            <section className='blockbuster_wrapper'>
                <p>Blockbuster</p>
            </section>
            <section className='trending_wrapper'>
                <p>Trending</p>
            </section>
        </div>
    )
}

export default Home