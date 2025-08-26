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
          const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

          const res = await fetch(`${baseUrl}/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });

          if (!res.ok) {
            // ❌ login failed (400/401)
            return null;
          }

          const user = await res.json();

          // ✅ must return { id, name, email }
          return user?.email
            ? {
                id: user.id,
                name: user.name,
                email: user.email,
              }
            : null;
        } catch (err) {
          console.error("❌ Error in authorize:", err);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 🕒 30 days
    updateAge: 24 * 60 * 60,   // revalidate session every 24h
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 🔐 JWT lasts 30 days
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
        session.user = { email: token.email }; // ✅ only keep email
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
