import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemList from '../components/ItemList';
import ContactForm from '../components/ContactForm';
import PostsList from '../components/PostsList';
import Pagination from '../components/Pagination';
import { Box, useTheme } from '@mui/material';

const items = [
  'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
  'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
  'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15',
  'Item 16', 'Item 17', 'Item 18', 'Item 19', 'Item 20',
  'Item 21', 'Item 22', 'Item 23', 'Item 24', 'Item 25',
  'Item 26', 'Item 27', 'Item 28', 'Item 29', 'Item 30',
  'Item 31', 'Item 32', 'Item 33', 'Item 34', 'Item 35',
  'Item 36', 'Item 37', 'Item 38', 'Item 39', 'Item 40',
  'Item 41', 'Item 42', 'Item 43', 'Item 44', 'Item 45',
  'Item 46', 'Item 47', 'Item 48', 'Item 49', 'Item 50',
];

export default function Home() {
  const theme = useTheme();

  return (
    <Box id="home" sx={{ maxWidth: '800px', margin: 'auto', p: 3 }}>
      {[
        { label: 'Soal 1: ItemList', content: <ItemList items={['Apple', 'Banana', 'Cherry']} /> },
        { label: 'Soal 2: ContactForm', content: <ContactForm /> },
        { label: 'Soal 3: API Fetch', content: <PostsList /> },
        { label: 'Soal 4: Pagination', content: <Pagination items={items} itemsPerPage={4} /> },
      ].map((item, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 2,
            borderRadius: 2,
            boxShadow: 3,
            transition: '0.3s',
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            <Typography component="span" sx={{ fontWeight: 'bold' }}>{item.label}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: theme.palette.background.default, p: 3 }}>
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
