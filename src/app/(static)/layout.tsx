import React from "react";
import Image from "next/image";
import Link from "next/link";
// class name for div with full width and height 75px background color secondary
const headerClassName = "bg-secondary h-16";

// create static navbar of full height and 75px width

const Header: React.FC = () => {
  return (
    <header className="bg-white px-2 py-0.5 w-full">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div className="header__leftside_content">
          <div className="">
            <Image src="/awes-logo.png" alt="Logo" width={207} height={61} />
          </div>
        </div>
        <div className="header__rightside_content flex flex-row gap-4  bg-purple-500">
          <nav className="flex flex-row gap-6 px-6 py-3">
            <Link href={'/about-us'}>About Us</Link>
            <Link href={'/our-services'}>Our Services</Link>
            <Link href={'/contact-us'}>Contact Us</Link>
          </nav>
          <div className="px-6 py-3 bg-accent1">
            <Link 
              href={'/apply'} 
              className="text-white font-bold"
            >Apply Now</Link>
          </div>
        </div>
      </div>
    </header>
      // {/* 
      // <div className="header__leftside flex justify-start bg-yellow-300">
        
      // </div>
      // <div className="header__rightside flex flex-row justify-between items-center space-x-4 bg-purple-500">
      //   <nav className="flex space-x-9">
      //     <a href="/" className="hover:text-gray-400">Home</a>
      //     <a href="/services" className="hover:text-gray-400">Our Services</a>
      //     <a href="/about" className="hover:text-gray-400">About Us</a>
      //   </nav>
      //   <div>
      //     <a href="/apply" className="bg-accent1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      //       Apply Now
      //     </a>
      //   </div>
      // </div> */}
  );
}

const Footer: React.FC = () => {
  // must stay at the bottom of the page with full width and height 75px background color accent1

  return (
    <footer className="bg-accent1 h-16">
      <div className="flex justify-center items-center">
        <p className="text-white">© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
}




export default function StaticPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Header />
      <main className="main container flex-grow">
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}