import { Entity, Primitives } from '@srclaunch/types';

import Product from './Product.model';
import Project from './Project.model';
import User from './User.model';

const Subscription = {
  fields: [
    {
      label: 'Status',
      menu: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Expired',
          value: 'expired',
        },
        {
          label: 'Canceled',
          value: 'canceled',
        },
      ],
      name: 'active',
      type: Primitives.Menu,
    },
    {
      label: 'Cancel date',
      name: 'cancel_date',
      type: Primitives.Iso8601Date,
    },
    {
      label: 'Expiration date',
      name: 'expiration_date',
      type: Primitives.Iso8601Date,
    },
    {
      label: 'Renewal date',
      name: 'renewal_date',
      type: Primitives.Iso8601Date,
    },
    {
      label: 'Start date',
      name: 'start_date',
      type: Primitives.Iso8601Date,
    },
  ],
  name: 'Subscription',
  relationships: {
    belongsTo: ['Project', 'User'],
    hasOne: ['Product'],
  },
} as Entity;

export default Subscription;
