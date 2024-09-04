import { Block } from 'payload'

const HeadingBlock: Block = {
  slug: 'heading',
  imageURL: 'https://miro.medium.com/v2/resize:fit:1200/1*vt9h736VGcSjf2lpy2iz4Q.jpeg',
  labels: {
    singular: 'heading',
    plural: 'headings',
  },
  fields: [
    {
      name: 'text',
      label: 'text',
      type: 'text',
      required: true,
    },
    {
      name: 'tag',
      label: 'html tag',
      type: 'select',
      options: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'span'],
      defaultValue: 'H1',
    },
  ],
}

export default HeadingBlock
