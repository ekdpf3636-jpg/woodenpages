export async function getOrderListMock() {
  return [
    {
      orderNo: 101,
      orderDate: "2025-10-01",
      customerName: "WOODEN PARTNER",
      itemName: "WOODEN A-001",
      qty: 120,
      price: 4500,
      deliState: "납품완료",
    },
    {
      orderNo: 102,
      orderDate: "2025-10-02",
      customerName: "WOODEN PARTNER",
      itemName: "WOODEN KIT-XL",
      qty: 30,
      price: 12000,
      deliState: "납품대기",
    },
  ];
}

// create/update/delete 같은건 실제 저장 안 하고 그냥 알림만
export async function createOrderListMock() {
  alert("데모 모드: 서버에 저장 안 됩니다.");
  return { result: "mock-ok" };
}
export async function updateOrderListMock() {
  alert("데모 모드: 수정은 화면에서만 됩니다.");
  return { result: "mock-ok" };
}
export async function deleteOrderListMock() {
  alert("데모 모드: 삭제 동작은 시연만 합니다.");
  return { result: "mock-ok" };
}
