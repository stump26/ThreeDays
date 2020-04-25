export const onewayID = (hashSize: number): string => {
  return '_' + Math.random().toString(36).substr(2, hashSize);
};
