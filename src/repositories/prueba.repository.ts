import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Prueba, PruebaRelations} from '../models';

export class PruebaRepository extends DefaultCrudRepository<
  Prueba,
  typeof Prueba.prototype.id,
  PruebaRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Prueba, dataSource);
  }
}
