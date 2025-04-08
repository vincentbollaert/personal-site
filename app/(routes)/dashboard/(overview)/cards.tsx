import { fetchCardData } from '@/app/lib/data'
import { Card } from '../../../ui/components/card/card'

export async function Cards() {
  const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData()

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card title="Total Customers" value={numberOfCustomers} type="customers" />
    </>
  )
}
