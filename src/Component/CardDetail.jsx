import React from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../../Data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from '../Component/CardDetail.module.css';

function CardDetail() {
  const { id } = useParams();
  const product = Data.find((e) => e.id === +id); 

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className={styles.cardDetailContainer}>
      <Card className={styles.card}>
        <CardMedia
          className={styles.cardMedia}
          image={product.image}
          title={product.title}
        />
        <CardContent className={styles.cardContent}>
          <Typography className={styles.cardTitle} gutterBottom component="div">
            {product.title}
          </Typography>
          <Typography className={styles.cardPrice}>
            <strong>Price:</strong> ${product.price}
          </Typography>
          <Typography className={styles.cardDescription}>
            <strong>Description:</strong> {product.description}
          </Typography>
          <Typography className={styles.cardCategory}>
            <strong>Category:</strong> {product.category}
          </Typography>
          <Typography className={styles.cardRating}>
            <strong>Rating:</strong> {product.rating.rate} / 5 (Based on {product.rating.count} reviews)
          </Typography>
        </CardContent>
        <Button 
          className={styles.cardButton} 
          size="large" 
          variant="contained" 
          onClick={() => window.history.back()}>
          Go Back
        </Button>
      </Card>
    </div>
  );
}

export default CardDetail;