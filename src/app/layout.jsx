import Header from "@/components/Header";
import "./globals.css";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Alert Angel",
  description: "Women Safety Web Application",
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </Provider>
  );
}
