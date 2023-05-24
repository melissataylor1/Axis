import Link from "next/link";
import Image from "next/image";
import Logonew from "../public/images/axislogo4.png";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <div className="">
        <Image src={Logonew} className="w-36 lg:w-56" alt="example" />
      </div>
    </Link>
  );
}
