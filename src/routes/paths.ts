// ------------------------------------------------------------

export const paths = {
  auth: {
    login: `/login`,
    register: `/register`,
  },
  landing: {
    root: "/",
    portfolio: "/portfolio",
    about: "/about",
  },
  app: {
    home: "/home",
    pages: "/pages",
    edit: (id: string) => `/edit/${id}`,
    bookings: "/bookings",
  },
};
