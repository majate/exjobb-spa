import { Container, Grid } from '@mui/material'
import FeedCard from './FeedCard'
import defaultCards from './cards'

type FeedProps = {
  /** The number of cards displayed in the feed (default 10) */
  numCards?: number
}

const getCards = (amount: number) =>
  Array.from(
    { length: Math.ceil(amount / defaultCards.length) },
    () => defaultCards
  ) // = [[...defaultCards], [...defaultCards], ...]
    .flat()
    .slice(0, amount)

/**
 * A feed inspired by Material UI's Album template:
 * https://github.com/mui/material-ui/tree/v5.8.5/docs/data/material/getting-started/templates/album
 */
const Feed = (props: FeedProps) => {
  const cards = getCards(props.numCards ?? 10)
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card, i) => (
          <Grid item key={`card-${i}`} xs={12} sm={6} md={4}>
            <FeedCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Feed
