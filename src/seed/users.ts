type UserType = {
  name: string;
  phone: string;
  email: string;
  password: string;
  admin: boolean;
};

const users: UserType[] = [
  {
    name: "John",
    phone: "9860777906",
    email: "john@gmail.com",
    password: "$2b$10$6sdkothEwAguhA0FytsGF.gcWPmTDB5hosif6rGX5FFJK8PdBgRHu",
    admin: true,
  },
  {
    name: "Liza",
    phone: "9860777907",
    email: "liza@gmail.com",
    password: "$2b$10$70yLw0dPhAD0py/iiGUInO7kklGUmbMfa5BmXKGCXEID1ufTsqSQ6",
    admin: false,
  },
  {
    name: "Ben",
    phone: "9860777908",
    email: "ben@gmail.com",
    password: "$2b$10$1DsQFSqUs3ufyDDRBd9wYuU5i9ihbnYR4GCYJsI3IzGXamwFWnr4S",
    admin: false,
  },
];

export default users;
