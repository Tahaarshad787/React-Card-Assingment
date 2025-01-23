import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styles from '../Component/Card.module.css'; 

export default function CardMediaComponent({ title, imageSrc, price, desc, id }) {
  return (
    <Card className={styles.card} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={imageSrc}
        alt={title}
        className={styles.cardImage} 
      />
      <CardContent className={styles.cardContent}>
        <Typography variant="h6" component="div" className={styles.cardTitle}>
          {title}
        </Typography>
        
        <Typography className={styles.cardPrice} variant="h6" >
            <strong>Price:</strong> ${price}
          </Typography>
        <br />
        <Typography variant="body2" className={styles.cardDesc}>
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/details/${id}`} className={styles.cardLink}>
          <Button className={styles.learnMoreBtn} size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

