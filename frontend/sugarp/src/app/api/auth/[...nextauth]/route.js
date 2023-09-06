import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "******",
        },
      },
      async authorize(credentials, req) {
        if (
          credentials.username === "develpz" &&
          credentials.password === "develpz#060680"
        ) {
          const user = { id: 1, name: "John Smith", email: "jsmith@example" };
          return user;
        }
        return null;
        // You can also return a Promise for async results
        // return Promise.resolve(null)
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user, account, session, profile }) => {
      if (user) token.user = user;
      return token;
    },
    session: ({ session, token, user }) => {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
