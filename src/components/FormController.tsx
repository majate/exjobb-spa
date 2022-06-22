import Form from './Form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export type FormModel = {
  username: string
  email: string
  //... more fields here
}

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Must be at least 5 characters long')
    .required(),
  email: yup.string().email().required(),
  //... more fields here
})

/**
 * Component handling the logic of a form.
 * Code inspired by https://medium.com/geekculture/the-1-best-design-pattern-for-managing-forms-in-react-87ae825c98f4
 */
const FormController = () => {
  const form = useForm<FormModel>({
    mode: 'onSubmit',
    defaultValues: { username: '', email: '' },
    resolver: yupResolver(formSchema),
  })

  const handleSubmit = (data: FormModel) => {
    //form.reset(data)
    console.group('Form submit')
    console.log(data)
    console.groupEnd()
  }

  return <Form form={form} onSubmit={handleSubmit} />
}

export default FormController
