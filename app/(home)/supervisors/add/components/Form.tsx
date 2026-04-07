"use client";

import { Modal, Spin } from "antd";
import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error?: string;
}

function TextField(props: TextFieldProps) {
  return (
    <div className="my-4">
      <label className="block" htmlFor="">
        {props.title}
      </label>
      <input
        {...props}
        type="text"
        className="border border-grey p-2 py-1 rounded-md w-full bg-transparent"
      />
      {props.error && (
        <p className="text-[#f44336] text-xs font-semibold">{props.error}</p>
      )}
    </div>
  );
}

export default function Form() {
  return (
    <div>
      {/* <Modal width={300} open={loadingForm} footer={null} centered closable={false} maskClosable={false} closeIcon={null}>
                <div className="text-center">
                    <div className="max-w-[100px] mx-auto">
                        <Spin/>
                    </div>
                    <p className="text-dark text-xl">Adding Supervisor</p>
                </div>
            </Modal>
            <form onSubmit={handleSubmit}>
                <TextField
                    value={formData.email}
                    onChange={handleInput}
                    name="email"
                    error={formErrors.email}
                    title="Email"
                    placeholder="Enter Supervisor Email"
                />
                <TextField
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInput}
                    title="First Name"
                    error={formErrors.firstname}
                    placeholder="Enter Supervisor Firstname"
                />
                <TextField
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInput}
                    title="Last Name"
                    error={formErrors.lastname}
                    placeholder="Enter Supervisor Lastname"
                />
                <button type="submit" className="bg-dark text-white p-2 w-full rounded-md my-2">Submit</button>
            </form> */}
    </div>
  );
}
