const initialState = {
    mangSinhVien: [
      {
        maSV: "sv001",
        hoTen: "Lê Hoài Nhân",
        sdt: "0376548880",
        email: "hoainhan9744@gmail.com"
      },
      {
        maSV: "sv002",
        hoTen: "Mã Văn Tài",
        sdt: "07777777",
        email: "matai@gmail.com"
      },
      {
        maSV: "sv003",
        hoTen: "Lương Sơn Bá",
        sdt: "0905686868",
        email: "sonba@gmail.com"
      },
      {
        maSV: "sv004",
        hoTen: "Songoku",
        sdt: "99999999",
        email: "kakalot@gmail.com"
      }
    ],
    sinhVienChiTiet: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: ""
    }
  }
  
  export const QLSVReducer = (state = initialState, action) => {
    switch (action.type) {
      case "THEM_SV":
        state.mangSinhVien = [...state.mangSinhVien, action.sv]
        return { ...state }
  
      case "XOA_SV":
        state.mangSinhVien = state.mangSinhVien.filter((sv) => {
          return sv.maSV !== action.svXoa
        })
        return { ...state };
  
      case "XEM_SV":
        state.sinhVienChiTiet = action.svXem
        console.log(state.sinhVienChiTiet);
  
        return { ...state }
  
      default:
        return state
    }
  }