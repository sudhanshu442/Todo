import React from 'react'
const Mo = () => {
  return (
    <>
    <div className="app" spacing={{xs:2,md:3}} columns={{xs:4,sm:8,md:12}} style={{backgroundColor:'#1e223d'}}>
      <header >
            <h1 className="hdr">TODO LIST</h1><br/>
        </header>
        <div item xs={12} xl={12} md={12} className="todolist" id="list">
          <div className='item'>
            <ul>
                <li>
                <input className="num" placeholder="1" style={{ marginRight: '14px',marginLeft: '15px',backgroundColor:'purple',borderRadius:'6px'}}/>
          <input className="text" type="text" style={{backgroundColor:'purple',borderRadius:'9px'}}
      placeholder="Enter text"
    /> 
    <div class="actions">
						<button className="material-icons">edit</button>
						<button className="material-icons delete-btn">delete</button>
					</div>

                </li>
                <li>
                <input className="num" placeholder="1" style={{ marginRight: '14px',marginLeft: '15px',backgroundColor:'purple',borderRadius:'6px'}}/>
          <input className="text" type="text" style={{backgroundColor:'purple',borderRadius:'9px'}}
      placeholder="Enter text"
    /> 
    <div class="actions">
						<button className="material-icons">edit</button>
						<button className="material-icons delete-btn">delete</button>
					</div>

                </li>
            </ul>
    </div>
       </div>
    <footer item xs={12} xl={12} md={12} className="last">
    <div className="last">       
    <input className="tbt" placeholder="write" style={{backgroundColor:"purple",borderRadius:"9px"}}/>
    {/* <button className='material-icons arrowup-btn'>arrow</button> */}
    </div>
</footer>      
</div>
</>
  )
}

export default Mo;