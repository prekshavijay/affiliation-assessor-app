const rest = "rest/";

const API_URL = {
  auth: {
    register: `${rest}createAdmin`,
    getRegulator: `${rest}getRegulator`,
  },
  groundAnalysis: {
    viewForm: `${rest}getFormData`,
    list: `${rest}getGroundInspectionAnalysis`,
    markStatus: `${rest}inProgress`,
    acceptApplicant: `${rest}acceptForm`,
    rejectApplicant: `${rest}rejectForm`,
    getGroundInspectionAnalysis: `${rest}getGroundInspectionAnalysis`,
    ViewStatus: {
      getViewStatus: `${rest}getStatusLog`,
    },
  },
  manageForms: {
    convertODKtoXML: `user/convert`,
  },
  manageUsers: {
    userList: `${rest}getAllUsers`,
    specificUser: `${rest}getSpecificUser`,
  },

  desktopAnalysis: {
    getUsersForSchedulingAssessment: "rest/getUsersForSchedulingAssessment",
    scheduleAssessment: `rest/scheduleAssessment`,
  },
  SIGNUP: {
    FUSION_AUTH_REGISTRATION: "user/registration",
  },
  LOGIN: {
    OTP_SEND: "user/otpSend",
    OTP_VERIFY: "user/otpVerify",
    USERLOGIN: "login",
  },
};

export default API_URL;
