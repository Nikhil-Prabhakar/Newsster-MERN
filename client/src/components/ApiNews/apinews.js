// CardList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import './cards.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 10,
        height: 560,
        background: '#fff',
        borderRadius: 8,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
        },
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
});

const ApiNews = () => {
    const classes = useStyles();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const apiKey = 'aeca618f4ab645ec9cf5811db6b6b7ed';
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        fetchNewsData();
    }, []);

    const truncate = (text, limit) => {
        if (text && text.length > limit) {
            return `${text.substring(0, limit)}...`;
        }
        return text;
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div></div>
                <div style={{ marginLeft: 'auto' }}>
                    <Button component={Link} to="/" variant="contained" color="primary">
                        Back
                    </Button>
                </div>
            </div>
            <div style={{ display: 'block' }}>
                {articles && articles.length > 0 &&
                    articles.map((article) => (
                        <Button
                            key={article.title}
                            component="a"
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-link"
                        >
                            <Card className={classes.root}>
                                <CardHeader
                                    title={truncate(article.title, 120)}
                                    subheader={article.publishedAt}
                                    className="card-header"
                                />
                                <CardMedia className={classes.media} image={article.urlToImage} title={article.title} />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p" className="card-description">
                                        {truncate(article.description, 120)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Button>
                    ))}
            </div>
        </div>
    );
};

export default ApiNews;