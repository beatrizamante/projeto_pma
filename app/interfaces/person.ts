export interface Person {
    id: string;
    user_id: string;
    name: string;
}

export type PersonWithoutId = Omit<Person, 'id'>