export async function getItemsMock() {
  return [
    { itemNo: 1, itemName: "WOODEN A-001" },
    { itemNo: 2, itemName: "WOODEN B-110" },
    { itemNo: 3, itemName: "WOODEN KIT-XL" },
  ];
}

export async function getForecastSeriesMock(itemNo, h = 12) {
  return [
    { date: "2025-06", actual: 120, forecast: null },
    { date: "2025-07", actual: 150, forecast: null },
    { date: "2025-08", actual: 160, forecast: null },
    { date: "2025-09", actual: 170, forecast: null },
    { date: "2025-10", actual: 165, forecast: null },
    { date: "2025-11", actual: null, forecast: 180 },
    { date: "2025-12", actual: null, forecast: 190 },
    { date: "2026-01", actual: null, forecast: 200 },
  ];
}
