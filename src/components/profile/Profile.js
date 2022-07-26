import React from 'react';
import * as S from './StyledProfile'

const Profile = () => {
  return (
    <>
      <div>
          <S.WrapperImage src="https://avatars.githubusercontent.com/u/1?v=4" alt="Foto do usuário" />
          <h1>Erick Silva</h1>
          <h3>Username:</h3>
          <a 
            href="https://avatars.githubusercontent.com/u/1?v=4" 
            target='_blank' 
            rel='noreferrer'>@eiericksilva
          </a>
          <div>
              <h4>Followers</h4>
              <span>x</span>
          </div>
          
          <div>
              <h4>Starreds</h4>
              <span>y</span>
          </div>
          
          <div>
              <h4>Followings</h4>
              <span>z</span>
          </div>
      </div>
    </>
  )
}

export default Profile