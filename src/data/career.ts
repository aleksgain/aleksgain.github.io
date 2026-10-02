import personal from './personal.json';

/** Full years since the first professional role (personal.careerStart, "YYYY-MM"). */
export function yearsInTech(now: Date = new Date()): number {
  const [y, m] = personal.careerStart.split('-').map(Number);
  const months = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
  return Math.floor(months / 12);
}
