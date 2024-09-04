import { Block } from 'payload'
const ListBlock: Block = {
  slug: 'list',
  imageURL:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrbgKgCoFitDArBFN5aIaqn74r1kuj5BbaTA&s',
  labels: {
    singular: 'list',
    plural: 'lists',
  },
  fields: [
    {
      name: 'type',
      label: 'list type',
      type: 'select',
      options: ['ordered', 'unordered'],
      defaultValue: 'ordered',
    },
    {
      name: 'items',
      label: 'items',
      type: 'richText',
      required: true,
    },
  ],
}
export default ListBlock
