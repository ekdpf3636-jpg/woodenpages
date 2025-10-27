export async function fetchMonthlyRevenueMock() {
  return [
    { ym: "2025-06", total: 12800000 },
    { ym: "2025-07", total: 16400000 },
    { ym: "2025-08", total: 17100000 },
    { ym: "2025-09", total: 22300000 },
    { ym: "2025-10", total: 19800000 },
  ];
}

export async function fetchItemQtyMonthlyByYmMock(ym) {
  return [
    { itemName: "WOODEN A-001", qty: 320 },
    { itemName: "WOODEN A-002", qty: 290 },
    { itemName: "WOODEN B-110", qty: 180 },
    { itemName: "WOODEN KIT-XL", qty: 150 },
  ];
}

export async function fetchItemQtyMonthlyAllMock() {
  return [
    { ym: "2025-08", itemName: "WOODEN A-001", qty: 300 },
    { ym: "2025-08", itemName: "WOODEN A-002", qty: 250 },
    { ym: "2025-09", itemName: "WOODEN A-001", qty: 320 },
    { ym: "2025-09", itemName: "WOODEN KIT-XL", qty: 150 },
    { ym: "2025-10", itemName: "WOODEN B-110", qty: 180 },
  ];
}
