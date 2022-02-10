import { Entity, Primitives } from '@srclaunch/types';

import Project from './Project.model';

const Product = {
  fields: [
    {
      label: 'Name',
      name: 'name',
      type: Primitives.String,
    },
    {
      label: 'Description',
      name: 'description',
      type: Primitives.String,
    },
    {
      label: 'Price',
      name: 'price',
      type: Primitives.Float,
    },
    {
      label: 'Tags',
      name: 'tags',
      type: Primitives.Tags,
    },
  ],
  name: 'Product',
  relationships: {
    belongsTo: ['Project'],
  },
} as Entity;

export default Product;
