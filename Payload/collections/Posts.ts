import { CollectionConfig } from 'payload'
import HeadingBlock from '../../Payload/blocks/Heading'
import ImageBlock from '../../Payload/blocks/Image'
import ListBlock from '../../Payload/blocks/List'
import ParagraphBlock from '../../Payload/blocks/Paragraph'
import QuoteBlock from '../../Payload/blocks/Quote'
const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      type: 'tabs',
      tabs: [
        // required
        {
          label: 'Hero', // required

          description: 'This will appear within the tab above the fields.',
          fields: [
            {
              name: 'heroImage',
              label: 'Hero Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'heroTitle',
              label: 'hero title',
              type: 'text',
              required: true,
              unique: true,
            },
            {
              name: 'slug',
              label: 'Slug',
              type: 'text',
              required: true,
              unique: true,
            },
            {
              name: 'tags',
              label: 'Tags',
              minRows: 1,
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                },
              ],
            },

            {
              name: 'name',
              label: 'Name',
              type: 'text',
              required: true,
              unique: true,
            },
          ],
        },
        {
          label: 'Content', // required
          description: 'This will appear within the tab above the fields.',
          fields: [
            {
              name: 'sections',
              type: 'array',
              fields: [
                {
                  name: 'blocks',
                  type: 'blocks',
                  blocks: [HeadingBlock, ParagraphBlock, ListBlock, ImageBlock, QuoteBlock],
                },
              ],
            },
          ],
        },
        {
          name: 'Seo',
          label: 'SEO', // required
          interfaceName: 'TabTwo', // optional (`name` must be present)
          fields: [
            {
              name: 'pageSeoTitle',
              label: 'page seo title',
              type: 'text',
              required: true,
              unique: true,
            },
            {
              name: 'metaDescription',
              label: 'meta description',
              type: 'text',
              required: true,
              unique: true,
            },
            {
              name: 'metaKeywords',
              label: 'meta keywords',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  label: 'keyword',
                  type: 'text',
                },
              ],
            },
            {
              name: 'metaOgType',
              label: 'meta og type',
              type: 'select',
              options: ['article', 'website'],
              defaultValue: 'article',
            },
            {
              name: 'metaOgLocale',
              label: 'meta og locale (language)',
              type: 'select',
              options: ['fa_IR', 'en_US', 'de_DE'],
              defaultValue: 'fa_IR',
            },
            {
              name: 'metaOgTitle',
              label: 'meta og title',
              type: 'text',
            },
            {
              name: 'metaOgDescription',
              label: 'meta og description',
              type: 'text',
            },
            {
              name: 'metaOgImageUrl',
              label: 'meta og image url',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'metaOgImageAlt',
              label: 'meta og image alt',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'metaTwitterTitle',
              label: 'meta twitter title',
              type: 'text',
            },
            {
              name: 'metaTwitterDescription',
              label: 'meta twitter Description',
              type: 'text',
            },
            {
              name: 'metaTwitterCardType',
              label: 'meta twitter card type',
              type: 'select',
              options: ['summary', 'summary_large_image', 'app', 'player'],
              defaultValue: 'summary_large_image',
            },
            {
              name: 'metaTwitterImageUrl',
              label: 'meta twitter Image url',
              type: 'text',
            },
            {
              name: 'metaTwitterImage',
              label: 'meta twitter Image alt',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
export default Posts
