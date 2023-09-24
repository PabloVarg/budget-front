function leftPad(num: number, length: number, fill: string): string {
  const n = num.toString();
  const paddingLength = Math.max(0, length - n.length);
  const fillBuffer = new Array(paddingLength).fill(fill);

  fillBuffer.push(num);
  return fillBuffer.join("");
}

export function getLocalDateString() {
  const sep = "-";
  const date = new Date(Date.now());
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}${sep}${leftPad(month, 2, "0")}${sep}${leftPad(day, 2, "0")}`;
}
