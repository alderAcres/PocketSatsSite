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
      newsArr.push(
        <Col>
        <Card key = {i} className= 'col' style={{border: '1px solid black' }}>
        <Card.Title style={{fontSize: '2vw', padding: '.3rem', fontWeight:'bold', textAlign:'center'}}>{newsStory.title}</Card.Title>
        <a href={newsStory.url} target="_blank"><Card.Img variant="top" src={newsStory.urlToImage} /></a>
        <Card.Body>
          <Card.Text style={{fontSize:'1.6vw'}}>
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
    <h1 style={{textAlign:'center', fontSize: '3vw'}}>Daily Crypto News</h1>
    <div id='flex-container'>
    <Row>
       {newsArr}
    </Row>
    </div>
    </div>
  )
}

export default News
