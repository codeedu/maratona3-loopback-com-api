import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Category} from './category.model';
import {Tag} from './tag.model';

@model()
export class Product extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @belongsTo(() => Category)
  categoryId: number;

  @hasMany(() => Tag)
  tags: Tag[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  category: Category
}

export type ProductWithRelations = Product & ProductRelations;
//categoryId -> foreignKey
// DDD
