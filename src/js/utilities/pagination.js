import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { fetchData } from './fetchData';
import { onRenderGallery } from './onRenderGallery';

let pageNum;
let totalItemsNum;

export default function Pagination(data, queryType, queryWord) {
  pageNum = data.page;
  totalItemsNum = data.total_pages;
  let pages = 5;
  if (window.screen.width >= 768) {
    pages = 9;
  }

  const container = document.getElementById('tui-pagination-container');

  const options = {
    // below default value of options
    totalItems: totalItemsNum,
    itemsPerPage: 20,
    visiblePages: pages,
    page: pageNum,
    centerAlign: true,
    template: {
      page: '<a href="#" class="page-btn">{{page}}</a>',
      currentPage: '<a href="#" class="page-btn is-selected">{{page}}</a>',
      moveButton: '<a href="#" class="page-btn page-{{type}}"></a>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip visually-hidden" id="point-{{type}}">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(container, options);
  if (window.screen.width >= 768) {
    const nextEllipEl = document.querySelector('#point-next');
    nextEllipEl.classList.remove('visually-hidden');
  }
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    if (queryType === 'TRENDING') {
      fetchData('TRENDING', { page: currentPage }).then(res => {
        onRenderGallery(res.data.results);
      });
      return;
    } else if (queryType === 'SEARCH_MOVIES') {
      fetchData('SEARCH_MOVIES', { page: currentPage, query: queryWord }).then(
        res => {
          onRenderGallery(res.data.results);
          return;
        }
      );
    }
  });
}
