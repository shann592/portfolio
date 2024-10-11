import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactSchema = z.object({
  name: z.string().min(6),
  email: z.string().min(6).email(),
  message: z.string().min(10),
})

export const contactSchemaResolver = zodResolver(contactSchema)
