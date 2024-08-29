import { fetchFilteredCustomers, fetchCustomers, fetchPeoductPostPages } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import Pagination from '@/app/ui/invoices/pagination';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchPeoductPostPages(query);
  return (
    <main>
      <CustomersTable query={query} currentPage={currentPage}  />
       <div className="mt-5 flex w-full justify-end">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
