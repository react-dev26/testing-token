import React from 'react';

import Tab from 'components/Section4/Tab';
import person1 from 'utils/images/person1.png';
import person2 from 'utils/images/person2.png';
import person3 from 'utils/images/person3.png';
import styles from './styles';

function Tab1() {
  const items = [
    { id: 1, name: "Ilana Raines", content: "Ilana got into computer science as a pre-teen, inspired by her mom who was already a software engineer for big banks. By college the tech boom had gone bust, but the implications of the web on software delivery had stuck with her in a big way. In the following years she enjoyed the San Francisco tech scene developing web apps for clients and then full time for bigger companies like CBS. Her fascination with block chain came with the recognition that it would be the stepping stone to the next paradigm shift for software delivery and she was hooked. Secure, transparent, and distributed computing. Now, the good part of 2017 she is delving deeper into crypto currency and blockchain software development with her teams new product, TokenAI.", img: person2 },
    { id: 2, name: "Sam Bensdadt", content: "Sam has over 20 years of experience in the software industry both in development and management. Sam was the founder of an eCommerce and ERP software startup, developing complex systems for large financial institutions and other industry leaders. Sam is also an experienced app developer, launching over 35 apps with millions of downloads and developing apps for business clients. AI and crypto are the next big thing and at TokenAI, Sam is working on ways to combine the two to bring this amazing tech to the masses.", img: person1 },
    { id: 3, name: "Lawrence Gregory", content: "Lawrence Gregory has been in the crypto currency space since 2011 after being introduced to it by a tech geek friend. After surviving the great recession of 2008, losing his house and almost losing everything else, Lawrence saw the big picture of what the promise of crypto currency could do to transform the way regular people take control of their personal finances, including completely transforming the way we think about money.", img: person3 },
  ];
  return (
    <ul style={styles.container}>
      {
        items.map(item =>
          <Tab key={item.id} name={item.name} content={item.content} img={item.img} />,
        )
      }
    </ul>
  );
}

export default Tab1;
