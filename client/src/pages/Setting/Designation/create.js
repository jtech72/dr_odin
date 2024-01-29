import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Card, Row, Col, CloseButton, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { insertDesignation } from '../../../redux/setting/action';
import ToastHandle from '../../../constants/Toaster/Toaster';
import MainLoader from '../../../components/MainLoader';

function Create({ modal, closeModal }) {
  const dispatch = useDispatch()
  const store = useSelector((state) => state)
  const successDesignation = store?.InsertDesignationReducer
  const [designationModal, setDesignationModal] = useState(false)
  const [value, setValue] = useState({ designation: "", rm: "", check: false })
  const handleClose = () => {
    setDesignationModal(false)
    closeModal()
  }
  const handleChange = (e) => {
    setValue({ ...value, designation: e.target.value.replace(/[^a-z. ]/gi, '') })

  }
  const handleDesignationChange = (e) => {
    setValue({ ...value, rm: e.target.value })
  }
  const handelCheckbox = (e) => {
    if (e.target.checked == true) {
      setValue({ ...value, check: true })
    }
    else {
      setValue({ ...value, check: false })
    }
  }
  const handleCreate = () => {
    if (value !== '') {
      let body = {
        designation: value?.designation,
        rmdsgn: value?.rm,
        isHead: value?.check,

      }
      dispatch(insertDesignation(body))
    }
    else {
      ToastHandle("error", " Designation is required")
    }
  }

  useEffect(() => {
    setDesignationModal(modal)
  }, [modal])

  useEffect(() => {
    if (successDesignation?.data?.status == 200) {
      setValue("")
      setDesignationModal(false)
      closeModal("render")
      ToastHandle("success", "Sucessfully Created 👍")
    }
    else if (successDesignation?.data?.status == 400) {
      setDesignationModal(false)
      closeModal()
      ToastHandle("error", "Failed 😔")
    }
    else if (successDesignation?.data?.status == 401) {
      setDesignationModal(false)
      closeModal()
      ToastHandle("error", successDesignation?.data
        ?.message)
    }
    else {
      setDesignationModal(false)
      closeModal()
      setValue("")
    }
  }, [successDesignation])


  return (
    <div>
      <Modal xs={9} onHide={handleClose} show={designationModal}

      >
        {successDesignation?.loading ? <MainLoader /> : <Modal.Body>
          <>
            <Col className='text-end' lg={12}>
              <CloseButton onClick={handleClose} />
            </Col>
            <Row>
              <Col className='mt-2' lg={12}>
                <Form.Group >

                  <Row className="mt-1">

                    <Col className="text-xenter " lg={5}>
                      <Form.Label className='' >
                        Enter Designation :
                      </Form.Label>
                    </Col>
                    <Col lg={7}>
                      <Form.Group className="" >
                        <Form.Control value={value?.designation} onChange={handleChange}
                          type="text"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-xenter mt-1" lg={5}>
                      <Form.Label className=""> Reporting Manager Designation :</Form.Label>
                    </Col>
                    <Col lg={7}>
                      <Form.Select className='mt-2' value={value?.rm} onChange={handleDesignationChange}
                      >
                        <option value=""> --Select-- </option>
                        {store?.GetDesignationReducer?.getDesignation?.response?.map((ele, ind) => {
                          return (

                            <option key={ele?._id} value={ele?._id}  >{ele?.designation} </option>

                          )
                        })}



                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-xenter mt-1" lg={5}>
                      <Form.Check onChange={handelCheckbox} />



                    </Col>
                    <Col lg={7}>
                      <Form.Label className=""> Head </Form.Label>
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Col className='text-end mt-2'><Button onClick={handleCreate}>Add</Button> </Col>
          </>
        </Modal.Body>}
      </Modal>
    </div>
  )
}

export default Create
