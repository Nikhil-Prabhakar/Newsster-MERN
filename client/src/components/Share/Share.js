import { AlertTitle } from '@material-ui/lab';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Share = () => {
    const [news, setNews] = useState('');
    const [Title, setTitle] = useState('');
    const [reporterEmail, setReporterEmail] = useState('');

    const handleNewsChange = (e) => {
        setNews(e.target.value);
    };
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleReporterEmailChange = (e) => {
        setReporterEmail(e.target.value);
    };

    const handleSubscribe = () => {
        const subject = encodeURIComponent(`News Submission: ${Title}`);
        const body = encodeURIComponent(`Submitted News: ${news}\nReporter's Email: ${reporterEmail}`);

        const mailtoLink = `mailto:piyushpatelcodes@gmail.com?subject=${subject}&body=${body}`;

        // Open the user's default email client
        window.location.href = mailtoLink;

        // Optionally, you can reset the form fields
        setTitle('');
        setNews('');
        setReporterEmail('');
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
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={{ margin: 0 }}>Submit News and Reporter's Email</h2>
                    <p style={{ margin: 0 }}>Share the latest news with us! Enter the details below:</p>
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="news">Title:</label>
                    <textarea
                        id="news"
                        value={Title}
                        onChange={handleTitleChange}
                        placeholder="Enter News Title"
                        style={styles.title}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="news">News:</label>
                    <textarea
                        id="news"
                        value={news}
                        onChange={handleNewsChange}
                        placeholder="Enter the news"
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="reporterEmail">Your Email:</label>
                    <input
                        type="email"
                        id="reporterEmail"
                        value={reporterEmail}
                        onChange={handleReporterEmailChange}
                        placeholder="Enter your email"
                        style={styles.input}
                    />
                </div>
                <button onClick={handleSubscribe} style={styles.button}>
                    Submit
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#f7f7f7',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        width: '400px',
        margin: 'auto',
    },
    header: {
        backgroundColor: '#4285f4',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
    },
    formGroup: {
        padding: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    title: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    button: {
        backgroundColor: '#4285f4',
        color: '#fff',
        padding: '12px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        width: '100%',
    },
};

export default Share;
