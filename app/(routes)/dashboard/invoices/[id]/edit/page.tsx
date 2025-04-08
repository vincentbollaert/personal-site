import { notFound } from 'next/navigation'
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data'
import Breadcrumbs from '@/app/(routes)/dashboard/invoices/breadcrumbs'
import Form from '@/app/ui/invoices/edit-form'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const [invoice, customers] = await Promise.all([fetchInvoiceById(params.id), fetchCustomers()])

  // TODO: notFound is supposed to take presedence over other errors thrown, like above for nonexistent id
  // but it's not working
  if (!invoice) {
    notFound()
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${params.id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  )
}
