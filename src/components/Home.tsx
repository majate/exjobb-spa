import { Box, Container, Typography } from '@mui/material'

const Home = () => {
  return (
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
          Welcome!
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          paragraph
        >
          Who would have thought that you would find this little site with no
          real content? This site was developed with the sole purpose of being
          used in experiments; experiments comparing the single-page application
          achitecture against the micro frontend architecture in terms of energy
          consumption.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          paragraph
        >
          Of course, you are still free to explore this site's different pages.
          If that is your which, I recommend you start with the links in the
          header. I at least recommend you to stop reading this text, because I
          have nothing more to add.
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Have a nice day!
        </Typography>
      </Container>
    </Box>
  )
}

export default Home
