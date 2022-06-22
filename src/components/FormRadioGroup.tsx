import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import { Control, Controller, Path } from 'react-hook-form'

type RadioOption = {
  label: string
  value: string
}

type FormRadioGroupProps<TFormModel> = {
  name: Path<TFormModel>
  label: string
  control: Control<TFormModel, any>
  options: RadioOption[]
  row?: boolean
  //type?: React.InputHTMLAttributes<unknown>['type']
}

function FormRadioGroup<TFormModel>(props: FormRadioGroupProps<TFormModel>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.error ? true : false}>
          <FormLabel>{props.label}</FormLabel>
          <RadioGroup
            value={field.value}
            onChange={field.onChange}
            row={props.row}
          >
            {props.options.map(option => (
              <FormControlLabel
                value={option.value}
                key={`radio-${field.name}-${option.value}`}
                control={<Radio size="small" />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  )
}

export default FormRadioGroup
