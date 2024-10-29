const isDefined = <T>(v: T | undefined): v is T =>
  v !== undefined && v !== null;

export function isValidFileSize(file: File, maxSize: number | undefined): boolean {
  if (isDefined(file.size)) {
    if (isDefined(maxSize)) {
      if (file.size > maxSize) return false;
    }
  }

  return true;
}
