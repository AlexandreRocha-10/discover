import AboutComp from '@/components/AboutComp';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';


export default async function About() {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }

  return (
    <div>
      <AboutComp />
    </div>
  )
}