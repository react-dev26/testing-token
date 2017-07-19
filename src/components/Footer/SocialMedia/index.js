import React from 'react';
import { Link } from 'react-router-dom';

import SocialMediaItem from './SocialMediaItem';
import styles from './styles';

function SocialMedia() {
  const items = [
    { id: 1, url: "https://www.facebook.com/TokenAi-719772544896545/", label: "Facebook", className: "fa fa-facebook" },
    { id: 2, url: "#", label: "Linkedin", className: "fa fa-linkedin" },
    { id: 3, url: "https://twitter.com/token_ai_ICO", label: "Twitter", className: "fa fa-twitter" },
    { id: 4, url: "https://join.slack.com/tokenai/shared_invite/MTkyOTcwOTE2MTkzLTE0OTY3Njk5MTEtMzRiN2MyZDYzMg", label: "Slack", className: "fa fa-slack" },
    { id: 5, url: "#", label: "Reddit", className: "fa fa-reddit" },
    { id: 6, url: "#", label: "Github", className: "fa fa-github" },
  ];
  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Contact</h2>
      <ul style={styles.contactIcons}>
        <li className="icon" style={styles.icon}>
          <i className="fa fa-envelope-o"></i>
          <Link to="#" style={styles.link}>info@tokenai.io</Link>
        </li>
      </ul>
      <ul style={styles.socialWrapper}>
      {
        items.map(item =>
          <SocialMediaItem key={item.id} url={item.url} label={item.label} className={item.className} />,
        )
      }
      </ul>
    </div>
  );
}

export default SocialMedia;
