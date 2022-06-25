import { Control, Controller, Path } from 'react-hook-form'
import { TextField, TextFieldProps as MUITextFieldProps } from '@mui/material'

type TextFieldProps<TFormModel> = {
  name: Path<TFormModel>
  label: string
  control: Control<TFormModel, any>
  /** Options passed into the MUI TextField component that will override the default values */
  options?: MUITextFieldProps
}

function FormTextField<TFormModel>(props: TextFieldProps<TFormModel>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, fieldState }) => (
        <TextField
          margin="dense"
          size="small"
          error={fieldState.error ? true : false}
          label={props.label}
          helperText={fieldState.error?.message}
          inputRef={field.ref}
          onChange={field.onChange}
          value={field.value}
          fullWidth
          {...props.options}
        />
      )}
    />
  )
}

export default FormTextField
