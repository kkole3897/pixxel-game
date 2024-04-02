import { assignInlineVars } from '@vanilla-extract/dynamic';
import { toPlainObject } from '@/src/shared/lib/object';

type AssignParameters = Parameters<typeof assignInlineVars>;
type Styles = ReturnType<typeof assignInlineVars>;

export function assignInlineVarsServer(
  vars: Record<string, string | undefined | null>
): Styles;
export function assignInlineVarsServer(
  contract: AssignParameters[0],
  token: AssignParameters[1]
): Styles;
export function assignInlineVarsServer(
  varsOrContract: unknown,
  token?: AssignParameters[1]
): Styles {
  if (typeof token === 'object') {
    const contract = varsOrContract as AssignParameters[0];

    return toPlainObject(assignInlineVars(contract, token));
  } else {
    const vars = varsOrContract as Record<string, string | undefined | null>;

    return toPlainObject(assignInlineVars(vars));
  }
}
