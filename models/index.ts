export interface ILoginData {
  email: string;
  password: string;
}

interface IAcademy {
  id: number;
  name: string;
  address: string;
  contactPerson: string;
  contactPersonContactNumber: string;
  organizationId: number;
  color: string;
  createdAt: string;
  updatedAt: string;
}

interface IOrganization {
  id: number;
  name: string;
  contactNumber: string;
  address: string;
  isActive: number;
  email: string;
  countryId: number;
  createdAt: string;
  updatedAt: string;
  academies: IAcademy[];
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  address: string;
  contactNumber: string;
  email: string;
  gender: number;
  isDeleted: number;
  isActivated: number;
  organizationId: number;
  countryId: number;
  createdAt: string;
  baseUserProducts: number[];
  organization: IOrganization;
}

export interface IUserResponse {
  userObj: IUser;
  token: string;
}

export interface IAuthInitialState {
  user: IUserResponse | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
