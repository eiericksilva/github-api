import React from 'react';
import * as S from './StyledProfile'

const Profile = () => {
  return (
    <>
        <S.Wrapper>
            <div>
                <S.WrapperImage src="https://avatars.githubusercontent.com/u/1?v=4" alt="Foto do usuário" />
                <h1>Erick Silva</h1>
                <S.WrapperUsername>
                    <h3>Username:</h3>
                    <span>@eiericksilva</span>
                </S.WrapperUsername>
                
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>Quantidade de Followers</span>
                    </div>
                    
                    <div>
                        <h4>Starreds</h4>
                        <span>Quantidade de Followers</span>
                    </div>
                    
                    <div>
                        <h4>Followings</h4>
                        <span>Quantidade de Followers</span>
                    </div>
                </S.WrapperStatusCount>
                
            </div>
        </S.Wrapper>
    </>
  )
}

export default Profile