const GridItem = ({id, name, address}) => {
  return(
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{address}</td>
    </tr>
  )
}

export default GridItem;