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
    filterOGA: `${rest}filterOGA`
  },
  manageForms: {
    getForms: `${rest}getForms`,
    convertODKtoXML: `user/convert`,
    createForm: `${rest}createForm`,
    publishForms: `${rest}publishForms`,
    unpublishForms: `${rest}unpublishForms`,
    viewForm: `${rest}viewForm`,
    deleteForm: `${rest}deleteForm`,
    filterForms: `${rest}filterForms`
  },
  manageUsers: {
    userList: `${rest}getAllUsers`,
    specificUser: `${rest}getSpecificUser`,
    filterUsers: `${rest}filterUsers`
  },

desktopAnalysis:{
    getUsersForSchedulingAssessment:`${rest}getUsersForSchedulingAssessment`,
    scheduleAssessment: `${rest}scheduleAssessment`,
    getDesktopAnalysisForms: `${rest}getDesktopAnalysis`,
    getAllCourses : `${rest}getAllCourses`,
    filterDesktopAnalysis: `${rest}filterDesktopAnalysis`
  },
  scheduleManagement:{
    getAssessmentSchedule: `${rest}getAssessmentSchedule`,
    filterAssessments: `${rest}filterAssessments`
  },
  SIGNUP: {
    FUSION_AUTH_REGISTRATION: "user/registration",
  },
  LOGIN: {
    OTP_SEND: "user/otpSend",
    OTP_VERIFY: "user/otpVerify",
    USERLOGIN: "login",
  },
  NOTIFICATION: {
    SEND_SMS: "",
    SEND_EMAIL: "",
    SAVE: "",
    GET: "",
  },
};

export default API_URL;
