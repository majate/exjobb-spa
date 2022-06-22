import { UseFormReturn } from 'react-hook-form'
import { FormModel } from './FormController'
import { Button, TextField } from '@mui/material'

type FormProps = {
  form: UseFormReturn<FormModel>
  onSubmit: (data: FormModel) => any
}

const Form = (props: FormProps) => {
  const { formState, register, handleSubmit } = props.form
  const { errors, isSubmitting } = formState

  console.log(register('email'))
  const { ref: emailRef, ...emailProps } = register('email')

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div>
        <label>Username</label>
        <div>
          <input
            type="text"
            placeholder="Enter username"
            {...register('username')}
          />
        </div>
        <div>{errors?.username?.message}</div>
      </div>

      {/* ... more fields here */}
      <TextField
        error={errors?.email ? true : false}
        label="Email"
        defaultValue=""
        helperText={errors?.email?.message}
        {...emailProps}
        inputRef={emailRef}
      />
      <Button
        variant="contained"
        disabled={isSubmitting}
        onClick={handleSubmit(props.onSubmit)}
      >
        Submit
      </Button>
    </form>
  )
}

export default Form
