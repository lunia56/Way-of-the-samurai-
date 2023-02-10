import React from "react";
import styled from "styled-components";


//использование стилей через styled component
const Span = styled.span`
  font-weight: bold;
`
type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

function Paginator({ totalUserCount,
                       pageSize,
                       currentPage,
                       onPageChanged,
                   }: PaginatorPropsType) {

    let pageCount = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (

        <div>
            {pages.map(el => currentPage === el ? <Span>{el}</Span> :
                <span onClick={() => onPageChanged(el)}>{el}</span>)}
        </div>)
}

export default Paginator;