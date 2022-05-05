function Comments({ el }) {

    return (
        <div>
            <h4 className="mb-3">{el.name}</h4>
            <span className="border border-1 border-dark rounded p-1"> <span className="bg-dark text-white pe-1"> Comment by </span><span className="text-danger ps-1">{el.email}</span></span>
            <p className="mt-3">{el.body}</p>
            <hr />
        </div>
    )
}

export default Comments