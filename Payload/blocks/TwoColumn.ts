import { Block } from 'payload'

const TwoColumns: Block = {
  slug: 'twoColumns',
  labels: {
    singular: 'TwoColumns',
    plural: 'TwoColumns',
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
    {
      name: 'text',
      label: 'Text',
      type: 'textarea',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'direction',
      label: 'Direction',
      type: 'select',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Reserve',
          value: 'reserve',
        },
      ],
    },
  ],
}
export default TwoColumns
