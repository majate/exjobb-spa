import alps from '../static/alps.jpg'
import castle from '../static/castle.jpg'
import mountainView from '../static/mountain1.jpg'
import mountainPeak from '../static/mountain2.jpg'
import lake from '../static/lake1.jpg'
import autumn from '../static/lake2.jpg'
import winter from '../static/winter.jpg'

type Card = {
  title: string
  description: string
  image: string
}

const cards: Card[] = [
  {
    title: 'The Alps',
    description:
      'The Alps are a range of mountains in Europe. A great place for skiing, hiking and exploring amazing views.',
    image: alps,
  },
  {
    title: 'Mountains',
    description:
      'There are other mountains in Europe outside the Alps. Often, they provide equally nice views. This particular view can be experience in Romania.',
    image: mountainView,
  },
  {
    title: 'Mountain Peak',
    description:
      'The highest point of a mountain is its peak. Mountain climbers often aim to reach this point.',
    image: mountainPeak,
  },
  {
    title: 'The Swedish Lake',
    description:
      'There are multiple lakes in the world. This lovely lake is located in a Swedish pine forest near Stockholm.',
    image: lake,
  },
  {
    title: 'Autumn',
    description:
      'An autumn sun shining on autumn leaves is truly a lovely sight.',
    image: autumn,
  },
  {
    title: 'Winter Wonderland',
    description:
      'Not everyone gets to experience a snowy winter wonderland. At least, you now get to experience it in a photo.',
    image: winter,
  },
  {
    title: 'The castle',
    description:
      'A castle is a building; like a house, but bigger and often nicer. In stories, castles are the home of royalty, but in reality, multiple castles are just museums.',
    image: castle,
  },
]

export default cards
