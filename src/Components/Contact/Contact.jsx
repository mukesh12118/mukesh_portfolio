import { useEffect, useState } from "react";
import "./contact.scss";

export const Contact = () => {

    let EmailPattern = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    const mailValidateVal = (mail => EmailPattern.test(mail));
    let initialData = {
        name: "",
        email: "",
        textMessage: ""
    }
    const [formData, setFormData] = useState(initialData);
    const [isSubmit, setIsSubmit] = useState(false);
    const [errData, setErrData] = useState({});

    function validateForm() {
        let err = {};
        let { name, email, textMessage } = formData;

        // name Validate 
        if (name === "") {
            err.nameErr = "*This field is required !";
        }

        if (email === "") {
            err.emailErr = "*This field is required !"
        } else if (!mailValidateVal(email)) {
            err.emailErr = "Please enter valid email";
        }
        // Password Validate 
        if (textMessage === "") {
            err.textMessageErr = "*This field is required !";
        }
        setErrData(err);
    }

    function inpHandler(e, name) {
        const { value } = e.target;
        setFormData((prev) => {
            return {
                ...prev, [name]: value
            }
        });
        setIsSubmit(false);
    }

    useEffect(() => {
        if (isSubmit && Object.keys(errData).length === 0) {
            setFormData(initialData)
        }
    }, [isSubmit]);

    function submitMailForm(){

    }

    // useEffect(() => {
    //     if (isLogged?.successLogin) {
    //         setSuccessClass("success")
    //         setTimeout(() => {
    //             setFormData(initialData);
    //             setIsChecked(false);
    //             navigate("/");
    //         }, 1000);
    //     } else {
    //         setSuccessClass("error");
    //     }
    // }, [isLogged]);
    // axios.post(
    //     `https://jsonplaceholder.typicode.com/posts`, { post })
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })

    function submitHandler(e) {
        e.preventDefault();
        validateForm();
        setIsSubmit(true);
    }



    return (
        <div className="contact_container">
            <h1>Get in <span>touch</span></h1>

            <form name="contact" method="post" onSubmit={submitHandler}>
                <input type="hidden" name="contact" value="contact"/>
                <div className="inp_container">
                    <label>
                        <span>Full Name</span>
                        <input
                            className={errData.nameErr ? 'err' : ''}
                            type="text" onChange={e => inpHandler(e, "name")}
                            value={formData.name} />
                        {errData.nameErr && <p className="err_mesg">{errData.nameErr}</p>}
                    </label>
                    <label>
                        <span>E-mail</span>
                        <input
                            className={errData.emailErr ? 'err' : ''}
                            type="text" onChange={e => inpHandler(e, "email")}
                            value={formData.email} />
                        {errData.emailErr && <p className="err_mesg">{errData.emailErr}</p>}

                    </label>
                </div>
                <div className="text_area_container">
                    <textarea
                    className={errData.textMessageErr ? 'err' : ''}
                    name="" id="" cols="30" rows="10"
                    onChange={e => inpHandler(e, "textMessage")}
                    placeholder="Drop me a line..."
                    value={formData.textMessage}
                    ></textarea>
                    {/* {errData.textMessageErr && <p className="err_mesg">{errData.textMessageErr}</p>} */}
                </div>

                <button className="no_border">Submit</button>
            </form>
        </div>
    )
}