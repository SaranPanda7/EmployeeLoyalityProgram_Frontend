import { PageLayout } from "./components/PageLayout";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Addreward from "./pages/Addreward";
import Login from "./components/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/line-awesome.min.css";
import "./assets/css/style.css";
import Profile from "./pages/Profile";
import InstantReward from "./pages/InstantReward";
import NotificationList from "./components/NotificationList";
import ViewProfiles from "./pages/ViewProfiles";
// import { SignOutButton } from "./components/SignOutButton";
// import { useIsAuthenticated } from "@azure/msal-react";


// import { ToastProvider } from 'react-toast-notifications';

// import 'react-toastify/dist/reactToastify.css'
// import { ClearBrowserCache } from "react-clear-browser-cache";

function App() {
  return (
    <>
      <PageLayout>
      {/* <ToastProvider> */}

        <AuthenticatedTemplate>
          {/* <ClearBrowserCache>{(contextValue) => null}</ClearBrowserCache> */}
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/reward" element={<Addreward />} />
              <Route path="/instantreward" element={<InstantReward />} />
              <Route path="/syncuser" element={<Employees />} />
              <Route path="/viewprofile" element={<ViewProfiles />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <NotificationList />
          </BrowserRouter>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <Login />
        </UnauthenticatedTemplate>

        {/* </ToastProvider> */}

      </PageLayout>
    </>
  );
}
export default App;
