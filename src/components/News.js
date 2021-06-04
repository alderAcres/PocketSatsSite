import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Button, Row, Col, Container} from 'react-bootstrap';
const News = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await axios.get('/api/news/');
      console.log(newsData)
      setNews(newsData.data);
    }
    fetchNews();

}, [])

const newsArr = [];

news.map((newsStory, i) => {
  if(newsStory.urlToImage){
    if(i % 3 === 0) {
      newsArr.push(
        <Col>
        <Card key = {i} className= 'col' style={{border: '1px solid black', padding: '1rem', width: '33rem', height: 'auto' }}>
        <Card.Title style={{fontSize: '20px', padding: '6px', fontWeight:'bold', textAlign:'center'}}>{newsStory.title}</Card.Title>
        <a href={newsStory.url} target="_blank"><Card.Img variant="top" src={newsStory.urlToImage} /></a>
        <Card.Body>
          <Card.Text>
            {newsStory.description}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      )
    } else 
newsArr.push(
  <Col>
  <Card key = {i} className= 'col' style={{border: '1px solid black', padding: '1rem',width: '20rem' }}>
  <Card.Title style={{fontSize: '20px', padding: '6px', fontWeight:'bold', textAlign:'center'}}>{newsStory.title}</Card.Title>
  <a href={newsStory.url} target="_blank"><Card.Img variant="top" src={newsStory.urlToImage} /></a>
  <Card.Body>
    <Card.Text>
      {newsStory.description}
    </Card.Text>
  </Card.Body>
</Card>
</Col>
)
  }
})

  return (
    <div className = 'news'>
    <h1 style={{textAlign:'center'}}>Latest Crypto News</h1>
    <div id='flex-container'>
    <Row>
       {newsArr}
    </Row>
    </div>
    </div>
  )
}

export default News
