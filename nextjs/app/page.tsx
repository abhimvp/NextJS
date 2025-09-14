import Hello from "@/app/components/hello";

export default function Home() {
  console.log("who am i -> Server component? - yes you're by default");
  return (
    <>
      <h1 className="text-4xl">Welcome to Next.js Everyone</h1>
      <Hello />
    </>
  );
}
