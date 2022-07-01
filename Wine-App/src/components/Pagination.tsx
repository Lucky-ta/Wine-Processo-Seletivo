import ReactPaginate from 'react-paginate';
import React from 'react';
import { useRouter } from 'next/router';

function Pagination() {
  const path = useRouter();
  const handlePageClick = (event: any) => {
    path.push(`/${event.selected + 1}`);
  };

  return (
    <footer>
      <ReactPaginate
        pageCount={7}
        marginPagesDisplayed={3}
        previousLabel="Anterior"
        nextLabel="Próximo"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
      />
    </footer>
  );
}

export default Pagination;
