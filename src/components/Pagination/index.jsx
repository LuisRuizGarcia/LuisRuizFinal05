import React from 'react'

const Pagination = (props) => {
    const {page, setPage} = props;
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-evenly">
                <li className="page-item">
                    <button className="page-link" onClick={() =>setPage(page - 1) }>
                        Anterior</button>
                </li>
                <li className="page-item">
                    <button className="page-link">
                        {page}
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={() =>setPage(page +1) }>
                        Siguiente
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination