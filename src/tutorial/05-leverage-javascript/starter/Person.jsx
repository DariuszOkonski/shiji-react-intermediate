import React from 'react';
import defaultAvatar from '../../../assets/default-avatar.svg';

export function Person({ name, nickName = 'shakeAndBake', images }) {
  // const img = images && images[0] && images[0].small && images[0].small.url;
  const img = images?.[0]?.small?.url ?? defaultAvatar;

  return (
    <div style={{ border: '1px solid black', margin: '5px' }}>
      <img style={{ width: '100px' }} src={img} />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  );
}
