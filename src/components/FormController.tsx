import Form from './Form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export type FormModel = {
  username: string
  email: string
  age: number
  gender: string
}

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Must be at least 5 characters')
    .required('Username is required'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  age: yup
    .number()
    .integer()
    .moreThan(0, 'Cannot be younger than 1 year')
    .required('Age is required'),
  gender: yup.string().required('Choose one option'),
})

/**
 * Component handling the logic of a form.
 * Code inspired by https://medium.com/geekculture/the-1-best-design-pattern-for-managing-forms-in-react-87ae825c98f4
 */
const FormController = () => {
  const form = useForm<FormModel>({
    mode: 'onSubmit',
    defaultValues: { username: '', email: '', age: 0, gender: 'none' },
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
