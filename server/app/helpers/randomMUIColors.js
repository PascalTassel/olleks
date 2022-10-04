const getRandomColor = () => {
  const colors = ['#1976D2', '#9C27B0', '#D32F2F', '#ED6C02', '#0288D1', '#2E7D32'];

  const random = Math.floor(Math.random() * colors.length);

  return colors[random];
};

module.exports = { getRandomColor };
