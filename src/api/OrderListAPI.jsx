// import axios_api from "./axios";
// import { BASE_URL } from "./config";

// const host = `${BASE_URL}/order`;

// // 전체 주문 조회
// export const getOrderList = async () => {
//   const res = await axios_api.get(host);
//   return res.data;
// };

// // 등록
// export const createOrderList = async (formData) => {
//   const res = await axios_api.post(host, formData);
//   return res.data;
// };

// // 수정
// export const updateOrderList = async (orderNo, formData) => {
//   const res = await axios_api.put(`${host}/${orderNo}`, formData);
//   return res.data;
// };

// // 상태 값 변경
// export const updateOrderStatus = async (orderNo, body) => {
//   axios_api.patch(`${BASE_URL}/order/${orderNo}/status`, body).then(r => r.data);
// };

// // 상태 값 완료
// export const getCompletedOrders = async () => {
//   const res = await axios_api.get(`${BASE_URL}/order/completed`);
//   return res.data;
// }

// // 삭제
// export const deleteOrderList = async (orderNo) => {
//   const res = await axios_api.delete(`${host}/${orderNo}`);
//   return res.data;
// };

import {
  getOrderListMock,
  createOrderListMock,
  updateOrderListMock,
  deleteOrderListMock,
} from "../mock/orderMock";

// 전체 주문 목록
export const getOrderList = async () => {
  return getOrderListMock();
};

// 납품완료만 필터링해서 보여주는 목록 (완료 현황 페이지 등에서 사용)
export const getCompletedOrders = async () => {
  const all = await getOrderListMock();
  return all.filter(o => o.deliState === "납품완료");
};

// 주문 생성 (데모: 알림만)
export const createOrderList = async (...args) => {
  return createOrderListMock(...args);
};

// 주문 수정 (데모: 알림만)
export const updateOrderList = async (...args) => {
  return updateOrderListMock(...args);
};

// 주문 삭제 (데모: 알림만)
export const deleteOrderList = async (...args) => {
  return deleteOrderListMock(...args);
};

// 주문 상태 업데이트 (출고상태, 납품상태 등 토글하는 동작일 가능성 높음)
// 실제 서버 저장은 없고 알림만
export const updateOrderStatus = async (...args) => {
  alert("데모 모드: 상태 변경만 시뮬레이션 했습니다.");
  return { result: "mock-status-updated" };
};

