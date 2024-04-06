import "./global.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-red-500">{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
