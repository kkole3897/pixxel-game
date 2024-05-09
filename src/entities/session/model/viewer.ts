import { z } from 'zod';

const ROLES = ['associate', 'regular', 'admin'] as const;

const RoleSchema = z.enum(ROLES);

export const ViewerSchema = z.object({
  id: z.string(),
  role: RoleSchema,
});

export type Viewer = z.infer<typeof ViewerSchema>;
