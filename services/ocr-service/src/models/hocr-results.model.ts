import {belongsTo, model, property} from '@loopback/repository';
import {BaseEntity} from '@sourceloop/core';
import {Contracts} from './contracts.model';
@model({
  name: 'hocr_results',
  settings: {
    strict: false,
  },
})
export class HocrResults extends BaseEntity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @belongsTo(
    () => Contracts,
    {name: 'contracts'},
    {
      name: 'contract_id',
      required: true,
    },
  )
  contractId: string;

  @property({
    type: 'string',
    required: true,
    name: 'contract_name',
  })
  contractName: string;

  @property({
    type: 'string',
    required: true,
    name: 'type',
  })
  type: string;

  @property({
    type: 'number',
    required: true,
    name: 'page_no',
  })
  pageNo: number;

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

  constructor(data?: Partial<HocrResults>) {
    super(data);
  }
}

export type HocrResultsWithRelations = HocrResults;
