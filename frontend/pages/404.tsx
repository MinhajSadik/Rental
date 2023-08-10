import { HeadTag } from "@/components/common";
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function ErrorPage() {

  const router = useRouter();

  useEffect(() => {
    const redirectTimeOut = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(redirectTimeOut);
  }, []);

  return (
    <>
      <HeadTag
        title="404 - Page Not Found"
      />
      <div className="flex flex-col items-center justify-center h-screen space-y-6">
        <div className="space-y-2">
          <h1 className="text-9xl font-semibold text-gray-200 text-center">
            404
          </h1>
          <p className="text-secondary/60 font-semibold text-xl text-center">
            Page not found
          </p>
        </div>
        <Link href="/" className="bg-primary px-4 py-2 text-white rounded-[5px] font-medium hover:bg-primaryHov">
          Back to Home
        </Link>
      </div>    
    </>
  )
}