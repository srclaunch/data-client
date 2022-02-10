import { Entity, Primitives } from '@srclaunch/types';

import Project from './Project.model';
import User from './User.model';

const Application = {
  fields: [
    {
      label: 'Name',
      name: 'name',
      required: true,
      type: Primitives.String,
    },
    {
      label: 'Description',
      name: 'description',
      required: true,
      type: Primitives.String,
    },
    {
      defaultValue: false,
      label: 'Enabled',
      name: 'enabled',
      type: Primitives.Boolean,
    },
    {
      label: 'Deployed Version',
      name: 'deployed_version',
      type: Primitives.String,
    },
    {
      label: 'Type',
      menu: [
        {
          label: 'Web Application',
          value: 'web_application',
        },
        {
          label: 'Mobile App',
          value: 'mobile_app',
        },
        {
          label: 'Web site',
          value: 'web_site',
        },
      ],
      name: 'type',
      type: Primitives.Menu,
    },
  ],
  name: 'Application',
  relationships: {
    belongsTo: ['Project', 'User'],
  },
} as Entity;

export default Application;
