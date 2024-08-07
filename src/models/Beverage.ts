export default class Beverage {
  id: number;
  assetPath: string;
  name: string;
  description: string;
  currency: string;
  price: number;
  labels: string[];

  constructor(json: any) {
    this.id = json.id;
    this.assetPath = json.assetPath;
    this.name = json.name;
    this.description = json.description;
    this.currency = json.currency;
    this.price = json.price;
    this.labels = json.labels;
  }
}
