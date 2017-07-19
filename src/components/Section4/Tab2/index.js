import React from 'react';

import Tab from 'components/Section4/Tab';
import person1 from 'utils/images/person4.png';
import person2 from 'utils/images/person5.png';
import styles from './styles';

function Tab2() {
  const items = [
    { id: 1, name: "Nick Coogan", content: "Nick serves on the Board of Directors of TokenAI in an advisory capacity. Out of the past 14 years is technology, Nick has worked in Big Data and Analytics for seven, where he led teams focused on growth in the intelligence/defense space and later the commercial sector. Nick later transitioned to running large product teams with a focus on cloud strategy. Previously, Nick worked supporting the intelligence community, specializing in leveraging technology in innovative ways to solve complex human-centric problems. ", img: person1 },
    { id: 2, name: "Joel Wells", content: "Joel Wells is a software veteran with more than 20 years experience focusing on eCommerce and security. He has been involved with crypto currencies since 2011. Joe leads a software team building payment processing solutions and is excited for what decentralized financial networks and smart contracts can do. In his spare time he runs a recording studio, writes poetry, and plays tabletop games. ", img: person2 },
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

export default Tab2;
