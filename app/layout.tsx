import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { Poppins } from "next/font/google";

export const metadata = {
  title: "NULLis | Hamzan Wahyudi",
  description: "Aplikasi pencatatan tugas berbasis website",
  keywords:
    "NULLis, todo app, todo, hamzandev, hamzan wahyudi, reactjs, nextjs, next13, tailwindcss, prisma, postgresql",
};

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`bg-slate-950 backdrop-blur-xl bg-body text-slate-300`}>
        <Navbar />
        <main className="md:py-20 py-8 md:px-0 px-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
