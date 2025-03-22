import React, { useState } from 'react';
import { Pagination as MuiPagination, Button, Box, List, ListItem, ListItemText, Typography } from '@mui/material';

interface PaginationProps {
  items: string[];
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageChange = (_: any, pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box
      sx={{
        p: 2,
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <List>
        {getCurrentItems().map((item, index) => (
          <ListItem key={index} sx={{ borderBottom: '1px solid #ddd' }}>
            <ListItemText
              primary={<Typography>{item}</Typography>}
            />
          </ListItem>
        ))}
      </List>

      <Box display="flex" justifyContent="center" alignItems="center" marginTop={2}>
        <Button
          variant="contained"
          onClick={() => handlePageChange(null, currentPage - 1)}
          disabled={currentPage === 1}
          sx={{ mr: 2 }}
        >
          Previous
        </Button>

        <MuiPagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          siblingCount={1}
          boundaryCount={1}
        />

        <Button
          variant="contained"
          onClick={() => handlePageChange(null, currentPage + 1)}
          disabled={currentPage === totalPages}
          sx={{ ml: 2 }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Pagination;
