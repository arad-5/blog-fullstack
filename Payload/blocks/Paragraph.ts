import { Block } from 'payload'

const ParagraphBlock: Block = {
  slug: 'paragraph',
  imageURL:
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3ZUDxMAo7eOQj0BiAGnQIo74Yr84uKTz3Wh25gZ9yuEI8eQcC',
  labels: {
    singular: 'paragraph',
    plural: 'paragraphs',
  },
  fields: [
    {
      name: 'text',
      label: 'text',
      type: 'richText',
    },
  ],
}
export default ParagraphBlock
