var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    masonry: {
      columnWidth: 150
    },
    cellsByRow: {
      columnWidth: 300,
      rowHeight: 260
    },
    masonryHorizontal: {
      rowHeight: 130
    },
    cellsByColumn: {
      columnWidth: 300,
      rowHeight: 260
    }
  });
  