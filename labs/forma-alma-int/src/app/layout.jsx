import "./globals.css";

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Forma & Alma Interiores",
  description: "Design de interiores residencial e comercial em todo o Brasil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <aside></aside>
        {children}
      </body>
    </html>
  );
}
