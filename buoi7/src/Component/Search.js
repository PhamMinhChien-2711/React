import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);
    //khaibaonoidung
    this.state={nd:''}
  }
  hienAn=()=>{
    if(this.props.add === true){
      return (<div className="btn btn-outline-info " onClick={()=>this.props.ketNoi()}>Thêm</div>)
      
    }
   
    if(this.props.add === false)
    {
      return(
      <div className="btn btn-outline-secondary " onClick={()=>this.props.ketNoi()}>Đóng</div>
    )
    }
  }
  
  //noidungthaydoii
  isChange=()=>{

  }
  isChange=(event)=>{
    console.log(event.target.value);
    this.setState({nd:event.target.value})
    this.props.checkConnectProps(this.state.nd)
  }
    render() { 
        return (
           <div className="container">
             <div className="row">
             <div className="col-9">
  <div className="searchForm">
    <div className="form-group">
      <div className="btn-group">
        <input type="text" className="form-control" style={{width: '650px'}} onChange={(event)=>this.isChange(event)} placeholder="Nhập từ khoá" />  
        <div className="btn btn-info" style={{width:'100px'}} onClick={(dl)=>this.props.checkConnectProps(this.state.nd)}>Tìm</div>
      </div>                   
    </div>
    <hr />
  </div>
</div>
             
             <div className="col-3">
             <div className="btn-group">

             {/* <div className="btn btn-outline-info " onClick={()=>this.props.ketNoi()}>Thêm</div>
             <div className="btn btn-outline-secondary " onClick={()=>this.props.ketNoi()}>Đóng</div> */}
              {this.hienAn()}
             </div>
             </div>
             </div >
           </div>


        )
    }
}
