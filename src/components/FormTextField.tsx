import { Control, Controller, Path } from 'react-hook-form'
import { TextField } from '@mui/material'

type TextFieldProps<TFormModel> = {
  name: Path<TFormModel>
  label: string
  control: Control<TFormModel, any>
  type?: React.InputHTMLAttributes<unknown>['type']
}

function FormTextField<TFormModel>(props: TextFieldProps<TFormModel>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, fieldState }) => (
        <TextField
          margin="dense"
          error={fieldState.error ? true : false}
          label={props.label}
          helperText={fieldState.error?.message}
          inputRef={field.ref}
          onChange={field.onChange}
          value={field.value}
          {...(props.type ? { type: props.type } : {})}
          fullWidth
        />
      )}
    />
  )
}

export default FormTextField
