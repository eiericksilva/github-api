import React from 'react'
import * as S from './StyledRepositories' 
import RepositoryItem from '../repository-item/RepositoryItem'

const Repositories = () => {
  return (
    <>
        <S.WrapperTabs 
        selectedTabClassName='is-selected' 
        selectedTabPanelClassName='is-selected'
        >
            <S.WrapperTabList>
                <S.WrapperTab> Repositories</S.WrapperTab>
                <S.WrapperTab> Starred </S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
              <RepositoryItem 
                name="Certificados"
                linkToRepo="https://github.com/eiericksilva/certificados"
                fullName="@eiericksilva/certificados"/>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
            <RepositoryItem 
                name="Controle Financeiro"
                linkToRepo="https://github.com/eiericksilva/controle-financeiro"
                fullName="@eiericksilva/controle-financeiro"/>
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    </>
  )
}

export default Repositories;