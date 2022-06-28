import { Card, CardMedia, CardContent, Typography } from '@mui/material'

type FeedCardProps = {
  title: string
  description: string
  image: string
}

const FeedCard = (props: FeedCardProps) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        image={props.image}
        alt={props.title.toLowerCase()}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography>{props.description}</Typography>
      </CardContent>
    </Card>
  )
}

export default FeedCard
