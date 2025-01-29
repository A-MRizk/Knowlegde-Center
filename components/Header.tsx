import Link from "next/link";
import Image from "next/image";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <div className="flex items-center gap-5">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
        </Link>
        <span className="hidden sm:inline text-white text-2xl">
          Knowledge Center
        </span>
      </div>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
            className="mb-10"
          >
            <Button>Logout</Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
