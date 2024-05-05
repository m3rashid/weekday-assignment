export type Nullable<T> = T | null;

export type Job = {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: Nullable<number>;
  minJdSalary: Nullable<number>;
  salaryCurrencyCode: string;
  location: string;
  minExp: Nullable<number>;
  maxExp: Nullable<number>;
  jobRole: string;
  companyName: string;
  logoUrl: string;
};

export type Action<Type, Payload = void> = Payload extends void
  ? { readonly type: Type }
  : { readonly type: Type; readonly payload: Payload };

export type Dispatch<ActionType> = (action: ActionType) => void;

export type GetState<StateType> = () => StateType;
