import {
  type KakaoCallbackSearchParams,
  KakaoCallbackResultSchema,
} from '../model';

export function convertKakaoCallbackSearchParams(
  searchParams: KakaoCallbackSearchParams
) {
  const kakaoCallbackResult = KakaoCallbackResultSchema.parse(searchParams);

  return kakaoCallbackResult;
}
