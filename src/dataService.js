export async function getDashboardData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        stats: {
          users: 1780,
          sales: 9340,
          visits: 21300
        },
        chart: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [120, 190, 300, 500, 200, 300, 450]
        }
      });
    }, 800);
  });
}
