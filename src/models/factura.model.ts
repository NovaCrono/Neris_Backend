import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Factura extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Producto: string;

  @property({
    type: 'number',
    required: true,
  })
  c_u: number;

  @property({
    type: 'number',
    required: true,
  })
  Cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  Total: number;

  @property({
    type: 'string',
    required: true,
  })
  Nit_Persona: string;

  @property({
    type: 'string',
    required: true,
  })
  Fecha: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
