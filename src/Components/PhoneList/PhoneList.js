import './PhoneList.css';
import Button from 'react-bootstrap/Button';

import React, { Component } from 'react';

export default class PhoneList extends Component {
  render() {
    return (
      <div className="phoneList">
        <ul className="list">
          {this.props.contacts.map(item => {
            return (
              <li key={item.id} className="item">
                {item.name} : {item.number}
                <Button
                  className="btn-my"
                  onClick={() => this.props.del(item.id)}
                  variant="primary"
                >
                  Удалить
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
