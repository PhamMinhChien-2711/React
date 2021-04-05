import React, { Component } from 'react'
import TableDataRow from './TableDataRow';


export default class Table extends Component {
  mappingDataUser=()=>
    this.props.dataUserProps.map((value,key)=>(
      <TableDataRow editFunclick={()=>this.props.edit()} userName={value.name} stt={key} tel={value.tel} Permission={value.Permission}/>
    ) );
  
    render() {
      console.log(this.props.dataUserProps);
        return (
            <div className="col">
  {/* b4-table-s */}
  <table className="table table-striped table-inverse table-hover">
    <thead className="thead-inverse">
      <tr>
        <th>Số thứ tự</th>
        <th>Họ tên</th>
        <th>Điện thoại</th>
        <th>Quyền</th>
        <th>Chức Năng</th>
      </tr>
    </thead>
    <tbody>
      {this.mappingDataUser()}
      
    </tbody>
  </table>
</div>

        )
    }
}
