const RepositorySchema = {
  name: 'Repository',
  primaryKey: 'id',
  properties: {
    id: {type: 'int', indexed: true},
    name: 'string',
    fullName: 'string',
    description: 'string',
    stars: 'int',
    forks: 'int',
  },
};
export default RepositorySchema;
