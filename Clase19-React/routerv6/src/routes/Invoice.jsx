import { useNavigate, useParams } from "react-router-dom"
import { getInvoice, deleteInvoice } from "../data/data"
export default function () {
    const params = useParams()
    const navigate = useNavigate()
    const invoice = getInvoice(parseInt(params.invoiceNumber))
    return (
        <div style={{ border: '1px solid gray', padding: '.5em', width: 250 }}>
            <h3>Invoice number: {invoice.number}</h3>
            <p> {invoice.name}</p>
            <p> {invoice.amount}</p>
            <p> {invoice.due}</p>
            <button onClick={() => {
                deleteInvoice(invoice.number)
                navigate("/invoices")
            }}>delete</button>
        </div>
    )
}