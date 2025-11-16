import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vigilante 24h - Sua Segurança no Trânsito",
  description: "Grave automaticamente tudo que acontece no trânsito com câmeras frontal e traseira. Proteja-se contra fraudes de seguro e tenha provas em caso de acidentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
