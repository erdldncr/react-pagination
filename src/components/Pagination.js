import React from 'react'

export default function Pagination({ handleCurrentPage,postsPerPage,totalPosts}) {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)

    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(pageNumber=>(
                    <li
                    key={pageNumber}
                    className='page-item'
                    onClick={()=>handleCurrentPage(pageNumber)}
                    >   
                        <a href="!#" className='page-link'>
                            {pageNumber}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
