'use client';
import { useState } from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';
import { RiDeleteBinLine, RiAddCircleLine } from '@remixicon/react';
import z from 'zod';

import { PLAY_STATUS } from '../../constants';
import { formatPlayStatus } from '../../lib';
import { type PlayStatus, type CreateAutoLibraryItemData } from '../../model';
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

const instanceTransformer = z
  .object({
    isCustomDrm: z
      .literal('true')
      .optional()
      .transform((value) => {
        return value === 'true';
      }),
    drm: z.string(),
    playTime: z
      .string()
      .regex(/^\d*$/)
      .transform((value) => {
        if (!value) {
          return 0;
        }

        return parseInt(value, 10);
      }),
    playStatus: z.string().transform((value) => {
      if (!value) {
        return null;
      }

      return value as PlayStatus;
    }),
    isCleared: z
      .literal('true')
      .optional()
      .transform((value) => value === 'true'),
    memo: z.string().transform((value) => {
      if (!value) {
        return null;
      }

      return value;
    }),
  })
  .transform((value) => {
    if (value.isCustomDrm === false) {
      const drm = value.drm as GameDrm;

      return {
        ...value,
        drm,
        isCustomDrm: false,
      } as const;
    }

    return {
      ...value,
      isCustomDrm: true,
    } as const;
  });

function transformRawInstance(rawInstance: unknown) {
  return instanceTransformer.parse(rawInstance);
}

function formDataToCreateLibraryItemData(
  formData: FormData
): Omit<CreateAutoLibraryItemData, 'gameId'> {
  const data = Object.fromEntries(formData.entries());

  const rawInstances = Object.entries(data).reduce<
    { [key: string]: FormDataEntryValue }[]
  >((acc, [key, value]) => {
    const [_, _index, field] = key.split('.');

    const index = parseInt(_index, 10);
    const instanceData: { [key: string]: FormDataEntryValue } =
      acc[index] || {};

    instanceData[field] = value;

    acc[index] = instanceData;

    return acc;
  }, []);

  return {
    additionalInfo: rawInstances.map(transformRawInstance),
  };
}

export default function CreateAutoLibraryItemForm({
  availableDrms,
  onSubmit,
}: CreateAutoLibraryItemFormProps) {
  const playStatusItems = Object.values(PLAY_STATUS);
  const [controlledInstance, setControlledInstance] = useState<{
    [K: string]: {
      isCustomDrm: boolean;
    };
  }>({
    [nanoid()]: {
      isCustomDrm: false,
    },
  });

  const handleSubmit =
    (onSubmit?: CreateAutoLibraryItemFormProps['onSubmit']) =>
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      const data = formDataToCreateLibraryItemData(formData);

      onSubmit?.(data);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {Object.keys(controlledInstance).map((id, index) => (
          <fieldset key={id} className={styles.instanceGroup}>
            <div className={styles.instanceHeader}>
              <legend className={styles.instanceLegend}>
                인스턴스 {index + 1}
              </legend>
            </div>
            <div className={styles.instanceContent}>
              <div className={styles.field}>
                <label htmlFor={`drm-${id}`} className={styles.label}>
                  DRM
                </label>
                {controlledInstance[id].isCustomDrm ? (
                  <Input.Root
                    id={`drm-${id}`}
                    name={`instance.${index}.drm`}
                    className={styles.control}
                    required
                  />
                ) : (
                  <Select.Root name={`instance.${index}.drm`} required>
                    <Select.Trigger
                      id={`drm-${id}`}
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
                <div className={cn(styles.subField, styles.checkboxGroup)}>
                  <Checkbox
                    id={`drm-manual-${id}`}
                    name={`instance.${index}.isCustomDrm`}
                    value="true"
                    checked={controlledInstance[id].isCustomDrm}
                    onCheckedChange={() =>
                      setControlledInstance((prev) => {
                        const { ...prevCopy } = prev;

                        prevCopy[id] = {
                          ...prevCopy[id],
                          isCustomDrm: !prevCopy[id].isCustomDrm,
                        };

                        return prevCopy;
                      })
                    }
                  />
                  <label htmlFor={`drm-manual-${id}`}>직접 입력하기</label>
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor={`play-time-${id}`} className={styles.label}>
                  플레이 시간
                </label>
                <Input.Root
                  id={`play-time-${id}`}
                  name={`instance.${index}.playTime`}
                  type="number"
                  inputMode="numeric"
                  className={styles.control}
                >
                  <Input.Slot side="right">시간</Input.Slot>
                </Input.Root>
              </div>
              <div className={styles.field}>
                <label htmlFor={`play-status-${id}`} className={styles.label}>
                  플레이 상태
                </label>
                <Select.Root name={`instance.${index}.playStatus`}>
                  <Select.Trigger
                    id={`play-status-${id}`}
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
                <div className={cn(styles.subField, styles.checkboxGroup)}>
                  <Checkbox
                    id={`cleared-${id}`}
                    name={`instance.${index}.isCleared`}
                    value="true"
                  />
                  <label htmlFor={`cleared-${id}`}>클리어</label>
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor={`memo-${id}`} className={styles.label}>
                  메모
                </label>
                <Textarea
                  id={`memo-${id}`}
                  name={`instance.${index}.memo`}
                  className={styles.control}
                />
              </div>
            </div>
            <div className={styles.instanceFooter}>
              {Object.keys(controlledInstance).length > 1 && (
                <Button
                  type="button"
                  variant="text"
                  className={styles.deleteInstanceButton}
                  aria-label={`인스턴스 ${index + 1} 삭제`}
                  onClick={() =>
                    setControlledInstance((prev) => {
                      const { [id]: _, ...rest } = prev;

                      return rest;
                    })
                  }
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
              setControlledInstance((prev) => ({
                ...prev,
                [nanoid()]: {
                  isCustomDrm: false,
                },
              }));
            }}
          >
            <RiAddCircleLine
              size={20}
              className={styles.addInstanceButtonIcon}
            />
            인스턴스 추가
          </Button>
          <Button type="submit">등록하기</Button>
        </div>
      </div>
    </form>
  );
}
