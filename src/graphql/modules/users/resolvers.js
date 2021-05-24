import User from '../../../models/User';

export default {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: (_, { data }) => User.create(data),
    updateUser: (_, { id, data }) => User.findOneAndUpdate(id, data),
    deleteUser: (_, { id }) => !!(await User.findOneAndDelete(id)),
  },
};