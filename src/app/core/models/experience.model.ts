export interface IExpTechStack {
  url?: string;
  name: string;
  icon?: string;
}

export interface ITimePeriod {
  startDate: string;
  endDate: string;
}

export interface IExpCompany {
  name: string;
  website?: string;
  address: string;
}

export interface ITimelineData {
  timePeriod: ITimePeriod;
  company: IExpCompany;
  job: string;
  techStacks: IExpTechStack[];
  description: string;
}
