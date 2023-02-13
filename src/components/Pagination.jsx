import { useState } from "react"

const Pagination = ({totalPage, limit, page, setPage})=>{
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);
    return(
      <div>
        <button type="button">이전</button>
        <button type="button">다음</button>
      </div>
    )
}

export default Pagination