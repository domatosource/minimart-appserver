import { Types as mongooseTypes } from 'mongoose';
import L from '../../common/logger'
import * as HttpStatus from 'http-status-codes';
import * as errors from "../../common/errors";

import { Product, IProductModel } from '../models/product';

export class ExamplesService {

  async all(): Promise<IProductModel[]> {
    console.log("hhhh");
    L.info('fetch all products');

    const docs = await Product
      .find()
      .sort("name")
      .lean()
      .exec() as IProductModel[];

    return docs;
  }

  async byId(id: string): Promise<IProductModel> {
    L.info(`fetch product with id ${id}`);

    if (!mongooseTypes.ObjectId.isValid(id)) throw new errors.HttpError(HttpStatus.BAD_REQUEST);

    const doc = await Product
      .findOne({ _id: id })
      .lean()
      .exec() as IProductModel;

    if (!doc) throw new errors.HttpError(HttpStatus.NOT_FOUND);

    return doc;
  }

  async create(productData: IProductModel): Promise<IProductModel> {
    L.info(`create product with data ${productData}`);

    const example = new Product(productData);

    const doc = await example.save() as IProductModel;

    return doc;
  }

  async patch(id: string, productData: IProductModel): Promise<IProductModel> {
    L.info(`update product with id ${id} with data ${productData}`);

    const doc = await Product
      .findOneAndUpdate({ _id: id }, { $set: productData }, { new: true })
      .lean()
      .exec() as IProductModel;

    return doc;
  }

  async remove(id: string): Promise<void> {
    L.info(`delete product with id ${id}`);

    await Product
      .findOneAndRemove({ _id: id })
      .lean()
      .exec();
  }
}

export default new ExamplesService();