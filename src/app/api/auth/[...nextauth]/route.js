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

          const data = await res.json();

          if (!data.success) return null; // ❌ Login failed

          return {
            id: data.id,
            name: data.name,
            email: data.email,
          };
        } catch (err) {
          console.error("❌ Error in authorize:", err);
          return null;
        }
      }

    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 🕒 30 days (in seconds)
    updateAge: 24 * 60 * 60,   // optional: revalidate session every 24 hours
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 🔐 Ensure JWT lasts 30 days too
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
        session.user = { email: token.email }; // ✅ Only keep email
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
