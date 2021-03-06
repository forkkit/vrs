/**
 * Created by shu on 6/5/2017.
 */

import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'

// SCHEMAS
import user from './user'
import model from './model'
import viewer from './viewer'
import models from './models'

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: user.query,
    model: model.query,
    viewer: viewer.query,
    models: models.query
  })
})

export default new GraphQLSchema({
  query,
  types: [ user.type, model.type, models.type ]
})
