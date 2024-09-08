import { z } from 'zod'

export const formSchema = z.object({
  name: z
    .string()
    .min(2, 'O nome deve ter 2 ou mais caracteres')
    .max(50, 'O nome deve ter no máximo 50 caracteres'),
  email: z.string().email('Digite um e-mail válido'),
  message: z
    .string()
    .min(50, 'A mensagem deve ter no mínimo 50 caracteres')
    .max(500, 'A mensagem deve ter no máximo 500 caracteres'),
})

export type formData = z.infer<typeof formSchema>
