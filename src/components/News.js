import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Button, Row, Col, Container} from 'react-bootstrap';
const News = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await axios.get('/api/news/');

      setNews(newsData.data);
    }
    fetchNews();

}, [])

const newsArr = [];

news.map((newsStory, i) => {
newsArr.push(
  <Col>
  <Card className= 'col' style={{ width: '20rem' }}>
  <Card.Title style={{fontSize: '20px', padding: '6px', fontWeight:'bold', textAlign:'center'}}>{newsStory.title}</Card.Title>
  <Card.Img variant="top" src={newsStory.urlToImage} />
  <Card.Body>
    <Card.Text>
      {newsStory.description}
    </Card.Text>
  </Card.Body>
</Card>
</Col>
)
})

  return (
    <>
    <Container className = 'news'>
    <h1 style={{textAlign:'center'}}>Latest Crypto News</h1>
    <div id='flex-container'>
    <Row>
       {newsArr}
    </Row>
    </div>
    </Container>
    </>
  )
}

export default News
