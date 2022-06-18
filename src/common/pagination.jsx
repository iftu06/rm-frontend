import React from "react";
import _ from "lodash";

const Pagination = ({itemsCount,pageSize,onPageChange,pageNum}) => {
  const pageCount = Math.ceil(itemsCount/pageSize);
  const pages = _.range(1,pageCount + 1);

  if(pageCount == 1) return null;
 
  return (
    <nav className="mt-4">
      <ul className="pagination">
        {pageNum > 5 ?  
        <li class="page-item"><a class="page-link" href="#">Previous</a></li> : ''}
        
        {pages.map(page => (

          <li key={page} className="page-item">
          <a className="page-link" onClick={() => onPageChange(page)} href="#">
            {page}
            </a>
          </li>

        ))}
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
        
      </ul>
    </nav>
  );
};

export default Pagination;
