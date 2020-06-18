import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Product} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Product,
  pattern: 'CrudRest',
  dataSource: 'mysql',
  basePath: '/products',
};
module.exports = config;
