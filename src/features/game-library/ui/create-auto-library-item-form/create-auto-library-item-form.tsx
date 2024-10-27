'use client';

import cn from 'classnames';
import { RiDeleteBinLine, RiAddCircleLine } from '@remixicon/react';
import { Controller } from 'react-hook-form';

import { PLAY_STATUS } from '../../constants';
import { formatPlayStatus, usePlayRecordsFieldArray } from '../../lib';
import { PlayStatus, type CreateAutoLibraryItemData } from '../../model';
import { formatDrm, type GameDrm } from '@/entities/game';
import { Select } from '@/shared/ui/select';
import * as Input from '@/shared/ui/input';
import { Checkbox } from '@/shared/ui/checkbox';
import { Button } from '@/shared/ui/button';
import { Textarea } from '@/shared/ui/textarea';
import * as styles from './create-auto-library-item-form.css';

type CreateAutoLibraryItemFormProps = {
  availableDrms: GameDrm[];
  onSubmit?: (data: Omit<CreateAutoLibraryItemData, 'gameId'>) => void;
};

export default function CreateAutoLibraryItemForm({
  availableDrms,
  onSubmit,
}: CreateAutoLibraryItemFormProps) {
  const {
    fields,
    append,
    remove,
    register,
    createHandleSubmit,
    control,
    setValue,
    watch,
  } = usePlayRecordsFieldArray({
    defaultValues: {
      playRecords: [
        {
          drm: null,
          isCustomDrm: false,
          playTime: 0,
          isCleared: false,
          playStatus: null,
          memo: '',
        },
      ],
    },
  });
  const playStatusItems = Object.values(PLAY_STATUS);

  const handleValidSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={createHandleSubmit(handleValidSubmit)}>
      <div>
        {fields.map((field, index) => (
          <fieldset key={field.id} className={styles.instanceGroup}>
            <div className={styles.instanceHeader}>
              <legend className={styles.instanceLegend}>
                플레이 {index + 1}
              </legend>
            </div>
            <div className={styles.instanceContent}>
              <div className={styles.field}>
                <label htmlFor={`drm-${field.id}`} className={styles.label}>
                  DRM
                </label>
                {watch(`playRecords.${index}.isCustomDrm`) ? (
                  <Input.Root
                    {...register(`playRecords.${index}.drm`, {
                      required: true,
                      minLength: 1,
                    })}
                    id={`drm-${field.id}`}
                    className={styles.control}
                  />
                ) : (
                  <Controller
                    control={control}
                    name={`playRecords.${index}.drm`}
                    rules={{ required: true }}
                    render={({ field: { value, name } }) => (
                      <Select.Root
                        name={name}
                        value={value ?? ''}
                        required
                        onValueChange={(value) => {
                          setValue(name, value as GameDrm);
                        }}
                      >
                        <Select.Trigger
                          id={`drm-${field.id}`}
                          className={styles.selectTrigger}
                        >
                          <Select.Value />
                          <Select.Icon />
                        </Select.Trigger>
                        <Select.Content sideOffset={8}>
                          {availableDrms.map((drm) => (
                            <Select.Item key={drm} value={drm}>
                              {formatDrm(drm)}
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Root>
                    )}
                  />
                )}
                <div className={cn(styles.subField, styles.checkboxGroup)}>
                  <Controller
                    control={control}
                    name={`playRecords.${index}.isCustomDrm`}
                    render={({ field: { value, name } }) => (
                      <Checkbox
                        id={`drm-manual-${field.id}`}
                        name={name}
                        value="true"
                        checked={value}
                        onCheckedChange={(isChecked) => {
                          if (isChecked === true) {
                            setValue(name, isChecked);
                            setValue(`playRecords.${index}.drm`, '');
                          } else if (isChecked === false) {
                            setValue(name, isChecked);
                            setValue(`playRecords.${index}.drm`, null);
                          }
                        }}
                      />
                    )}
                  />
                  <label htmlFor={`drm-manual-${field.id}`}>
                    직접 입력하기
                  </label>
                </div>
              </div>
              <div className={styles.field}>
                <label
                  htmlFor={`play-time-${field.id}`}
                  className={styles.label}
                >
                  플레이 시간
                </label>
                <Input.Root
                  {...register(`playRecords.${index}.playTime`, {
                    valueAsNumber: true,
                  })}
                  id={`play-time-${field.id}`}
                  type="number"
                  inputMode="numeric"
                  className={styles.control}
                >
                  <Input.Slot side="right">시간</Input.Slot>
                </Input.Root>
              </div>
              <div className={styles.field}>
                <label
                  htmlFor={`play-status-${field.id}`}
                  className={styles.label}
                >
                  플레이 상태
                </label>
                <Controller
                  control={control}
                  name={`playRecords.${index}.playStatus`}
                  render={({ field: { name, value } }) => (
                    <Select.Root
                      name={name}
                      value={value ?? ''}
                      onValueChange={(value) => {
                        setValue(name, value as PlayStatus);
                      }}
                    >
                      <Select.Trigger
                        id={`play-status-${field.id}`}
                        className={styles.selectTrigger}
                      >
                        <Select.Value />
                        <Select.Icon />
                      </Select.Trigger>
                      <Select.Content>
                        {playStatusItems.map((playStatus) => (
                          <Select.Item key={playStatus} value={playStatus}>
                            {formatPlayStatus(playStatus)}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Root>
                  )}
                />
                <div className={cn(styles.subField, styles.checkboxGroup)}>
                  <Controller
                    control={control}
                    name={`playRecords.${index}.isCleared`}
                    render={({ field: { value } }) => (
                      <Checkbox
                        id={`cleared-${field.id}`}
                        value="true"
                        checked={value}
                        onCheckedChange={(isChecked) => {
                          if (isChecked === 'indeterminate') {
                            return;
                          }

                          setValue(`playRecords.${index}.isCleared`, isChecked);
                        }}
                      />
                    )}
                  />
                  <label htmlFor={`cleared-${field.id}`}>클리어</label>
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor={`memo-${field.id}`} className={styles.label}>
                  메모
                </label>
                <Textarea
                  {...register(`playRecords.${index}.memo`)}
                  id={`memo-${field.id}`}
                  className={styles.control}
                />
              </div>
            </div>
            <div className={styles.instanceFooter}>
              {fields.length > 1 && (
                <Button
                  type="button"
                  variant="text"
                  className={styles.deleteInstanceButton}
                  aria-label={`플레이 ${index + 1} 삭제`}
                  onClick={() => remove(index)}
                >
                  <RiDeleteBinLine size={20} />
                </Button>
              )}
            </div>
          </fieldset>
        ))}
        <div className={styles.actionArea}>
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              append({
                drm: null,
                isCustomDrm: false,
                playTime: 0,
                isCleared: false,
                playStatus: null,
                memo: '',
              });
            }}
          >
            <RiAddCircleLine
              size={20}
              className={styles.addInstanceButtonIcon}
            />
            플레이 정보 추가
          </Button>
          <Button type="submit">등록하기</Button>
        </div>
      </div>
    </form>
  );
}
