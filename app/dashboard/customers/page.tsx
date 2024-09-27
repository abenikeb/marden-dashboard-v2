import {
  fetchFilteredCustomers,
  fetchCustomers,
  fetchPeoductPostPages,
  fetchCustomerPages,
} from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import Pagination from '@/app/ui/products/pagination';
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

  const totalPages = await fetchCustomerPages(query);

  console.log({
    query,
    searchParams,
    currentPage,
    totalPages,
  });

  const customers = await fetchFilteredCustomers(query, currentPage);

  return (
    <main>
      <CustomersTable customers={customers} />
      <div className="mt-5 flex w-full justify-end">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
