import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IProductModel extends mongoose.Document {
  name: string;
  price: Number;
};

const schema = new Schema({
  name: String,
  price: Number
});

export const Product = mongoose.model<IProductModel>("Product", schema);