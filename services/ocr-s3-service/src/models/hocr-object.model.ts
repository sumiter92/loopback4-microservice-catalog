import { model, property } from '@loopback/repository';
import { BaseEntity } from '@sourceloop/core';
@model({
  name: 'hocr_results',
  settings: {
    strict: false,
  },
})
export class HocrObject extends BaseEntity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    name: 'contract_name',
  })
  contractName?: string;

  @property({
    type: 'string',
    required: true,
    name: 'type',
  })
  type?: string;

  @property({
    type: 'number',
    required: true,
    name: 'page_no',
  })
  pageNo?: number;

  @property({
    type: 'string',
    name: 'hocr_data',
  })
  hocrData?: string;

  @property({
    type: 'string',
    name: 'img_data',
  })
  imgData?: string;

  constructor(data?: Partial<HocrObject>) {
    super(data);
  }
}

export interface HocrObjectRelations {
  // describe navigational properties here
}

export type HocrObjectWithRelations = HocrObject & HocrObjectRelations;
