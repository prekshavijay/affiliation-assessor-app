import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import APPLICANT_ROUTE_MAP from "./routes/ApplicantRoute";

import Authenticate from "./login/Authenticate";
import ApplicantLogin from "./login/ApplicantLogin";
import LoginOTP from "./login/LoginOTP";
import Register from "./login/Register";

import Dashboard from "./pages/Dashboard";
import MyApplications from "./pages/MyApplications";
import AllApplications from "./pages/AllApplications";
import Congratulations from "./pages/Congratulation";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./pages/Profile";
import CreateForm from "./pages/CreateForm";
import Toast from "./components/Toast";
import fireBaseApp, { getPermissionForToken } from "./config/firebase";
import { useEffect, useState } from "react";
import { getMessaging, onMessage } from "firebase/messaging";
import { getCookie } from "./utils";
import { getLocalTimeInISOFormat } from "./api";
import { applicantService } from "./services";
import Notification from "./pages/notifications/Notification";
import NotificationsDetailedView from "./pages/notifications/NotificationsDetailedView";

function App() {
  const [toast, setToast] = useState({
    toastOpen: false,
    toastMsg: "",
    toastType: "",
  });

  const messaging = getMessaging(fireBaseApp);
  const onMessageListener = (async () => {
    const messagingResolve = await messaging;
    if (messagingResolve) {
      onMessage(messagingResolve, (payload) => {
        console.log(payload);
        setToast((prevState) => ({
          ...prevState,
          toastOpen: true,
          toastMsg: payload.data.title,
        }));
        const postData = {
          notifications: [
            {
              title: payload.data.title,
              body: payload.data.body,
              date: getLocalTimeInISOFormat(),
              user_id: getCookie("regulator")[0]["user_id"],
              user_type: "Applicant",
              read_status: "Unread",
            },
          ],
        };
        applicantService.insertNotifications(postData);
      });
    }
  })();

  useEffect(() => {
    getPermissionForToken();
  }, []);

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast({
          toastOpen: false,
          toastMsg: "",
          toastType: "",
        });
      }, 3000);
    }
  }, [toast]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={APPLICANT_ROUTE_MAP.auth} element={<Authenticate />}>
            <Route
              path={APPLICANT_ROUTE_MAP.loginModule.login}
              element={<ApplicantLogin />}
            ></Route>
            <Route
              path={APPLICANT_ROUTE_MAP.loginModule.loginOTP}
              element={<LoginOTP />}
            ></Route>
          </Route>

          <Route path={APPLICANT_ROUTE_MAP.dashboard} element={<Dashboard />}>
            <Route
              path={APPLICANT_ROUTE_MAP.dashboardModule.register}
              element={<Register />}
            ></Route>
            <Route
              index
              path={APPLICANT_ROUTE_MAP.dashboardModule.my_applications}
              element={
                <PrivateRoute>
                  <MyApplications />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path={APPLICANT_ROUTE_MAP.dashboardModule.all_applications}
              element={
                <PrivateRoute>
                  <AllApplications />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path={`${APPLICANT_ROUTE_MAP.dashboardModule.createForm}/:formName/:formId?/:applicantStatus?`}
              element={
                <PrivateRoute>
                  <CreateForm />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path={APPLICANT_ROUTE_MAP.dashboardModule.congratulations}
              element={<Congratulations />}
            ></Route>
            <Route
              path={APPLICANT_ROUTE_MAP.dashboardModule.profile}
              element={<Profile />}
            ></Route>
            <Route
            path={`${APPLICANT_ROUTE_MAP.dashboardModule.notifications}/:notificationId?`}
            element={<Notification />}
          >
            <Route index element={<NotificationsDetailedView />}></Route>
          </Route>
          </Route>

          <Route
            path={APPLICANT_ROUTE_MAP.root_star}
            element={<MyApplications />}
          />
          {/* Notifications routing starts here */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
