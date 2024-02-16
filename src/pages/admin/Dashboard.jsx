import '../../assets/css/dashboard.css';
import PropTypes from 'prop-types';
import Sidenav from '../../components/ui/Sidenav';

const Dashboard = ({ children }) => {
    return (
        <div className="dashboard_container">
            <aside>
                <Sidenav />
            </aside>
            <main>
                {children}
            </main>
        </div>
    )
}

Dashboard.propTypes = {
    children: PropTypes.node.isRequired
}

export default Dashboard;