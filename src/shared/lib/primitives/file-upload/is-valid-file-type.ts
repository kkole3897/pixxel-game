export function isValidFileType(
  file: File | null,
  accept: string | undefined
): boolean {
  if (!file || !accept) {
    return true;
  }

  const acceptedTypes = accept.split(',').map((type) => type.trim());

  const fileName = (file.name || '').toLowerCase();
  const fileMimeType = (file.type || '').toLowerCase();
  const baseMimeType = fileMimeType.replace(/\/.*$/, '');

  const hasMatchedType = acceptedTypes.some((acceptedType) => {
    if (acceptedType.startsWith('.')) {
      return fileName.endsWith(acceptedType);
    }

    if (acceptedType.endsWith('/*')) {
      return baseMimeType === acceptedType.replace(/\/.*$/, '');
    }

    return fileMimeType === acceptedType;
  });

  return hasMatchedType;
}
