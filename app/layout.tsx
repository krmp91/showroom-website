import "./global.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import Image from "next/image";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-roseGray">
        <Header />
        <main>
          <div className="flex flex-col items-center">
            <h1 className="text-darkOrange">
              CONTENT WILL COME SOON - Stay tuned!
            </h1>
            <div>
              <Image
                src="/images/content-coming-soon-stay-tuned-projects.jpg"
                alt="design workspace"
                width={949}
                height={595}
              />
            </div>
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
