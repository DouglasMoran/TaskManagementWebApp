// Create array of string from enum type
export const createArrayFromObject = <T extends Record<string, unknown>>(
  type: T,
): string[] => Object.values(type).filter((value) => typeof value === 'string');
