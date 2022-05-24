import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom"
import { getInvoices } from "../data/data"

function QueryNavLink({ to, ...props }) {
    const location = useLocation()
    return <NavLink to={to + location.search}{...props} />
}

export default function Invoices() {
    const invoices = getInvoices()
    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <>
            <h2>Invoices</h2>
            <div style={{ display: 'flex' }}>
                <div style={{ borderRight: "1px solid", padding: '1em' }}>
                    <input
                        value={searchParams.get("filter") || ""}
                        onChange={(e) => {
                            let filter = e.target.value;
                            if (filter) {
                                setSearchParams({ filter })
                            } else {
                                setSearchParams({})
                            }
                        }}
                    />
                    {invoices
                        .filter((invoice) => {
                            const filter = searchParams.get("filter")
                            if (!filter) return true;
                            const name = invoice.name.toLowerCase();
                            return name.startsWith(filter.toLowerCase())
                        })
                        .map((invoice) => (
                            <QueryNavLink
                                style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        margin: "1em 0",
                                        color: isActive ? "tomato" : ""
                                    }
                                }

                                }
                                to={`/invoices/${invoice.number}`}
                                key={invoice.number}
                            >{invoice.name}</QueryNavLink>
                        ))}
                </div>
                <Outlet></Outlet>
            </div>
        </>
    );
}