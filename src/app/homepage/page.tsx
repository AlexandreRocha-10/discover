import PlaceComp from '@/components/PlaceComp';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';


export default async function Homepage() {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }

  return (
    <div>
      <PlaceComp />
    </div>
  )
}
