import React, { Component } from 'react';
import { Table,TableBody,TableHead,TableCell,TableRow} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles'
import { APIURL } from '../support/apiurl';
import Axios from 'axios'
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import Fade from 'react-reveal/Fade'


class Manageadmin extends Component {
    state = { 
        datafilm:[],
        readmoreselected:-1,
        modaladd:false
     }
    
    componentDidMount(){
        Axios.get(`${APIURL}movies`)
        .then((res)=>{
            this.setState({datafilm:res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

    onSaveAddData=()=>{
        var jadwaltemplate=[12,14,16,18,20]
        var jadwal=[]
        for(var i=0;i<jadwal.length;i++){
            if(this.refs[`jadwal${i}`].checked){
                jadwal.push(jadwaltemplate[i])
            }
        }
        var iniref=this.refs
        var title=iniref.title.value
        var image=iniref.image.value
        var sinopsis=iniref.sinopsis.value
        var sutradara=iniref.sutradara.value
        var genre=iniref.genre.value
        var durasi=iniref.durasi.value
        var produksi='OH'
        var data={
            title:title,
            image,
            sinopsis,
            sutradara,
            genre,
            durasi,
            produksi,
            jadwal
        }
        Axios.post(`${APIURL}movies`,data)
        .then((res)=>{
            Axios.get(`${APIURL}movies`)
            .then((res)=>{
                this.setState({datafilm:res,data,modaladd:false})
            })
            .catch((err)=>{
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    renderMovie=()=>{
        return this.state.datafilm.map((val,index)=>{
            return (
                <TableRow key={index}>
        <TableCell>{index+1}</TableCell>
        <TableCell>{val.title}</TableCell>
        <TableCell><img src={val.image} alt={'gambar'} height='200px'/></TableCell>
        { this.state.readmoreselected===index?
            <TableCell>
                {val.sinopsis}
                <span style={{color:'red'}} onClick={()=>this.setState({readmoreselected:-1})}>
                    Read less
                </span>
                </TableCell>
                :
        <TableCell>{val.sinopsis.split('').filter((val,index)=>index<=20)}
        <span onClick={()=>this.setState({readmoreselected:index})}>Read More</span>
        </TableCell>
        }
        <TableCell>{val.jadwal}</TableCell>
        <TableCell>{val.sutradara}</TableCell>
        <TableCell>{val.durasi}</TableCell>
        <TableCell>{val.genre}</TableCell>
        <TableCell>
                <button className='btn btn-outline-primary'>Edit</button>
                <button className='btn btn-outline-danger'>Delete</button>

        </TableCell>
                </TableRow>
            )
        })
    }

    render() { 
        return ( 
            <div className='mx-3'>
                <Modal isOpen={this.state.modaladd} toggle={()=>this.setState({modaladd:false})}>
                    <ModalHeader>
                        Add data
                    </ModalHeader>
                    <ModalBody>
                        <input type='text' ref='title' placeholder='title' className='form-control'/>
                        <input type='text' ref='image' placeholder='image' className='form-control'/>
                        <input type='text' ref='sinopsis' placeholder='Sinopsis' className='form-control'/>
                        jadwal:
                        <input type='checkbox' ref='jadwal0'/>12.00
                        <input type='checkbox' ref='jadwal1'/>14.00
                        <input type='checkbox' ref='jadwal2'/>16.00
                        <input type='checkbox' ref='jadwal3'/>18.00
                        <input type='checkbox' ref='jadwal4'/>20.00
                        <input type='text' ref='sutradara' placeholder='Sutradara' className='form-control'/>
                        <input type='text' ref='durasi' placeholder='Jadwal' className='form-control'/>
                        <input type='text' ref='genre' placeholder='Genre' className='form-control'/>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.onSaveAddData} className='btn btn-success'>Save</button>
                        <button onClick={()=>this.setState({modaladd:false})} className='btn btn-warning'>Cancel</button>
                    </ModalFooter>
                </Modal>
                <Fade>
                    <button onClick={()=>this.setState({modaladd:true})} className='btn btn-success'>Add</button>
                <Table>
                    <TableHead>
                        <TableCell>No</TableCell>
                        <TableCell>Judul</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Sinopsis</TableCell>
                        <TableCell>Jadwal</TableCell>
                        <TableCell>Sutradara</TableCell>
                        <TableCell>Durasi</TableCell>
                        <TableCell>Genre</TableCell>
                    </TableHead>
                    <TableBody>
                        {this.renderMovie()}
                    </TableBody>
                </Table>
                </Fade>
            </div>
         );
    }
}
 
export default Manageadmin;