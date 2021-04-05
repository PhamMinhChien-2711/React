import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import User from './User';
import Datauser from './Data.json';
class App extends Component {
  constructor(props) {
    super(props );
    this.state={
      hienthiForm:false,
      data:Datauser,
      add:true,
      searchNd:''
    }
  }
  //ham kiem tra ket noi
  getNewUser=(name,tel,Permission)=>{
    // alert("ket noi dc k")
    // console.log(name);
    // console.log(tel);

    // console.log(Permission);
    //khai bao bien de nhan du lieu
    var item={};
    item.id='';
    item.name=name;
    item.tel=tel;
    item.Permission=Permission;
    console.log(item);
    var newItem=this.state.data;
    newItem.push(item);
    console.log(newItem);
    this.setState({data:newItem})
  }
  //1
  editUser=()=>{
    alert('da ket noi');
  }
  checkConnect=(dl)=>{
    console.log('dulieunhandcla: '+this.state.searchN );
    this.setState({searchNd:dl});
  }
  doiTrangthai=()=>{
    this.setState({
      hienthiForm:!this.state.hienthiForm,
      add:!this.state.add,
    });
  }
  thongBao=()=>{
    alert('Da ket noi');
  }
  render(){
    console.log(this.state.data);
    var ketqua=[]
    this.state.data.forEach((item)=>{
      //kq gia tri nam trong mang k neu k thi -1
      if(item.name.indexOf(this.state.searchNd)!==-1)
      {
        ketqua.push(item)
      }
      console.log(ketqua);
    })
    
    return (
      <div>
        <Header/>
        <div className="container">
        <div className="row">
          <Search checkConnectProps={(dl)=>(this.checkConnect(dl))} add={this.state.add} ketNoi={()=>this.doiTrangthai()}/>
          <Table edit={()=>this.editUser()} dataUserProps={ketqua}/>
          <User add={(name,tel,Permission)=>this.getNewUser(name,tel,Permission)} hienthiForm={this.state.hienthiForm}/>
          
        </div>
        </div>
        </div>
    );
  }
  
}

export default App;
