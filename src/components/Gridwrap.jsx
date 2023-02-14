import styles from '../style/style.module.css'
import GridItem from './GridItem';
import { GRID_DATA } from './GridData';

const Gridwrap = () => {
  const col01 = {
    width: '100px',
    borderRight:'1px solid #000',
    borderLeft:'1px solid #000'
  }
  const col02 = {
    width: '150px',
    padding: 10,
    borderRight:'1px solid #000'
  }
  const col03 = {
    width: 'calc(100% - 250px)',
    padding: 10,
  }
  
  return(
    <table className={styles.table}>
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
        {
        GRID_DATA.map( (data) =>{
          return data.id <= 10 ? <GridItem id={data.id} name={data.name} address={data.address} key={data.id}/> : null
        })
        }
      </tbody>
    </table>
  )
}
export default Gridwrap