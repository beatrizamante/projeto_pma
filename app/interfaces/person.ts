export interface Person {
    id: string;
    user_id: string;
    label: string;
}

export type PersonWithoutId = Omit<Person, 'id'>