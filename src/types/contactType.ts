export interface IContact {
  name: string;
  phone: string;
  id: string;
}

export type ContactWithoutId = Omit<IContact, 'id'>;
