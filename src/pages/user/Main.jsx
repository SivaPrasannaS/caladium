import '../../assets/css/main.css';
import PropTypes from 'prop-types';
import Navbar from '../../components/ui/Navbar';

const Main = ({ children }) => {
    return (
        <div className="main_container">
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </div>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired
}

export default Main;