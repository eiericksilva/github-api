import React, { useState } from 'react'
import * as S from './StyledHeader'
import useGithub from "../../hooks/GithubHooks.js";

const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();
    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

  return (
    <>
        <S.Wrapper>
            <input
            type="text"
            placeholder="Digite o username para pesquisa..."
            onChange={(event) => setUsernameForSearch(event.target.value)}
            />
            <button type="submit" onClick={submitGetUser}>
            <span>Buscar</span>
            </button>
        </S.Wrapper>
    </>
  )
}

export default Header