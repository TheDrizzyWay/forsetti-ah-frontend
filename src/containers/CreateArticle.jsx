import React from 'react';
import { Container } from 'reactstrap';
import { ArticleFormComponent } from '../components/ArticleForm';

const CreateArticlePage = () => (
  <Container style={{ minHeight: '600px' }}>
    <ArticleFormComponent />
  </Container>
);

export default CreateArticlePage;
