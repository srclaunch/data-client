import { Entity, Primitives } from '@srclaunch/types';

import Project from './Project.model';
import User from './User.model';

const Service = {
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
  ],
  name: 'Service',
  relationships: {
    belongsTo: ['Project', 'User'],
  },
} as Entity;

export default Service;
