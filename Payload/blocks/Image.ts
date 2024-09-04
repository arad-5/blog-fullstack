import { Block } from 'payload'

const ImageBlock: Block = {
  slug: 'image',
  imageURL:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVLGzO55RQXipmjnUPh09YUtP-BW3ZTUeAA&s',
  labels: {
    singular: 'blog content image',
    plural: 'blog content images',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
}

export default ImageBlock
