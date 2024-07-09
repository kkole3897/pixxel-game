import {
  type GoogleCallbackSearchParams,
  GoogleCallbackResultSchema,
} from '../model';

export function convertGoogleCallbackSearchParams(
  searchParams: GoogleCallbackSearchParams
) {
  const kakaoCallbackResult = GoogleCallbackResultSchema.parse(searchParams);

  return kakaoCallbackResult;
}
