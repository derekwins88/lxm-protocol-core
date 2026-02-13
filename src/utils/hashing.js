export function simulateHash(data) {
  const str = typeof data === 'string' ? data : JSON.stringify(data);
  let h = 0x811c9dc5;

  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  }

  const hex = (h >>> 0).toString(16).padStart(8, '0');
  return `0xSIM_${hex}${hex.split('').reverse().join('')}`.toUpperCase();
}
