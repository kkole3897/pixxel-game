'use client';

import { Input, Button, Checkbox } from '@/shared/ui';
import { Controller } from 'react-hook-form';
import { debounce } from 'lodash-es';

import * as styles from './register-oauth-form.css';
import { useRegisterOauthForm, useCheckNicknameMutation } from '../../model';

export default function RegisterOauthForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    trigger,
  } = useRegisterOauthForm();
  const { mutateAsync } = useCheckNicknameMutation();

  const onChangeNickname = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = await trigger('nickname');
    if (!isValid) {
      return;
    }

    try {
      const nickname = e.target.value;
      const data = await mutateAsync(nickname);

      if (!data.isValid) {
        setError(
          'nickname',
          { type: 'duplicated', message: '중복된 닉네임입니다.' },
          { shouldFocus: true }
        );
      }
    } catch {
      // TODO: 닉네임 유효성 검사 요청 error 처리
    }
  };

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className={styles.formInner}>
        <div>
          <div className={styles.field}>
            <label htmlFor="nickname" className={styles.label}>
              닉네임
            </label>
            <div className={styles.formHelperText}>
              2자 이상 20자 이하로 입력해주세요.
            </div>
            <Input.Root
              id="nickname"
              className={styles.input}
              placeholder="닉네임을 입력해주세요"
              isInvalid={!!errors.nickname}
              {...register('nickname', {
                onChange: debounce(onChangeNickname, 300),
              })}
            />
            {!!errors.nickname && (
              <p className={styles.fieldErrorMessage}>
                {errors.nickname.message}
              </p>
            )}
          </div>
          <div className={styles.field}>
            <div className={styles.checkboxContainer}>
              <Controller
                control={control}
                name="termsAgreement"
                render={({ field: { onChange, value, ...rest } }) => (
                  <Checkbox
                    id="terms_agreement"
                    className={styles.checkbox}
                    onCheckedChange={onChange}
                    isInvalid={!!errors.termsAgreement}
                    checked={value}
                    {...rest}
                  />
                )}
              />
              <label htmlFor="terms_agreement" className={styles.checkboxLabel}>
                이용약관 및 개인정보 이용에 동의합니다.
              </label>
            </div>
          </div>
        </div>
        <div className={styles.submitArea}>
          <Button type="submit" size="lg" className={styles.submitButton}>
            회원가입 완료
          </Button>
        </div>
      </div>
    </form>
  );
}
