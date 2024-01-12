import React from 'react';
import { Card } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';

const Cards = () => {
 return (
    <div className="columns is-centered">
      <div className="column is-one-third">
        <Card>
          <Card.Content>
            <Card.Title>Inclusivité</Card.Title>
            <Card.Text>Nous promouvons une culture inclusive.</Card.Text>
          </Card.Content>
        </Card>
      </div>

      <div className="column is-one-third">
        <Card>
          <Card.Content>
            <Card.Title>Hot Inclus</Card.Title>
            <Card.Text>Nous célébrons les contributeurs qui œuvrent pour une inclusivité excellente.</Card.Text>
          </Card.Content>
        </Card>
      </div>

      <div className="column is-one-third">
        <Card>
          <Card.Content>
            <Card.Title>Innovation</Card.Title>
            <Card.Text>Nous encouragons et soutenons les innovations technologiques.</Card.Text>
          </Card.Content>
        </Card>
      </div>

      {/* ... */}
    </div>
 );
};

export default Cards;