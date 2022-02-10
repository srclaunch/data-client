import { Entity, Primitives } from '@srclaunch/types';

import User from './User.model';

const PaymentMethod = {
  fields: [
    {
      label: 'Name',
      name: 'name',
      type: Primitives.String,
    },
    {
      label: 'Number',
      name: 'masked_number',
      type: Primitives.String,
    },
    {
      label: 'Created',
      name: 'created_date',
      required: true,
      type: Primitives.Iso8601Date,
    },
    {
      label: 'Default',
      name: 'default',
      type: Primitives.Boolean,
    },
    {
      label: 'Type',
      menu: [
        {
          label: 'American Express',
          value: 'american_express',
        },
        {
          label: 'Discover',
          value: 'discover',
        },
        {
          label: 'Mastercard',
          value: 'mastercard',
        },
        {
          label: 'Visa',
          value: 'visa',
        },
      ],
      name: 'type',
      type: Primitives.Menu,
    },
  ],
  name: 'PaymentMethod',
  relationships: {
    belongsTo: ['User'],
  },
} as Entity;

export default PaymentMethod;
