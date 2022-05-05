function Users({ el }) {
    return (
        <div className="fw-bold">
            <p>Name: <span className="fw-normal">{el.name}</span></p>
            <p>Email: <span className="fw-normal">{el.email}</span></p>
            <p>Username: <span className="fw-normal">{el.username}</span></p>
            <p>Website: <span className="fw-normal">{el.website}</span></p>
            <hr />
        </div>
    )
}
export default Users