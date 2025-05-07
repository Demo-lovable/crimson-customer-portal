
// Mock customer data for demonstration

export type Customer = {
  id: number;
  name: string;
  surname: string;
  email: string;
  cardRef: string;
};

export const customers: Customer[] = Array.from({ length: 100 }).map((_, index) => {
  const id = index + 1;
  const firstName = ['John', 'Jane', 'Robert', 'Sarah', 'Michael', 'Emily', 'David', 'Olivia'][Math.floor(Math.random() * 8)];
  const lastName = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia'][Math.floor(Math.random() * 8)];
  return {
    id,
    name: firstName,
    surname: lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
    cardRef: `CARD-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
  };
});
