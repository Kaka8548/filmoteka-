import Pagination from 'tui-pagination';

export const onPagination = () => {
    const container = document.getElementById('tui-pagination-container');
    const options = { // below default value of options
        totalItems: 500,
        itemsPerPage: 10,
        visiblePages: 5,
        centerAlign: true,
        
   };
   const pagination = new Pagination(container, options);
  
}

onPagination();