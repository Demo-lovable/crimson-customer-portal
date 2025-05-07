
export interface Customer {
  id: string;
  name: string;
  surname: string;
  email: string;
  cardRef: string;
  token: string;
  uuid: string;
  type: 'wallet' | 'tour' | 'dining';
}

// Sample data for development
export const customers: Customer[] = [
  {
    id: "1",
    name: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    cardRef: "CARD-1234",
    token: "TKN-AD5E2F",
    uuid: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    type: "wallet"
  },
  {
    id: "2",
    name: "Jane",
    surname: "Smith",
    email: "jane.smith@example.com",
    cardRef: "CARD-5678",
    token: "TKN-BF7G3H",
    uuid: "b2c3d4e5-f6g7-8901-bcde-fg2345678901",
    type: "wallet"
  },
  {
    id: "3",
    name: "Michael",
    surname: "Johnson",
    email: "michael.j@example.com",
    cardRef: "CARD-9012",
    token: "TKN-CI8J4K",
    uuid: "c3d4e5f6-g7h8-9012-cdef-gh3456789012",
    type: "tour"
  },
  {
    id: "4",
    name: "Emily",
    surname: "Williams",
    email: "emily.w@example.com",
    cardRef: "CARD-3456",
    token: "TKN-DL9M5N",
    uuid: "d4e5f6g7-h8i9-0123-defg-hi4567890123",
    type: "tour"
  },
  {
    id: "5",
    name: "David",
    surname: "Brown",
    email: "david.b@example.com",
    cardRef: "CARD-7890",
    token: "TKN-EO1P6Q",
    uuid: "e5f6g7h8-i9j0-1234-efgh-ij5678901234",
    type: "dining"
  },
  {
    id: "6",
    name: "Sarah",
    surname: "Miller",
    email: "sarah.m@example.com",
    cardRef: "CARD-1357",
    token: "TKN-FR2S7T",
    uuid: "f6g7h8i9-j0k1-2345-fghi-jk6789012345",
    type: "dining"
  },
  {
    id: "7",
    name: "Robert",
    surname: "Wilson",
    email: "robert.w@example.com",
    cardRef: "CARD-2468",
    token: "TKN-GU3T8V",
    uuid: "g7h8i9j0-k1l2-3456-ghij-kl7890123456",
    type: "wallet"
  },
  {
    id: "8",
    name: "Jennifer",
    surname: "Taylor",
    email: "jennifer.t@example.com",
    cardRef: "CARD-3690",
    token: "TKN-HW4U9X",
    uuid: "h8i9j0k1-l2m3-4567-hijk-lm8901234567",
    type: "tour"
  },
  {
    id: "9",
    name: "James",
    surname: "Anderson",
    email: "james.a@example.com",
    cardRef: "CARD-4812",
    token: "TKN-IY5V0Z",
    uuid: "i9j0k1l2-m3n4-5678-ijkl-mn9012345678",
    type: "dining"
  },
  {
    id: "10",
    name: "Linda",
    surname: "Thomas",
    email: "linda.t@example.com",
    cardRef: "CARD-5913",
    token: "TKN-JA6W1B",
    uuid: "j0k1l2m3-n4o5-6789-jklm-no0123456789",
    type: "wallet"
  },
  {
    id: "11",
    name: "Mark",
    surname: "Jackson",
    email: "mark.j@example.com",
    cardRef: "CARD-7135",
    token: "TKN-KC7X2D",
    uuid: "k1l2m3n4-o5p6-7890-klmn-op1234567890",
    type: "tour"
  },
  {
    id: "12",
    name: "Patricia",
    surname: "White",
    email: "patricia.w@example.com",
    cardRef: "CARD-8246",
    token: "TKN-LE8Y3F",
    uuid: "l2m3n4o5-p6q7-8901-lmno-pq2345678901",
    type: "dining"
  }
];
