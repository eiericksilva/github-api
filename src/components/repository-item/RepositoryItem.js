import React from 'react'

const RepositoryItem = ({name,linkToRepo, fullName}) => {
  return (
    <>
        <h2>{name}</h2>
        <h4>Full name:</h4>
        <a 
            href="https://github.com/eiericksilva" 
            target='_blank' 
            rel='noreferrer'>@eiericksilva/certificados
            {fullName}
        </a>
    </>
  )
}

export default RepositoryItem