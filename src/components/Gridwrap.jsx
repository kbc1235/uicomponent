/* eslint-disable array-callback-return */
import GridItem from './GridItem';
import { GRID_DATA } from './GridData';

const Gridwrap = () => {
  const tableStyle = {
    width:'100%',
    border:'1px solid #000'
  }
  const col01 = {
    width: '50px',
    borderRight:'1px solid #000',
    borderLeft:'1px solid #000'
  }
  const col02 = {
    width: '80px',
    padding: 10,
    borderRight:'1px solid #000'
  }
  const col03 = {
    width: 'calc(100% - 130px)',
    padding: 10,
  }
  
  return(
    <table style={tableStyle}>
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