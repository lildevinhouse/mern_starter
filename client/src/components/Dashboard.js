import React, {useState} from 'react';
import { connect, useSelector } from 'react-redux';

function Dashboard() {

  const data = useSelector(({data}) => data);
  const [category, setcategory] = useState('')

  const Filter = ({param}) =>{
    console.log(param)
    return(
        <div className='table__inner'>
          {data && data.map((item, i)=>
             param === 'avatar' || param ==='cat' ? 
             <img key ={i} src={item[param]}></img>
             :
             <p key ={i}>{item[param]}</p>
           )}  
        </div>
    )
  };

  return (
    <div>
        <h1>Dashboard</h1>
        <div className='table'>
            <nav>
                <ul>
                    {data && Object.keys(data[0]).map((item, i)=>
                    <button key={i} onClick={()=>setcategory(item)}>Get {item}</button>
                    )}
                </ul>
            </nav>
            <Filter param={category}/>
        </div>
    </div>
  )
}

function mapStateToProps({ data }) {
    return { data };
}

export default connect(mapStateToProps)(Dashboard);