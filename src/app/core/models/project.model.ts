import { IStack } from './tech-stacks.model';

export interface IProject {
  id: string;
  title: string;
  description?: string;
  slug?: string;
  site?: ISite;
  technologies?: IStack;
  roles?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISite {
  id?: string;
  url?: string;
  name?: string;
}

export interface ITechnology {
  category?: string;
  items?: IStack[];
}
