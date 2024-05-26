import "./globals.css";

export const metadata = {
  title: "Bloom",
  description: "Front-End Task Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
