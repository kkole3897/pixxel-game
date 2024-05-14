import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const RegisterOauthFormSchema = z.object({
  nickname: z
    .string()
    .min(2, { message: '2자 이상으로 입력해주세요.' })
    .max(20, { message: '20자 이하로 입력해주세요.' }),
  termsAgreement: z.literal(true),
});

type RegisterOauthForm = z.infer<typeof RegisterOauthFormSchema>;

export function useRegisterOauthForm() {
  return useForm<RegisterOauthForm>({
    resolver: zodResolver(RegisterOauthFormSchema),
  });
}
