import React, { Component } from "react";
import styles from './card.module.css'; 

class Card extends Component {
  render() {
    return (
        <a className={styles.card} href={this.props.link}>
            <div className={styles.card__background} style={{backgroundImage: this.props.imgUrl}}></div>
            <div className={styles.card__content}>
                <p className={styles.card__category}>{this.props.category}</p>
                <h3 className={styles.card__heading}>{this.props.heading}</h3>
            </div>
        </a>
    );
  }
}

export default Card;

