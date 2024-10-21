'use client';

import { StoreSelect } from '../store-select';
import { SlugTypeSelect } from '../slug-type-select';
import {
  useCreateRequestedGameFormState,
  revertStoreIdentifierToUrl,
} from '../../lib';
import {
  type RequestedGameStoreIdentifier,
  type CreateRequestedGameData,
} from '../../model';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { DefaultLink } from '@/shared/ui/default-link';
import * as styles from './create-requested-game-form.css';

export type CreateRquestedGameFormProps = {
  className?: string;
  storeIdentifier: RequestedGameStoreIdentifier;
  onSubmit?: (data: CreateRequestedGameData) => void;
};

export default function CreateRequestedGameForm({
  className,
  storeIdentifier,
  onSubmit,
}: CreateRquestedGameFormProps) {
  const {
    handleChangeInput,
    handleSubmit,
    formState,
    handleSelectStore,
    storeUrl,
    handleSelectSlugType,
    errors,
    errorCatagory,
  } = useCreateRequestedGameFormState(storeIdentifier);

  return (
    <form
      className={className}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className={styles.formInner}>
        <div className={styles.field}>
          <label htmlFor="store" className={styles.label}>
            스토어
          </label>
          <StoreSelect
            id="store"
            value={formState.store}
            onChange={handleSelectStore}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="type" className={styles.label}>
            페이지 타입
          </label>
          <SlugTypeSelect
            id="type"
            name="slugType"
            store={formState.store}
            value={formState.slugType}
            required
            onChange={handleSelectSlugType}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="slug" className={styles.label}>
            페이지 ID
          </label>
          <Input
            id="slug"
            name="slug"
            value={formState.slug}
            required
            onChange={handleChangeInput}
            isInvalid={errors.slug !== null}
          />
          {errors.slug === errorCatagory.slug.requiredError ? (
            <div className={styles.errorMessage}>필수로 입력해야 합니다.</div>
          ) : errors.slug === errorCatagory.slug.steamFormatError ? (
            <div className={styles.errorMessage}>숫자만 입력해주세요.</div>
          ) : null}
        </div>
        <div className={styles.noticeBox}>
          <div>💡</div>
          <p className={styles.noticeText}>
            스토어와 페이지 관련 정보는 입력하신 url을 토대로 자동으로
            생성되었습니다. <br />
            임의로 변경할 경우 수집에 실패할 수 있습니다.
            <br />
            <DefaultLink
              href={storeUrl}
              target="_blank"
              className={styles.noticeLink}
            >
              {storeUrl}
            </DefaultLink>
            이 의도한 페이지가 아닐 경우에만 변경해주세요.
          </p>
        </div>
        <div className={styles.field}>
          <label htmlFor="title" className={styles.label}>
            타이틀
          </label>
          <Input
            id="title"
            name="title"
            value={formState.title}
            onChange={handleChangeInput}
            autoFocus
          />
          <div className={styles.fieldHelperText}>
            실제 게임 타이틀과 동일하지 않더라도 문제는 없지만 실제 게임
            타이틀을 입력하는 것을 추천합니다. (요청 결과의 제목으로 사용되어
            쉽게 확인할 수 있습니다.)
          </div>
        </div>
        <div className={styles.submitArea}>
          <Button type="submit" size="lg" className={styles.submitButton}>
            요청하기
          </Button>
        </div>
      </div>
    </form>
  );
}
