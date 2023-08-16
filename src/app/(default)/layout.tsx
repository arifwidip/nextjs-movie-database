import PageHeader from "@/components/pageHeader";

export default function DefaultLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <PageHeader />

      {children}
    </section>
  );
}
