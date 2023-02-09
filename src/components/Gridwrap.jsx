/* eslint-disable array-callback-return */
import GridItem from './GridItem';
import { GRID_DATA } from './GridData';

const Gridwrap = () => {
  const col01 = {
    maxWidth: 50,
  }
  const col02 = {
    maxWidth: 80,
  }
  const col03 = {
    maxWidth: 120,
  }
  return(
    <table>
      <colgroup>
        <col style={col01}/>
        <col style={col02}/>
        <col style={col03}/>
      </colgroup>
      <thead>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>주소</th>
        </tr>
      </thead>
      <tbody>
        {GRID_DATA.map( (data) =>{
          return <GridItem id={data.id} name={data.name} address={data.address} key={data.id}/>
        })}
      </tbody>
    </table>
  )
}
export default Gridwrap