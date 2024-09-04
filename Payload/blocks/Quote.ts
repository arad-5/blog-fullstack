import { Block } from 'payload'

const QuoteBlock: Block = {
  slug: 'quote',
  imageURL:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97UUZwau_FlPi-PD9xJlQ1G6xytKehGGlfA&s',
  labels: {
    singular: 'quote',
    plural: 'quotes',
  },
  fields: [
    {
      name: 'authorFullname',
      label: 'author full name',
      type: 'text',
    },
    {
      name: 'quoteText',
      label: 'quote text',
      type: 'richText',
      required: true,
    },
    {
      name: 'backgrondImage',
      label: 'background image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'authorImage',
      label: 'author image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
export default QuoteBlock
