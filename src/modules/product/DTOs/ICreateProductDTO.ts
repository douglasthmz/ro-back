export default interface ICreateProductDTO {
  name: string;
  site: string;
  avatar_link?: string;
  studio: string;
  alias: string;
  control: string;
  exibition_days: number[];
  initial_time: string;
  end_time: string;
}
