// import axios from "axios";
// import { BASE_URL } from "./config";

// const axios_api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axios_api;


// GitHub Pages 데모 모드에서는 실제 백엔드 호출 없음.
// 혹시 남아 있는 코드가 axios_api.get(...) 같은 걸 부르면
// 깔끔하게 에러만 던지게 해서 앱 전체가 완전히 죽지 않게 한다.

const throwDemoError = () => {
  throw new Error("DEMO MODE: backend not available");
};

const axios_api = {
  get: async () => throwDemoError(),
  post: async () => throwDemoError(),
  put: async () => throwDemoError(),
  patch: async () => throwDemoError(),
  delete: async () => throwDemoError(),
};

export default axios_api;

