import { Entity, Primitives } from '@srclaunch/types';

const Project = {
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
      label: 'Github Repo',
      name: 'github_repository',
      type: Primitives.String,
    },
  ],
  name: 'Project',
  relationships: {
    belongsTo: ['User'],
    hasMany: ['Application', 'Event', 'Service'],
  },
} as Entity;

export default Project;
