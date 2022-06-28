import { Box, Container, Typography, Stack, Button } from '@mui/material'
import Feed from './Feed'

const Home = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Exjobb
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Welcome to this dummy site with no real meaning. I am simply here
            for testing purposes. Down below are some content for you to read.
            If you don&apos;t like reading, you can fill in the form instead!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Take the form</Button>
            <Button variant="outlined">Do nothing</Button>
          </Stack>
        </Container>
      </Box>
      <Feed />
    </>
  )
}

export default Home
