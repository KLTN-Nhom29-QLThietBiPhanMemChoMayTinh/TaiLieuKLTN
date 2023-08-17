import React, { useState, useEffect } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'
import BieuDoLuotThueNgay from "./BieuDoLuotThueNgay";
import BieuDoLuotThueThang from "./BieuDoLuotThueThang";
import BieuDoPhongTuyChinh from "./BieuDoPhongTuyChinh";
import {FcOk} from 'react-icons/fc'
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js";

export default function TKPhong() {

    const [loaiTK, setLoaiTK] = useState('1')

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="row" style={{ marginTop: '1%' }}>
                    <label htmlFor='loai_tk' className="form-label col-2">Chọn loại thống kê</label>
                    <select className="form-select col" id='loai_tk' value={loaiTK} onChange={e => setLoaiTK(e.target.value)}>
                        <option value="1">Thống kê theo ngày</option>
                        <option value="2">Thống kê theo tháng</option>
                        <option value="3">Tuỳ chỉnh</option>
                    </select>
                </div>
                {loaiTK == '1' && <BieuDoLuotThueNgay />}
                {loaiTK == '2' && <BieuDoLuotThueThang />}
                {loaiTK == '3' && <BieuDoPhongTuyChinh />}
            </div>
        </div>
    )
}