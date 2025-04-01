export function theresDuplicate(indexes: number[]) {
  const setVer = new Set(indexes);
  return indexes.length !== setVer.size ? true : false;
}
