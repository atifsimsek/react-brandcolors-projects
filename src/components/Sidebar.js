/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import logo from "../img/logo.png";
import Modal from 'react-modal';
import { CgClose } from "react-icons/cg"
const Sidebar = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }


    return (
        <>
            <aside className='sidebar'>
                <div className="logo">
                    <img src={logo} alt="" />
                    <p>Brand<b>Colors</b></p>
                </div>
                <div className="description">
                    <p>   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi saepe cum quia labore inventore rem.</p>
                </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="#" onClick={toggleModal}>About BrandColor</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay"
            >

                <div>
                    <button className='close-btn' onClick={toggleModal}><CgClose /></button>
                    <h2>About BrandColors</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, mollitia est debitis dolore quos ipsam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, mollitia est debitis dolore quos ipsam?</p>
                </div>

            </Modal>

        </>
    )
}

export default Sidebar