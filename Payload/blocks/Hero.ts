import { Block } from 'payload'

const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'hero',
    plural: 'heros',
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      label: 'Text',
      type: 'textarea',
      required: true,
    },
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export default HeroBlock
