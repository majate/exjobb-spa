import { Box, Container, Typography, Stack, Button } from '@mui/material'
import { useState } from 'react'
import Feed from './Feed'

const MAX_CARDS = 50
const MIN_CARDS = 0

const FeedPage = () => {
  const [numCards, setNumCards] = useState<number>(24)

  const handleIncreaseCards = () => {
    if (numCards < MAX_CARDS) setNumCards(numCards + 1)
  }

  const handleDecreaseCards = () => {
    if (numCards > MIN_CARDS) setNumCards(numCards - 1)
  }

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
            Explore nature
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Welcome to this little corner of the internet!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Go ahead and scroll through this hand picked list of nice nature
            cards. If you are unhappy with the card amount, don&apos;t hesitate
            to use the buttons!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={handleIncreaseCards}
              disabled={numCards >= MAX_CARDS}
              id="feed-button-increase"
            >
              Give me more!
            </Button>
            <Button
              variant="outlined"
              onClick={handleDecreaseCards}
              disabled={numCards <= MIN_CARDS}
              id="feed-button-decrease"
            >
              Fewer, please
            </Button>
          </Stack>
        </Container>
      </Box>
      <Feed numCards={numCards} />
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          id="feed-footer"
        >
          Want more cards? Use the button above!
        </Typography>
      </Box>
    </>
  )
}

export default FeedPage
