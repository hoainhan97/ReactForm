import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormDangKy extends Component {

    state = {
        values: {
            maSV: "",
            hoTen: "",
            sdt: "",
            email: ""
        },
        errors: {
            maSV: "",
            hoTen: "",
            sdt: "",
            email: ""
        }
    }

    handleOnChange = (event) => {
        let { value, name } = event.target

        let newValues = { ...this.state.values }
        newValues[name] = value;

        let messageError = "";
        let typeform = event.target.getAttribute("typeform");
        let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        messageError = value.trim() === "" ? `${name} không được để trống` :
            (typeform == "email" && !regexp.test(value) ? `${name} không đúng định dạng` : "");


        let newErrors = {...this.state.errors}
        newErrors[name] = messageError



        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            // console.log(this.state)
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()

        let isValid = true;

        for (const property in this.state.values) {
            if (this.state.values[property] === ""){
                isValid = false;
            }
        }
        for (const property in this.state.errors) {
            if (this.state.errors[property] !== ""){
                isValid = false;
            }
        }

        if(isValid){
            let action = {
                type: "THEM_SV",
                sv: this.state.values
            }
            this.props.dispatch(action);
        }else{
            alert("Vui lòng điền form")
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
          values: newProps.sinhVienChiTiet
        })
      }


    render() {
        console.log("fỏm", this.props)
        let {maSV,hoTen,sdt,email} = this.state.values
        return (
            <div className="row">
                <div className="col-12">
                    <h2 className='bg-dark text-white'>Thông tin sinh viên</h2>

                    <form onSubmit={this.handleOnSubmit}>
                        <div className="row py-3">
                            <div className="col">
                                <label htmlFor="maSV">Mã SV</label>
                                <input value={maSV} onChange={this.handleOnChange} name='maSV' type="text" className="form-control" placeholder="Mã SV" />
                                <p className='text-danger'>{this.state.errors.maSV}</p>
                            </div>
                            <div className="col">
                                <label htmlFor="hoTen">Họ tên</label>
                                <input value={hoTen} onChange={this.handleOnChange} name='hoTen' type="text" className="form-control" placeholder="Họ Tên" />
                                <p className='text-danger'>{this.state.errors.hoTen}</p>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col">
                                <label htmlFor="sdt">Số điện thoại</label>
                                <input value={sdt} onChange={this.handleOnChange} name='sdt' type="text" className="form-control" placeholder="Số điện thoại" />
                                <p className='text-danger'>{this.state.errors.sdt}</p>
                            </div>
                            <div className="col">
                                <label htmlFor="email">Email</label>
                                <input value={email} onChange={this.handleOnChange} typeform="email" name='email' type="text" className="form-control" placeholder="Email" />
                                <p className='text-danger'>{this.state.errors.email}</p>
                            </div>
                        </div>

                        <div className='py-3'>

                            <button className='btn btn-success mr-2'>Thêm sinh viên</button>
                            <button className='btn btn-info'>Cập nhật</button>
                        </div>

                    </form>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        sinhVienChiTiet: rootReducer.QLSVReducer.sinhVienChiTiet
    }
}

export default connect(mapStateToProps)(FormDangKy)
