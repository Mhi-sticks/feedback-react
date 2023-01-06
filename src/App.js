
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // NavLink,
} from "react-router-dom";
// import Card from "./components/shared/Card";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
// import Post from "./components/Post";

function App() {
 

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm  />
                  <FeedbackStats />
                  <FeedbackList  />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/post/*" element={<Post />} />
          <Route path="/post/:id/:name" element={<Post />} /> */}
          </Routes>
          {/* <Card>
          <NavLink to='/' active>
            Home
          </NavLink>
          <NavLink to='/about' active>
           About
          </NavLink>
        </Card> */}
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
