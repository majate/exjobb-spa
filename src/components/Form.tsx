import { UseFormReturn } from 'react-hook-form'
import { FormModel } from './FormController'
import FormTextField from './FormTextField'
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import FormRadioGroup from './FormRadioGroup'

type FormProps = {
  form: UseFormReturn<FormModel>
  onSubmit: (data: FormModel) => any
}

const Form = (props: FormProps) => {
  const { formState, handleSubmit, control, reset } = props.form
  const genderOptions = [
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
    { label: 'Non-binary/Other', value: 'other' },
    { label: 'Prefer not to respond', value: 'none' },
  ]

  // Note the following sx-properties
  // m: margin, p: padding (with possible combos mX or pX)
  // (t, r, b, l, x, y) => top, right, bottom, left, left/right, top/bottom

  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant="h4">Form</Typography>
        <Typography variant="subtitle1">
          Please fill in the following form
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormTextField name="username" label="Username" control={control} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormTextField
              name="age"
              label="Age"
              type="number"
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <FormRadioGroup
              name="gender"
              label="Gender"
              options={genderOptions}
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              name="email"
              label="Email"
              type="email"
              control={control}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            onClick={() => reset()}
            sx={{ mt: 3, ml: 1 }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            disabled={formState.isSubmitting}
            onClick={handleSubmit(props.onSubmit)}
            sx={{ mt: 3, ml: 1 }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default Form
