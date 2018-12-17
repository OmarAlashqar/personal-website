import React from 'react';
import './card.scss';

const Card = props => {
  const {
    imgSrc,
    imgAlt,
    title,
    body,
    label,
    urlGithub,
    urlWebsite,
  } = props;

  return (
    <div className='card'>
      {imgSrc &&
        <img src={imgSrc} alt={imgAlt || title} />
      }

      <div className='btn-wrapper'>
        {urlGithub && <a className='card-link' href={urlGithub}>View on Github</a>}
        {urlWebsite && <a className='card-link' href={urlWebsite}>View website</a>}
      </div>

      {title && 
        <div className='card-title'>
          <h3>{title}</h3>
        </div>
      }

      {label &&
        <div className='card-label'>
          <span>{label}</span>
        </div>
      }
      
      {body &&
        <div className='card-body'>
          {body && <span>{body}</span>}
        </div>
      }

    </div>
  );
}

export default Card;