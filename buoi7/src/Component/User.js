import React, { Component } from 'react'

export default class User extends Component {
    // conc
    // constructor(props ) {
    //     super(props );
    //     this.state={
    //         trangthainutthem:true
            
    //     }
    // }
    constructor(props) {
        super(props);
        this.state={ trangthainutthem:true,
        id:'',
        name:'',
        Permission:'',
    }
    }
    
    //khaibao 2 gia tri cua doi tuong
    isChaing=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
      
        console.log(name);
        console.log(value);
        this.setState({[name]:value});

         var pt={};
         pt.id=this.state.id;
         pt.name=this.state.name;
         pt.tel=this.state.tel;
         pt.Permission=this.state.Permission
        console.log(pt);

    }
  

    hienNut=()=>{
        if(this.state.trangthainutthem===true){
            console.log("test");
            return <div className="btn btn-outline-info btn-block"  onClick={()=>this.xulyTrangthai()}>Thêm</div>}
            else{
                return <div className="btn btn-outline-secondary btn-block" onClick={()=>this.xulyTrangthai()}>Đóng</div>
            }
    }
    xulyTrangthai=()=>{
        this.setState({
            trangthainutthem:!this.state.trangthainutthem   
        })
    }
    hienForm=()=>{
        if(this.state.trangthainutthem===false){
            return <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
            <div className="card-header">Thêm Mới Thành Viên</div>
             <div className="card-body text-primary">
            <div className="form-group">
             <input type="text" className="form-control"  placeholder="Tên Thành Viên" />                       
             </div>
            <div className="form-group">
            <input type="text" className="form-control" placeholder="Số điện thoại" />                       
            </div>
                <div className="form-group">                       
<select className="form-control" >
  
  <option value={1}>Admin</option>
  <option value={2}>User</option>
  <option value={3}>Modrater</option>
</select>
</div>
<div className="btn btn-primary btn-block" >Thêm</div>
</div>
</div>
        }
    }
    kiemTratrangthai=()=>{
        if(this.props.hienthiForm===true){
            return(
                <form>
                    <div className="card border-primary mb-3" style={{maxWidth: '18rem',opacity:'1'}}>
                        <div className="card-header">them thanh vien</div>
                        <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" onChange={(event)=>this.isChaing(event) } name="name" className="form-control mt-2" aria-describedby="helpId" placeholder="ten user" />
                            <input type="text" onChange={(event)=>this.isChaing(event) } name="tel" className="form-control mt-2"  aria-describedby="helpId" placeholder="so dien thoai" />
                            <div className="form-group mt-2">                       
                            <select className="form-control" onChange={(event)=>this.isChaing(event) } name="Permission">
                                <option value={1}>Admin</option>
                                <option value={2}>User</option>
                                <option value={3}>Modrater</option>
                            </select>
                            </div>
                            {/* <div className="btn btn-primary btn-block" onClick={(name,tel,Permission)=>this.props.Adding(this.state.name,this.state.tel,this.state.Permission)}>ADD</div> */}
                            <input type="reset" className="btn btn-primary btn-block" onClick={(name,tel,Permission)=>this.props.add(this.state.name,this.state.tel,this.state.Permission)}  value="ADD"/>
                        </div>
                        </div>
                        {/* {this.Hiennut()}    
                        {this.Hienform()} */}
                    </div>
                </form>
            
            )
        }
    }
    
    render() {
        // console.log(this.props.hienthiForm);
        // console.log(this.state);
        return (
            <div>
                <div className="col-12">
                
                {
                this.kiemTratrangthai()
                }
              
                
                
</div>
            </div>

        )
    }
}
