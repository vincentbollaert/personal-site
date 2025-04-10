import Form from '@/app/(routes)/dashboard/invoices/create/create-form'
import Breadcrumbs from '@/app/(routes)/dashboard/invoices/breadcrumbs'
import { fetchCustomers } from '@/app/lib/data'

export default async function Page() {
  const customers = await fetchCustomers()

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  )
}
