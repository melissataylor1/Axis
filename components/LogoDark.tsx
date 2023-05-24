import Link from "next/link";
import Image from "next/image";
import Logo2 from "../public/images/logo_dark.png";

export default function LogoDark() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <div className="">
        <Image src={Logo2} className="w-36 lg:w-56" alt="example" />
      </div>
    </Link>
  );
}
