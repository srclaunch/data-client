import { Analytics, Entity, Primitives } from '@srclaunch/types';

import Project from './Project.model';

const Event = {
  fields: [
    {
      label: 'Type',
      menu: [
        {
          label: 'Business',
          value: Analytics.BusinessEvent,
        },
        {
          label: 'Engineering',
          value: Analytics.EngineeringEvent,
        },
        {
          label: 'Exception',
          value: Analytics.ExceptionEvent,
        },
        {
          label: 'Marketing',
          value: Analytics.MarketingEvent,
        },
        {
          label: 'Product',
          value: Analytics.ProductEvent,
        },
        {
          label: 'User',
          value: Analytics.UserEvent,
        },
        {
          label: 'User Identified',
          value: Analytics.UserIdentifiedEvent,
        },
        {
          label: 'Web',
          value: Analytics.WebEvent,
        },
        {
          label: 'Web Page Load',
          value: Analytics.WebPageLoadEvent,
        },
        {
          label: 'Web App Route Load',
          value: Analytics.WebAppRouteLoadEvent,
        },
      ],
      name: 'type',
      required: true,
      type: Primitives.Menu,
    },
    {
      label: 'Message',
      name: 'message',
      type: Primitives.String,
    },
    {
      label: 'Created',
      name: 'created_date',
      required: true,
      type: Primitives.Iso8601Date,
    },
    {
      label: 'Exception',
      name: 'exception',
      type: Primitives.Json,
    },
    {
      label: 'Data',
      name: 'data',
      type: Primitives.Json,
    },
    {
      label: 'Tags',
      name: 'tags',
      type: Primitives.Tags,
    },
  ],
  name: 'Event',
  relationships: {
    belongsTo: ['Project'],
  },
} as Entity;

export default Event;
