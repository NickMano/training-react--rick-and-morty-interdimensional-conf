import React from 'react'
import md5 from 'md5'

const Gravatar = props => {
    const mail = props.mail
    const hash = md5(mail)

    return(
        <img
          className={props.className}
          src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
          alt="Avatar"
        />
    )
}

export default Gravatar