import { UseFormReturn } from 'react-hook-form'
import { FormModel } from './FormController'
import FormTextField from './FormTextField'
import { Button } from '@mui/material'

type FormProps = {
  form: UseFormReturn<FormModel>
  onSubmit: (data: FormModel) => any
}

const Form = (props: FormProps) => {
  const { formState, handleSubmit, control } = props.form

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <FormTextField name="username" label="Username" control={control} />
      <FormTextField name="email" label="Email" control={control} />
      <Button
        variant="contained"
        disabled={formState.isSubmitting}
        onClick={handleSubmit(props.onSubmit)}
      >
        Submit
      </Button>
    </form>
  )
}

export default Form
