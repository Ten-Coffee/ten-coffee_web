export const applyMask = (value: string, mask: string) => {
  let maskedValue = '';
  let valueIndex = 0;

  for (let i = 0; i < mask.length; i++) {
    const currentMaskChar = mask[i];

    if (currentMaskChar === '9') {
      if (value[valueIndex]) {
        maskedValue += value[valueIndex];
        valueIndex++;
      } else {
        break;
      }
    } else {
      maskedValue += currentMaskChar;
    }
  }

  return maskedValue;
};
