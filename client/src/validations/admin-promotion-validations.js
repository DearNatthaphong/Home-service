export const adminPromotionValidate = (isNumPercent) => {
  const newError = {};

  if (isNumPercent > 100) {
    newError.all = "ไม่สามารถลดได้มากกว่า 100 %";
  }

  return newError;
};
