export interface IUser {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRate

}
export interface IRate {
  rate: number;
  count: number;
 
}
