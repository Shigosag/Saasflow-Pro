import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Simple hardcoded users (replace with secure lookup if needed)
        const users = [
          { email: "admin@shigosag.com", password: "admin123", role: "admin" },
          { email: "user@example.com", password: "user123", role: "user" },
        ];

        const user = users.find(
          (u) =>
            u.email === credentials?.email && u.password === credentials?.password
        );

        if (user) {
          return { email: user.email, role: user.role };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", // redirect to your login page
  },
  secret: process.env.NEXTAUTH_SECRET || "change_this_secret",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };