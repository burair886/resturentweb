import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorent">What we believe</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur quis fuga iure, dolorum necessitatibus architecto est unde, iste fugit saepe aut nostrum facere accusamus voluptas. Ad ipsa at consequatur quaerat obcaecati facilis error.</p>
        </div>
      </div>
      <div className="app__chef-sign">
        <p>Lorem ipsum</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
