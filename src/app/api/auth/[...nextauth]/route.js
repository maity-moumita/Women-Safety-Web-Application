import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(`http://localhost:3000/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          const user = await res.json();

          // Only allow login if email exists in the response
          if (!res.ok || !user?.email) return null;

          // Only return email
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch (err) {
          console.error("❌ Error in authorize:", err);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.email) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.email) {
        session.user = { email: token.email }; // Only keep email
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
