import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./dojo-logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Helpdesk Logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Tickets Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
