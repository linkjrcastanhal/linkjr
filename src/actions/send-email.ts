'use server'

import ContactEmail from '@/emails/contact'
import { formData, formSchema } from '@/schema/form'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(values: formData) {
  const result = formSchema.safeParse(values)

  if (result.success) {
    const { name, email, message } = result.data

    try {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['linkjrcastanhal@gmail.com'],
        subject: `${name} entrou em contato`,
        react: ContactEmail({
          name,
          email,
          message,
        }),
      })

      return { success: true, data }
    } catch (error) {
      console.log(error)
      return { success: false, error }
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}
