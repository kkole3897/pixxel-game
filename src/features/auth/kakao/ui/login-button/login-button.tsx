'use client';

import { useKakaoOidc } from '../../lib';

export default function LoginButton() {
  const { authorize } = useKakaoOidc();

  const clickHandler = () => {
    authorize();
  };

  return (
    <button type="button" onClick={clickHandler}>
      카카오 로그인
    </button>
  );
}
