import ReactPaginate from 'react-paginate';
import React from 'react';
import { useRouter } from 'next/router';
import StyledPaginateContainer from '.';
import { IProps } from '../../interfaces/stylesInterfaces/Pagination';

function Pagination({ props }: IProps) {
  const path = useRouter();
  const handlePageClick = (event: any) => {
    path.push(`/${event.selected + 1}`);
  };

  return (
    <StyledPaginateContainer>
      <ReactPaginate
        pageCount={7}
        marginPagesDisplayed={3}
        previousLabel="Anterior"
        nextLabel="Próximo"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
        containerClassName={props.isCardsRender ? 'isRender' : 'container'}
        previousLinkClassName="prev"
        nextClassName="next"
        pageLinkClassName="link"
      />
    </StyledPaginateContainer>
  );
}

export default Pagination;
