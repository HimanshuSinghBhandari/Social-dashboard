import './App.css';
import React, { useEffect , useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { login, logout } from './components/AuthenticationService';

// MockData.
import mockData from './components/mockData';
// Components.
import MetricsDisplay from './components/MetricsDisplay';
import Charts from './components/Charts';
import UserInformation from './components/UserInformation';
import Header from './components/Header';
import Followers from './components/Followers';
import Overview from './components/Overview';

function App() {
 
  const [darkMode, setDarkMode] = useState(false);
  const [metrics, setMetrics] = useState({});
  const [chartData, setChartData] = useState({});
  const [user, setUser] = useState({});
  const [followers, setFollowers] = useState([]);
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      // Simulating API request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMetrics(mockData.metrics);
      setChartData(mockData.chartData);
      setUser(mockData.user);
      setFollowers(mockData.followers);
      setOverview(mockData.overview);
    } catch (error) {
      console.error(error);
    }
  };

  const [currentUser, setCurrentUser] = useState(null);
  const [registrationToggle, setRegistrationToggle] = useState(false);

  function handleLogin() {
    setCurrentUser(true);
  }

  function handleLogout() {
    logout().then(() => setCurrentUser(null));
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Authentication</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {currentUser ? (
                <Button variant="light" onClick={handleLogout}>Log out</Button>
              ) : (
                <Button variant="light" onClick={() => setRegistrationToggle(!registrationToggle)}>
                  {registrationToggle ? 'Log in' : 'Register'}
                </Button>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {currentUser ? (
        <div className={darkMode ? "bg-gray-900 text-white" : "bg-slate-200 text-gray-900"}>
        <div className="container mx-auto px-5">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-5">
            <MetricsDisplay {...metrics} darkMode={darkMode} />
            <Charts data={chartData} darkMode={darkMode} />
            <UserInformation {...user} darkMode={darkMode} />
          </div>
          <section className="py-10">
            <Followers followers={followers} darkMode={darkMode} />
            <Overview overview={overview} darkMode={darkMode} />
          </section>
        </div>
      </div>
      ) : (
        registrationToggle ? (
          <RegistrationForm onRegister={handleLogin} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )
      )}
    </div>
  );
}

export default App;
