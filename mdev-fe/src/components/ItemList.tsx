import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface ItemListProps {
  items: string[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const [itemList, setItemList] = useState<string[]>(items);

  const removeItem = (index: number) => {
    const newItems = [...itemList];
    newItems.splice(index, 1);
    setItemList(newItems);
  };

  return (
    <div>
      <Typography variant="h6">
        Item List
      </Typography>
      <List>
        {itemList.map((item, index) => (
          <ListItem
            key={index}
            sx={{ borderBottom: '1px solid #ddd' }}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => removeItem(index)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={
                <Typography>
                  {item}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ItemList;
