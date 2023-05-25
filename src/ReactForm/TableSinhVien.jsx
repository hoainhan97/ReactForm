import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSinhVien extends Component {

    renderTable = () => {
        return this.props.mangSinhVien.map((sv) => {
            return <tr key={sv.maSV}>
                <td>{sv.maSV}</td>
                <td>{sv.hoTen}</td>
                <td>{sv.sdt}</td>
                <td>{sv.email}</td>
                <td>
                    <button onClick={() => {
                        let action = {
                            type: "XEM_SV",
                            svXem: sv
                        }
                        this.props.dispatch(action)
                    }} className="btn btn-success mr-2">Xem</button>
                    <button onClick={() => {
                        let action = {
                            type: "XOA_SV",
                            svXoa: sv.maSV
                        }
                        this.props.dispatch(action)
                    }} className="btn btn-danger">Xóa</button>
                </td>

            </tr>
        })
    }
    render() {
        // console.log("table", this.props)
        return (
            <div className="row">
                <div className="col-12">
                    <h2 className="bg-dark text-white">Danh sách người dùng</h2>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Mã sinh viên</th>
                                <th scope="col">Họ tên</th>
                                <th scope="col">SDT</th>
                                <th scope="col">Email</th>
                                <th scope="col">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangSinhVien: rootReducer.QLSVReducer.mangSinhVien
    }
}

export default connect(mapStateToProps)(TableSinhVien)