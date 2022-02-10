import { Entity, Primitives } from '@srclaunch/types';

import Application from './Application.model';
import PaymentMethod from './PaymentMethod.model';
import Project from './Project.model';
import Service from './Service.model';
import Subscription from './Subscription.model';

const User = {
  description: 'A user that signs into the application',
  fields: [
    {
      label: 'Cognito ID',
      name: 'cognito_id',
      type: Primitives.String,
    },
    {
      defaultValue: {
        accessibility: {
          outlines: false,
        },
        locale: {
          currency: 'USD',
          language: 'en-us',
        },
        ui: {
          getting_started_card_visible: true,
          theme: 'light',
        },
      },
      label: 'Preferences',
      name: 'preferences',
      type: Primitives.Json,
    },
    {
      defaultValue: false,
      label: 'Premium Membership',
      name: 'premium_membership_active',
      type: Primitives.Boolean,
    },
    {
      label: 'Stripe Customer ID',
      name: 'stripe_customer_id',
      type: Primitives.String,
    },
  ],
  name: 'User',
  relationships: {
    hasMany: [
      'Application',
      'PaymentMethod',
      'Project',
      'Service',
      'Subscription',
    ],
  },
} as Entity;

export default User;
