import { UserButton } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
    {/* <h1>Admin</h1>
    <div className="p-8"> what the fuck </div>
    <Button size="lg" variant="destructive">click me</Button> */}
    <UserButton afterSignOutUrl="/"/>
    </>
  )
}
