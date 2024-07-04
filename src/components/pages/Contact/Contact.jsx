import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { IoMdSend } from "react-icons/io";
import contactImg from '../../../assets/image/contact.gif';
import { Helmet } from "react-helmet";
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const successToast = () => toast.success('Thank you for your message! We will get back to you soon!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    const serviceID = 'service_gnudsbw';
    const templateID = 'template_xm7bium';

    const onSubmit = (data) => {
        // console.log(data)
        // console.log(form.current)

        // sending form data to email
        emailjs.sendForm(serviceID, templateID, form.current, {
            publicKey: 'EmS6tprw7i2iUWHtn',
        })
            .then(() => {
                successToast();
                reset();
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <ToastContainer />
            <Helmet>
                <title>Abrarul Hoque | Contact Us</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='max-w-6xl mx-auto'>
                <h1 className="text-5xl text-center my-10 font-bold text-white">Get in Touch</h1>
                <p className="text-center text-base">If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
                <div className="flex flex-col md:flex-col lg:flex-row gap-4 my-6">
                    <div className='w-full lg:w-1/2 bg-[#00246661] rounded-xl'>
                        <img src={contactImg} alt="" />
                    </div>
                    <div className='w-full lg:w-1/2 contact-form p-4 bg-[#00246606]' >
                        {/* React Hook Form`` */}
                        <form ref={form} onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                            {/* register your input into the hook by invoking the "register" function */}
                            <h1 className="text-xl">Your Name</h1>
                            <input type="text" className='form-control-contact input w-full' placeholder="Your Name" {...register("from_name", { required: true })} />
                            {errors.from_name && <span className='error'>Name is required</span>}

                            <h1 className="text-xl">Your Email</h1>
                            <input type="email" className='form-control-contact input w-full' placeholder="Your Email" {...register("from_email", { required: true })} />
                            {errors.from_email && <span className='error'>Email is required</span>}
                            {/* <input type="text" className='form-control input w-full h-[100px]' placeholder="Your Email" {...register("message", { required: true })} /> */}
                            <h1 className="text-xl">Your Message</h1>
                            <textarea type="text" className='form-control-contact input w-full h-[100px] px-4 pt-2' placeholder="Your Message" {...register("message", { required: true })}></textarea>
                            {errors.message && <span className='error'>Message is required</span>}


                            {/* include validation with required or other standard HTML validation rules */}
                            {/* <input {...register("email", { required: true })} /> */}
                            {/* errors will return when field validation fails  */}
                            <br />
                            <button className='btn bg-white text-[#002366] font-bold border-4 px-7 border-[#002366] hover:bg-[#002366] hover:text-white' type="submit">Send <IoMdSend /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;