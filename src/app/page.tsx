import SignInCardButton from "@/components/SignInCardButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import Image from 'next/image'
import Footer from "@/components/Footer";


export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    return redirect("/homepage");
  }

  return (
    <div>
      <div>
        <Image src='/bg.png' alt='hero-image'
            width={800}
            height={200}
            className='w-full absolute' />
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[320px]">
        <CardHeader>
          <CardTitle>Welcome to UAISEARCH</CardTitle>
          <CardDescription>
            The easiest way to find your fav places!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInCardButton text="Sign In with Google" />
        </CardContent>
      </Card>
      </div>
      <Footer />
    </div>
  )
}

