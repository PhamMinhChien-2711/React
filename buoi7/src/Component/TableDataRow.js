import React, { Component } from 'react'
// nay loi la do cai props 2 ben khac nhau nen ko ra dc
export default class TableDataRow extends Component {
    Changing=()=>{
      if(this.props.Permission==1)
        return "ADMIN";
      else if(this.props.Permission==2){
        return "USER";
      }

      else
        return "MODERATOR";
    }
    editClick=()=>{
      this.props.editFunclick();
    }
    render() {
        return (
            <tr>
              <td >{this.props.stt}</td>
              <td>{this.props.userName}</td>
              <td>{this.props.tel}</td>
              <td>{this.Changing()}</td>
              <td>
                <div className="btn btn-warning"><i className="fa fa-pencil" aria-hidden="true" onClick={()=>this.editClick()} />  Sửa</div>
                <div className="btn btn-danger"><i className="fa fa-minus" aria-hidden="true">Xoá</i></div>
              </td>
          </tr>
        )
    }
}
