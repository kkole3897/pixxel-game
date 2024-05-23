'use client';

import Script from 'next/script';

import { kakao } from '../../config';

export default function KakaoSdk() {
  const { javascriptKey } = kakao;

  const handleLoad = () => {
    Kakao.init(javascriptKey);
  };

  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
      integrity="sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01"
      crossOrigin="anonymous"
      onLoad={handleLoad}
    />
  );
}
