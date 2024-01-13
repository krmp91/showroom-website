/* eslint-disable react/no-unescaped-entities */
import "./global.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import Image from "next/image";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
</style>;

export const metadata = {
  title: "Louise Ravnløkke",
  description: "Louise Ravnloekke portfolio, CV, Design teacher, PHD ",
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
        <main>
          <Header />
          <div className="flex flex-col items-center">
            {/*<h1 className="text-darkOrange">
              CONTENT WILL COME SOON - Stay tuned!
            </h1>
            <div>
              <Image
                src="/images/content-coming-soon-stay-tuned-projects.jpg"
                alt="design workspace"
                width={949}
                height={595}
              />
            </div>*/}
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
