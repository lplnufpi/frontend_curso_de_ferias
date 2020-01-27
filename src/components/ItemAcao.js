import React from 'react'

export default function ItemAcao(props) {
  return (
    <div className="item-acao">
      <a href={props.route}>{props.title}</a>
    </div>
  )
}
