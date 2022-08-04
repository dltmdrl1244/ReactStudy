import React from 'react'
import styles from './CSSModule.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function CSSModule() {
    const inverted = true;
  return (
    <div className={cx("wrapper")}>
        안녕하세요. 저는 <span className='something'>CSS Module!</span>
    </div>
  );
};
