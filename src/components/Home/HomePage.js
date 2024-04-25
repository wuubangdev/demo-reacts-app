import { useSelector } from 'react-redux';
import videoHomePage from '../../assets/video-homepage.mp4';
import { useNavigate } from 'react-router-dom';
const HomePage = (pops) => {
    const navigate = useNavigate();
    const isAuthentication = useSelector(state => state.user.isAuthentication);
    return (
        <div className="homepage-container row d-flex">
            <video autoPlay muted loop>
                <source src={videoHomePage} type="video/mp4" />
            </video>
            <div className='homepage-tile col-md-4'>
                <div className='homepage-title-name'>
                    Make forms worth filling out
                </div>
                <div className='homepage-title-desc'>

                    Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.
                </div>
                <div className='homepage-title-submit'>
                    {isAuthentication ?
                        <button onClick={() => navigate('/users')}>Doing quiz now</button>
                        :
                        <button onClick={() => navigate('/login')}>Get started—it's free</button>
                    }
                </div>
            </div>
        </div>
    );
}
export default HomePage;