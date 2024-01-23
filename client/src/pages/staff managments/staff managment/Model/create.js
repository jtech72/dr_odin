import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import { CloseButton } from 'react-bootstrap';
import "../Model/edit.css"
import { Row, Col, Form, Card, Button,} from 'react-bootstrap';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useDispatch, useSelector } from 'react-redux';
import { activeEmployeeCreateAction, reportingManagerByDesignationAction, } from '../../../../redux/staffManagment/activeEmployee/actions';
import { getcityByState, getStateByZone } from '../../../../redux/setting/action';
import MainLoader from '../../../../components/MainLoader';
import ToastHandle from "../../../../constants/Toaster/Toaster"


const Create = ({modelShow,close}) => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const store = useSelector((state) => state)
    const createLoader = store?.ActiveEmployeeCreateReducer
    const successHandle = store?.ActiveEmployeeCreateReducer
    const errorHandle = store?.ActiveEmployeeCreateReducer;
    const [data, setData] = useState({ empId: "", empName: "", zone: "", state: "", city: "", designation: "", joinDate: "", reportingManager: "", status: true, statusValue: "", monthlytarget: "", yearlyTarget: "", alldesignation: "" })
    const [showModel, setShowModel] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [loader, setloader] = useState(false) 

    const onSubmit = (data) => {


        let body = {
            empId: data?.employeeId,
            empName: data?.name,
            designation: data?.designation,
            doj: data?.dateofJoining,
            zoneId: data?.zone,
            rmId: data?.reportingManagerName,
            status: true ,
            mnthtarget: data?.monthlyTarget ? data?.monthlyTarget : "",
            yrlytarget: data?.yearlyTarget ? data?.yearlyTarget : "",
            state: data?.state,
            city: data?.city
        }
        dispatch(activeEmployeeCreateAction(body))
       
    }

    const handleZoneChange = (e) => {
        setData({ ...data, zone: e.target.value })
        dispatch(getStateByZone(e.target.value))
    }
    const handleStateChange = (e) => {
        setData({ ...data, state: e.target.value })
        dispatch(getcityByState(e.target.value))
    }
 const handleReset = () => {
        reset()
    }
    const handelallDesination = (e) => {
        setData({ ...data, alldesignation: e.target.value })
        let daata = {
            designationId: e.target.value,
            zoneId: data?.zone
        }
        dispatch(reportingManagerByDesignationAction(daata))
    }

    useEffect(() => {
        if (createLoader?.loading) {
            setloader(true)
        }
        else if (successHandle?.status == 200) {
            ToastHandle("success", "successfully created")
           close(false)
            reset()
        }
        else if (successHandle?.status == 401) {
            ToastHandle("error", store?.ActiveEmployeeCreateReducer?.message)
        }
        else if (successHandle?.status == 405) {
            ToastHandle("error", "Something went wrong")
        }
    }, [successHandle])


    const handleCheck = (e) => {
        if (e.target.checked) {
            setIsChecked(true)
        }
        else {
            setIsChecked(false)
        }
    }

    return (
        <>
            <Modal xs={9} size={"xl "} onHide={() => {
               
                close(false)
            }} show={modelShow} dialogClassName="modal-width"
            >


                <Modal.Body className='pb-2'>
{successHandle?.loading?<MainLoader/>:
                    <Row >
                        <Col className="text-end" lg={12}>
                            <Row>
                                <Col className='text-start' lg={6}>
                                    <h3 className='ms-4'>Create Employee </h3>
                                </Col>
                                <Col className='text-end' lg={6}>
                                    <CloseButton onClick={() => {
                                        setShowModel(false)
                                      close(false)
                                    }} />
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={12}>
                            <Card>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Card.Body className='pb-0'>
                                        <Form.Group>
                                            <Col className='ms-2' lg={12}>
                                                <Form.Label className='' >
                                                    <span className="text-danger">*</span>Please enter the employee name as it appears on the uploaded telly sheet for accurate records in database
                                                </Form.Label>
                                            </Col>
                                        </Form.Group>

                                        <Row className='p-3 pb-3'>
                                            <Col xs={12} >
                                                <Row className="">
                                                    <Col lg={6}>
                                                        <Form.Group >
                                                            <Row className="d-flex align-items-center">
                                                                <Col lg={12}>
                                                                    <Form.Label className='' >
                                                                        Employee id <span className="text-danger">*</span> :
                                                                    </Form.Label>
                                                                </Col>
                                                                <Col lg={12}>
                                                                    <Form.Group className="" >
                                                                        <Form.Control
                                                                            type="text" {...register("employeeId", {
                                                                                required: true,
                                                                                pattern: {
                                                                                    value: /^[a-z0-9 ]*$/,
                                                                                    message: "Only Alphabets and numbers are allowed",
                                                                                }
                                                                            })}
                                                                        />
                                                                        {/* {errors?.employeeId && <span className="text-danger"> This field is required *</span>} */}
                                                                        {errors?.employeeId?.type == "required" && <span className="text-danger"> This field is required *</span>}
                                                                        {errors?.employeeId?.type == "pattern" && <span className="text-danger"> {errors?.employeeId?.message}</span>}
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group >
                                                            <Row className="d-flex align-items-center">
                                                                <Col lg={12}>
                                                                    <Form.Label>
                                                                        Name <span className="text-danger">*</span> :
                                                                    </Form.Label>
                                                                </Col>
                                                                <Col lg={12}>
                                                                    <Form.Group className="" >
                                                                        <Form.Control {...register("name", {
                                                                            required: true,
                                                                            pattern: {
                                                                                value: /^[a-zA-Z ]*$/,
                                                                                message: "Only Alphabets are allowed",
                                                                            }
                                                                        })}
                                                                            type="text"
                                                                        />
                                                                        {errors?.name?.type == "required" && <span className="text-danger"> This field is required *</span>}
                                                                        {errors?.name?.type == "pattern" && <span className="text-danger"> {errors?.name?.message}</span>}
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="my-1">
                                                    <Col lg={6}>
                                                        <Form.Group >
                                                            <Row className="d-flex align-items-center">
                                                                <Col lg={12}>
                                                                    <Form.Label className=''>
                                                                        Zone  :
                                                                    </Form.Label>
                                                                </Col>
                                                                <Col lg={12}>

                                                                    <Form.Select {...register("zone", { required: true })}
                                                                        onChange={handleZoneChange}
                                                                    >
                                                                        <option value=""> --Select-- </option>
                                                                        {store?.getZoneListReducer?.getDesignation?.response?.map((ele, ind) => {
                                                                            return (

                                                                                <option key={ind} value={ele?._id}> {ele?.zone} </option>
                                                                            )
                                                                        })}

                                                                    </Form.Select>
                                                                    {errors?.zone && <span className="text-danger"> This field is required *</span>}
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group >
                                                            <Row className="d-flex align-items-center">
                                                                <Col lg={12}>
                                                                    <Form.Label className=''>
                                                                        State :
                                                                    </Form.Label>
                                                                </Col>
                                                                <Col lg={12}>
                                                                    <Form.Group className="" >
                                                                        <Form.Select {...register("state", { required: true })}
                                                                            onChange={handleStateChange}
                                                                        >
                                                                            <option value=""> --Select-- </option>
                                                                            {store?.getStateByZoneReducer?.data?.response?.length > 0 ? store?.getStateByZoneReducer?.data?.response?.map((ele, ind) => {
                                                                                return (

                                                                                    <option key={ele?._id} value={ele?._id}>{ele?.state} </option>

                                                                                )
                                                                            }) : <option  >no state found in selected zone </option>}



                                                                        </Form.Select>
                                                                        {errors?.state && <span className="text-danger"> This field is required *</span>}
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="my-1">
                                                    <Col lg={6}>
                                                        <Form.Group >
                                                            <Row className="d-flex align-items-center">
                                                                <Col lg={12}>
                                                                    <Form.Label className=''>
                                                                        City  :
                                                                    </Form.Label>
                                                                </Col>
                                                                <Col lg={12}>
                                                                    <Form.Group className="" >
                                                                        <Form.Select {...register("city", { required: true })}
                                                                        >
                                                                            <option value=""> --Select-- </option>
                                                                            {store?.getCityByState?.data?.response?.length > 0 ? store?.getCityByState?.data?.response?.map((ele, ind) => {
                                                                                return (

                                                                                    <option key={ele?._id} value={ele?._id}>{ele?.city} </option>

                                                                                )
                                                                            }) : <option >no city found in selected state || Please add city from settings </option>}



                                                                        </Form.Select>
                                                                        {errors?.city && <span className="text-danger"> This field is required *</span>}
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>

                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group >
                                                            <Row className="d-flex align-items-center">
                                                                <Col lg={12}>
                                                                    <Form.Label className=''>
                                                                        Designation <span className="text-danger">*</span> :
                                                                    </Form.Label>
                                                                </Col>
                                                                <Col lg={12}>

                                                                    <Form.Group className="" >
                                                                        <Form.Select {...register("designation", { required: true })} onChange={handelallDesination}
                                                                        >
                                                                            <option value=""> --Select-- </option>
                                                                            {store?.GetDesignationReducer?.getDesignation?.response?.length>0 ?store?.GetDesignationReducer?.getDesignation?.response. map((ele, ind) => {
                                                                                return (

                                                                                    <option key={ele?._id} value={ele?._id}  >{ele?.designation} </option>

                                                                                )
                                                                            }):<option >Designation is not found </option> }



                                                                        </Form.Select>
                                                                        {errors?.designation && <span className="text-danger"> This field is required *</span>}
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>

                                                    </Col>
                                                </Row>


                                                <Row className="my-1">
                                                    <Col lg={6}>
                                                        <Form.Group >
                                                            <Row className="d-flex align-items-center">
                                                                <Col lg={12}>
                                                                    <Form.Label className=''>
                                                                        Reporting Manager Name :
                                                                    </Form.Label>
                                                                </Col>
                                                                <Col lg={12}>
                                                                    <Form.Group className=""  >
                                                                        <Form.Select {...register("reportingManagerName", { required: false})}
                                                                        >
                                                                            <option value=""> --Select-- </option>
                                                                            {store?.ReportingManagerByDesignationReducer?.response?.length >0 ? store?.ReportingManagerByDesignationReducer?.response?. map((ele, ind) => {
                                                                                return (
                                                                                    <option value={ele?._id}> {ele?.empName} {`(${ele?.designation?.designation})`} </option>
                                                                                )
                                                                            }): <option >Reporting Manager not found </option> }
                                                                        </Form.Select>
                                                                        {errors?.reportingManagerName && <span className="text-danger"> This field is required *</span>}
                                                                    </Form.Group>
                                                                </Col>

                                                            </Row>
                                                        </Form.Group>

                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group >
                                                            <Row className="d-flex align-items-center">
                                                                <Col lg={12}>
                                                                    <Form.Label>
                                                                        Date of Joining <span className="text-danger">*</span> :
                                                                    </Form.Label>
                                                                </Col>
                                                                <Col lg={12}>
                                                                    <Form.Group className="" >
                                                                        <Form.Control {...register("dateofJoining", { required: true })}
                                                                            type="Date" max='2030-01-01'
                                                                        />
                                                                        {errors?.dateofJoining && <span className="text-danger"> This field is required *</span>}
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>

                                                    </Col>
                                                </Row>
                                                <Row className="my-1">

                                                    
                                                    <Col lg={6}>
                                                        <Form.Group >
                                                            <Row className="d-flex align-items-center">
                                                                <Col lg={12}>
                                                                    <Form.Label className=''>
                                                                        Status <span className="text-danger">*</span> :
                                                                    </Form.Label>
                                                                </Col>
                                                                <Col lg={12}>
                                                                    <Form.Group className=""  >
                                                                        <Form.Select disabled={true} {...register("status", { required: false })}
                                                                        >

                                                                            <option value="active">Active Employee </option>

                                                                        </Form.Select>

                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>

                                                    </Col>
                                                </Row>
                                                <Row className="my-1">


                                                    <Row className='mt-3 '>
                                                        <Col lg={6}>
                                                            <Form.Group >
                                                                <Row className="d-flex align-items-center ">
                                                                    <Col lg={12}>
                                                                        <Row>
                                                                            <Col lg={10}>
                                                                                <Form.Label className=''  >
                                                                                    <p>Are you want to add employee Monthly and Yearly target</p>
                                                                                </Form.Label>
                                                                            </Col>
                                                                            <Col lg={2}>
                                                                                <Form.Check onChange={(e) => { handleCheck(e) }}
                                                                                    type="checkbox"
                                                                                />
                                                                            </Col>
                                                                        </Row>

                                                                    </Col>
                                                                    {/* <Col lg={12}>
                                                    <Form.Check className="" >
                                                    
                                                    </Form.Check>
                                                </Col> */}
                                                                </Row>
                                                            </Form.Group>

                                                        </Col>
                                                    </Row>
                                                </Row>
                                                {isChecked && <Row className='my-1'>
                                                    <Col lg={6}>
                                                        <Form.Group >
                                                            <Row className="d-flex align-items-center">
                                                                <Col lg={12}>
                                                                    <Form.Label className=''  >
                                                                        Monthly Target <span className="text-danger">*</span> :
                                                                    </Form.Label>
                                                                </Col>
                                                                <Col lg={12}>
                                                                    <Form.Group className="" >
                                                                        <Form.Control {...register("monthlyTarget", { required: false })}
                                                                            type="number"
                                                                        />

                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>

                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group >
                                                            <Row className="d-flex align-items-center">
                                                                <Col lg={12}>
                                                                    <Form.Label>
                                                                        Yearly Target <span className="text-danger">*</span> :
                                                                    </Form.Label>
                                                                </Col>
                                                                <Col lg={12}>
                                                                    <Form.Group className="" >
                                                                        <Form.Control {...register("yearlyTarget", { required: false })}
                                                                            type="number"
                                                                        />
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>}

                                                <Row>
                                                    <Col lg={12} className="text-center mt-3 ">
                                                        {/* <Button type="submit" className="submit-btn" onClick = {handleCreate}>Create</Button> */}

                                                        <Button type='submit' className='submit-btn btn-secondary' >Create</Button>
                                                        <button type="reset" className="btn reset-btn ms-3 btn-secondary" onClick={handleReset} ><span className='text-secondary'>Reset</span></button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
}
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Create
