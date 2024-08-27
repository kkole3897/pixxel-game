export type SearchPageSearchParams = {
  query?: string | string[];
};

export function parseSearchPageSearchParams(
  searchParams: SearchPageSearchParams
): { query?: string } {
  const query = Array.isArray(searchParams.query)
    ? searchParams.query[0]
    : searchParams.query;

  return {
    query,
  };
}
